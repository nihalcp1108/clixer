import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required.'
      });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const configAdminEmail = (process.env.ADMIN_EMAIL || 'clixer@admin.com').trim().toLowerCase();

    // 1. Verify email matches configured admin email or DB admin
    let passwordHash = null;
    let adminRecord = null;

    if (trimmedEmail === configAdminEmail) {
      passwordHash = process.env.ADMIN_PASSWORD_HASH || process.env.ADMIN_PASSWORD;
    } else {
      adminRecord = await Admin.findOne({ email: trimmedEmail });
      if (adminRecord) {
        passwordHash = adminRecord.password;
      }
    }

    if (!passwordHash) {
      return res.status(401).json({
        success: false,
        message: 'Invalid admin email or unconfigured credentials.'
      });
    }

    // 2. Validate password using bcrypt or plain match fallback
    let isPasswordValid = false;
    if (
      typeof passwordHash === 'string' &&
      (passwordHash.startsWith('$2a$') || passwordHash.startsWith('$2b$') || passwordHash.startsWith('$2y$'))
    ) {
      isPasswordValid = await bcrypt.compare(password, passwordHash);
    } else {
      isPasswordValid = password === passwordHash;
    }

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid admin password.'
      });
    }

    // 3. Generate JWT Token
    const jwtSecret = process.env.JWT_SECRET || 'clixer_default_jwt_secret_fallback_key';
    const token = jwt.sign(
      {
        email: trimmedEmail,
        role: 'admin'
      },
      jwtSecret,
      { expiresIn: '24h' }
    );

    return res.status(200).json({
      success: true,
      message: 'Admin authenticated successfully.',
      token,
      admin: {
        email: trimmedEmail,
        role: 'admin'
      }
    });
  } catch (error) {
    console.error('Admin login error:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to connect to the server. Please try again.'
    });
  }
};

export const getAdminMe = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      admin: {
        email: req.admin.email,
        role: req.admin.role
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to verify admin status.'
    });
  }
};

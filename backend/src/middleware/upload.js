import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { cloudinary, isCloudinaryConfigured } from '../config/cloudinary.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.resolve(__dirname, '../../uploads/products');

// Ensure local uploads directory exists
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer memory storage for direct streaming to Cloudinary or disk
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  const ext = path.extname(file.originalname).toLowerCase();
  const allowedExts = ['.jpg', '.jpeg', '.png', '.webp'];

  if (allowedMimeTypes.includes(file.mimetype) || allowedExts.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid image format. Only JPG, JPEG, PNG, and WebP are supported.'), false);
  }
};

export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5 MB limit
  },
  fileFilter
});

/**
 * Upload an image either to Cloudinary (if configured) or local disk
 * @param {Express.Multer.File} file
 * @returns {Promise<{ url: string, publicId: string | null }>}
 */
export const uploadImage = async (file) => {
  if (!file) return null;

  if (isCloudinaryConfigured) {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'clixer/products',
          transformation: [{ quality: 'auto', fetch_format: 'auto' }]
        },
        (error, result) => {
          if (error) {
            console.error('Cloudinary upload error:', error);
            // Fallback to local disk if Cloudinary call fails
            try {
              const localResult = saveLocalFile(file);
              return resolve(localResult);
            } catch (localErr) {
              return reject(error);
            }
          }
          resolve({
            url: result.secure_url,
            publicId: result.public_id
          });
        }
      );
      uploadStream.end(file.buffer);
    });
  }

  // Local fallback
  return saveLocalFile(file);
};

const saveLocalFile = (file) => {
  const ext = path.extname(file.originalname).toLowerCase() || '.png';
  const cleanName = path.basename(file.originalname, ext).replace(/[^a-zA-Z0-9-_]/g, '_');
  const filename = `${Date.now()}-${cleanName}${ext}`;
  const filepath = path.join(uploadsDir, filename);

  fs.writeFileSync(filepath, file.buffer);
  return {
    url: `/uploads/products/${filename}`,
    publicId: null
  };
};

/**
 * Delete image from Cloudinary or local disk
 * @param {string} publicId
 * @param {string} url
 */
export const deleteImage = async (publicId, url) => {
  try {
    if (publicId && isCloudinaryConfigured) {
      await cloudinary.uploader.destroy(publicId);
      return;
    }

    if (url && url.startsWith('/uploads/products/')) {
      const localFilename = path.basename(url);
      const localPath = path.join(uploadsDir, localFilename);
      if (fs.existsSync(localPath)) {
        fs.unlinkSync(localPath);
      }
    }
  } catch (err) {
    console.warn('Error during image cleanup:', err.message);
  }
};

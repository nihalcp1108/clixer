import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, ShieldCheck, ArrowLeft, AlertCircle } from 'lucide-react';
import { adminLogin, isAdminAuthenticated } from '../services/api';

export default function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // If already logged in, redirect to /admin
  useEffect(() => {
    if (isAdminAuthenticated()) {
      const from = location.state?.from?.pathname || '/admin';
      navigate(from, { replace: true });
    }
  }, [navigate, location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setErrorMessage('Invalid admin email.');
      return;
    }

    if (!password) {
      setErrorMessage('Invalid admin password.');
      return;
    }

    setLoading(true);

    try {
      await adminLogin(email.trim(), password);
      const from = location.state?.from?.pathname || '/admin';
      navigate(from, { replace: true });
    } catch (err) {
      setErrorMessage(err.message || 'Unable to connect to the server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-backdrop-glow" />

      <div className="admin-login-card">
        {/* Top Header / Branding */}
        <div className="admin-login-header">
          <div className="admin-brand-logos">
            <img
              src="/images/branding/saco-logo.png"
              alt="SACO Trading Company"
              className="admin-saco-logo"
            />
            <span className="admin-logo-divider">|</span>
            <img
              src="/images/branding/clixer-logo.png"
              alt="CLIXER®"
              className="admin-clixer-logo"
            />
          </div>
          <h1 className="admin-login-title">Admin Portal Login</h1>
          <p className="admin-login-subtitle">
            Secure administrative access for product & inventory management
          </p>
        </div>

        {/* Error Alert Box */}
        {errorMessage && (
          <div className="admin-alert-danger" role="alert">
            <AlertCircle size={18} className="admin-alert-icon" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="admin-login-form" noValidate>
          <div className="admin-form-group">
            <label htmlFor="admin-email" className="admin-form-label">
              Admin Email
            </label>
            <div className="admin-input-wrapper">
              <Mail size={18} className="admin-input-icon" />
              <input
                id="admin-email"
                type="email"
                autoComplete="email"
                required
                placeholder="clixer@admin.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="admin-form-input"
                disabled={loading}
              />
            </div>
          </div>

          <div className="admin-form-group">
            <label htmlFor="admin-password" className="admin-form-label">
              Password
            </label>
            <div className="admin-input-wrapper">
              <Lock size={18} className="admin-input-icon" />
              <input
                id="admin-password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="admin-form-input"
                disabled={loading}
              />
              <button
                type="button"
                className="admin-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary admin-submit-btn"
            disabled={loading}
          >
            {loading ? (
              <span className="admin-btn-content">
                <span className="admin-spinner-small" />
                Signing in...
              </span>
            ) : (
              <span className="admin-btn-content">
                <ShieldCheck size={18} />
                Sign In to Dashboard
              </span>
            )}
          </button>
        </form>

        {/* Back to Public Site Link */}
        <div className="admin-login-footer">
          <Link to="/" className="admin-back-link">
            <ArrowLeft size={16} />
            <span>Return to Public Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

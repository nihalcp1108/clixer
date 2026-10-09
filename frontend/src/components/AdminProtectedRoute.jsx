import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAdminAuthenticated, verifyAdminToken, clearAuthToken } from '../services/api';

export default function AdminProtectedRoute({ children }) {
  const location = useLocation();
  const [checking, setChecking] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const checkAuth = async () => {
      if (!isAdminAuthenticated()) {
        if (isMounted) {
          setAuthorized(false);
          setChecking(false);
        }
        return;
      }

      const isValid = await verifyAdminToken();
      if (!isValid) {
        clearAuthToken();
      }

      if (isMounted) {
        setAuthorized(isValid);
        setChecking(false);
      }
    };

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, [location.pathname]);

  if (checking) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--light-bg, #f8fafc)',
        fontFamily: 'var(--font-heading, Montserrat, sans-serif)',
        color: 'var(--text-muted, #64748b)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div className="admin-spinner" style={{
            width: '40px',
            height: '40px',
            border: '3px solid #e2e8f0',
            borderTopColor: 'var(--primary, #c84b60)',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
            margin: '0 auto 1rem auto'
          }} />
          <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>Verifying Admin Session...</p>
        </div>
      </div>
    );
  }

  if (!authorized) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return children;
}

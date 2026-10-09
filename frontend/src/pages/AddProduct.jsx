import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, PlusCircle } from 'lucide-react';
import ProductForm from '../components/ProductForm';
import { createProduct } from '../services/api';
import { useProducts } from '../context/ProductContext';

export default function AddProduct() {
  const navigate = useNavigate();
  const { refreshProducts } = useProducts();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCreate = async (formData) => {
    setLoading(true);
    setError('');
    try {
      await createProduct(formData);
      await refreshProducts();
      navigate('/admin', { replace: true });
    } catch (err) {
      setError(err.message || 'Failed to create product.');
      setLoading(false);
    }
  };

  return (
    <div className="admin-page-container">
      {/* Top Header */}
      <header className="admin-header">
        <div className="container admin-header-container">
          <div className="admin-header-brand">
            <Link to="/admin" className="admin-back-brand-link">
              <img
                src="/images/branding/clixer-logo.png"
                alt="CLIXER®"
                className="admin-header-clixer-logo"
              />
            </Link>
            <span className="admin-header-divider">/</span>
            <span className="admin-header-tag">Add New Product</span>
          </div>

          <Link to="/admin" className="admin-header-btn admin-view-site-btn">
            <ArrowLeft size={16} />
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </header>

      {/* Main Form Content */}
      <main className="container admin-main">
        <div className="admin-page-title-row">
          <div>
            <h1 className="admin-page-title">
              <PlusCircle size={24} className="admin-title-icon" />
              Add New Catalogue Product
            </h1>
            <p className="admin-page-desc">
              Create a new stainless steel drain, trap, or accessory with custom dimensions & imagery.
            </p>
          </div>
        </div>

        {error && (
          <div className="admin-alert-danger" role="alert" style={{ marginBottom: '1.5rem' }}>
            <span>{error}</span>
          </div>
        )}

        <ProductForm onSubmit={handleCreate} loading={loading} isEdit={false} />
      </main>
    </div>
  );
}

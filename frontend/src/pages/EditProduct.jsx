import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Edit3 } from 'lucide-react';
import ProductForm from '../components/ProductForm';
import { fetchProductById, updateProduct } from '../services/api';
import { useProducts } from '../context/ProductContext';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { refreshProducts } = useProducts();

  const [initialData, setInitialData] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadProduct = async () => {
      setFetching(true);
      setError('');
      try {
        const product = await fetchProductById(id);
        if (isMounted) {
          setInitialData(product);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to fetch product details.');
        }
      } finally {
        if (isMounted) {
          setFetching(false);
        }
      }
    };

    loadProduct();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleUpdate = async (formData) => {
    setLoading(true);
    setError('');
    try {
      await updateProduct(id, formData);
      await refreshProducts();
      navigate('/admin', { replace: true });
    } catch (err) {
      setError(err.message || 'Failed to update product.');
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
            <span className="admin-header-tag">Edit Product</span>
          </div>

          <Link to="/admin" className="admin-header-btn admin-view-site-btn">
            <ArrowLeft size={16} />
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container admin-main">
        <div className="admin-page-title-row">
          <div>
            <h1 className="admin-page-title">
              <Edit3 size={24} className="admin-title-icon" />
              Edit Catalogue Product
            </h1>
            <p className="admin-page-desc">
              Modify product details, change/keep current image, or update the list of available sizes.
            </p>
          </div>
        </div>

        {error && (
          <div className="admin-alert-danger" role="alert" style={{ marginBottom: '1.5rem' }}>
            <span>{error}</span>
          </div>
        )}

        {fetching ? (
          <div className="admin-loading-container">
            <div className="admin-spinner" />
            <p>Loading product details...</p>
          </div>
        ) : initialData ? (
          <ProductForm
            initialData={initialData}
            onSubmit={handleUpdate}
            loading={loading}
            isEdit={true}
          />
        ) : (
          <div className="admin-empty-state">
            <h3>Product not found</h3>
            <p>The product you are trying to edit could not be found or has been removed.</p>
            <Link to="/admin" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              Return to Dashboard
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}

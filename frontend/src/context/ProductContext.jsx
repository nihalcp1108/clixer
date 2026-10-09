import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { fetchProducts } from '../services/api';
import { products as initialStaticProducts } from '../data/products';

const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(initialStaticProducts || []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchProducts();
      const list = Array.isArray(data) ? data : (data?.products || []);
      setProducts(list);
      return list;
    } catch (err) {
      console.warn('Failed to load products from API, utilizing static catalogue fallback:', err);
      setError(err.message || 'Unable to load products.');
      setProducts((prev) => (prev && prev.length > 0 ? prev : initialStaticProducts));
      return initialStaticProducts;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshProducts();
  }, [refreshProducts]);

  const getProductById = useCallback((id) => {
    if (!id) return null;
    const cleanId = String(id).toLowerCase().trim();
    return products.find(p =>
      String(p._id || '').toLowerCase() === cleanId ||
      String(p.id || '').toLowerCase() === cleanId ||
      String(p.customId || '').toLowerCase() === cleanId ||
      String(p.model || '').toLowerCase() === cleanId ||
      String(p.code || '').toLowerCase() === cleanId
    );
  }, [products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        refreshProducts,
        getProductById
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}

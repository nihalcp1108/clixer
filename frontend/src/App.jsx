import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AdminAuthProvider } from './context/AdminAuthContext';
import { ProductProvider } from './context/ProductContext';
import AppRoutes from './routes/AppRoutes';
import './styles.css';

export default function App() {
  return (
    <BrowserRouter>
      <AdminAuthProvider>
        <ProductProvider>
          <AppRoutes />
        </ProductProvider>
      </AdminAuthProvider>
    </BrowserRouter>
  );
}


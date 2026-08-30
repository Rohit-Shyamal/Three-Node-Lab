import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './cms-components/Layout';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import ServicesPage from './pages/ServicesPage';
import AddressPage from './pages/AddressPage';
import PaymentPage from './pages/PaymentPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/Three-Node-Lab">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="store" element={<StorePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="checkout/address" element={<AddressPage />} />
            <Route path="checkout/payment" element={<PaymentPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

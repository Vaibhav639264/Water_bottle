import React from 'react';
import ProductsSection from '../components/ProductsSection';
import Footer from '../components/Footer';

const Products = () => {
  return (
    <div className="min-h-screen">
      <div className="py-20">
        <ProductsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
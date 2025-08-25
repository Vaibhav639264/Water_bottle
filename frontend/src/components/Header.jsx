import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Droplets } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Droplets className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Luxe Springs</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${isActive('/')}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`font-medium transition-colors ${isActive('/products')}`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${isActive('/about')}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${isActive('/contact')}`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Link 
            to="/contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
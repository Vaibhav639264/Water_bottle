import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1655079343782-f0fc4704753e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxwcmVtaXVtJTIwd2F0ZXIlMjBib3R0bGVzfGVufDB8fHx8MTc1NjExMDk3N3ww&ixlib=rb-4.1.0&q=85"
          alt="Premium Water Bottles"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Premium Custom-Labeled Water Solutions
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Elevate your brand presence with our premium packaged drinking water
            </p>
            <p className="text-lg mb-8 text-blue-200">
              From luxury hotels to elite events, we provide custom-labeled water bottles that reflect your brand identity, making every sip a statement. Perfect for weddings, corporate events, hospitality, and retail in India.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-cyan-400" />
                <span className="text-blue-100">Custom branded water bottles</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-cyan-400" />
                <span className="text-blue-100">Premium quality guaranteed</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-cyan-400" />
                <span className="text-blue-100">Flexible bulk ordering</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-cyan-400" />
                <span className="text-blue-100">Fast nationwide delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex space-x-4">
              <Link 
                to="/contact"
                className="bg-cyan-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors inline-flex items-center space-x-2"
              >
                <span>Get Custom Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/products"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>

          {/* Right Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10K+</div>
              <div className="text-blue-100">Monthly Target</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">₹1.8 CR</div>
              <div className="text-blue-100">Yearly Revenue</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">Tier 2/3</div>
              <div className="text-blue-100">Cities Focus</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">Premium</div>
              <div className="text-blue-100">Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
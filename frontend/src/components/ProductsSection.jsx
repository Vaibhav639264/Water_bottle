import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      size: "300ml",
      title: "Premium 300ml Custom-Labeled",
      description: "Perfect for high-tea setups, wedding welcome kits, boutique hotels, guest lounges, private parties, and luxury gifting hampers.",
      image: "https://customer-assets.emergentagent.com/job_aquaflow-replica/artifacts/ypbroyzi_image1-Picsart-AiImageEnhancer.jpg",
      features: ["Petite and chic design", "Elegant waterproof labels", "Matte or gloss finish", "Eco-friendly options"],
      priceRange: "₹7-₹9",
      idealFor: "Wedding kits, boutique hotels, luxury gifting",
      badge: "300ml"
    },
    {
      size: "500ml",
      title: "Standard 500ml Custom-Labeled",
      description: "Ideal for conferences, gyms, spas, restaurants, car showrooms, product launches, and day-to-day hydration with your branding.",
      image: "https://images.unsplash.com/photo-1695793303287-d5f4005ed721?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxwcmVtaXVtJTIwd2F0ZXIlMjBib3R0bGVzfGVufDB8fHx8MTc1NjExMDk3N3ww&ixlib=rb-4.1.0&q=85",
      features: ["Perfect conference size", "Premium PET material", "Custom branding display", "Screw cap design"],
      priceRange: "₹9-₹12",
      idealFor: "Corporate events, gyms, showrooms",
      badge: "500ml"
    },
    {
      size: "1000ml",
      title: "Large 1000ml Custom-Labeled",
      description: "Perfect for hotel suites, restaurants & dining setups, wellness centres, and corporate events where extended use is valued.",
      image: "https://images.unsplash.com/photo-1596629095299-544ddf11b6f9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdhdGVyJTIwYm90dGxlc3xlbnwwfHx8fDE3NTYxMTA5ODN8MA&ixlib=rb-4.1.0&q=85",
      features: ["Extended use size", "Premium finish options", "Generous servings", "Restaurant-grade quality"],
      priceRange: "₹15-₹17",
      idealFor: "Hotel suites, dining setups, wellness centres",
      badge: "1000ml"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Luxe Springs Product Range</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Water isn't just hydration — it's a reflection of your brand's care, elegance, and attention to detail. Our premium bottled water collection comes in three versatile sizes, designed to meet every occasion's requirement.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
              {/* Product Image */}
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.badge}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8">
                <div className="text-2xl font-bold text-blue-600 mb-2">{product.size}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-lg font-bold text-gray-900">Price Range</div>
                      <div className="text-2xl font-bold text-blue-600">{product.priceRange}</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-700 mb-1">Ideal for:</div>
                    <div className="text-sm text-gray-600">{product.idealFor}</div>
                  </div>

                  <Link 
                    to="/contact"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-12 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We offer fully customized water bottle solutions tailored to your specific business needs. Contact us to discuss volume pricing, custom sizes, and exclusive branding options.
            </p>
            <Link 
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Discuss Custom Options</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

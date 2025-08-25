import React from 'react';
import { Droplets, Award, Package } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Droplets className="h-12 w-12 text-blue-500" />,
      title: "Premium Natural Mineral Water",
      description: "Fresh-tasting natural mineral water sourced from certified vendors with strict quality control.",
      image: "https://customer-assets.emergentagent.com/job_aquaflow-replica/artifacts/ypbroyzi_image1-Picsart-AiImageEnhancer.jpg"
    },
    {
      icon: <Award className="h-12 w-12 text-blue-500" />,
      title: "Custom Label Design",
      description: "High-quality, waterproof custom labels with matte or gloss finish options that act as premium brand advertisements.",
      image: "https://customer-assets.emergentagent.com/job_aquaflow-replica/artifacts/ypbroyzi_image1-Picsart-AiImageEnhancer.jpg"
    },
    {
      icon: <Package className="h-12 w-12 text-blue-500" />,
      title: "Flexible Solutions",
      description: "Multiple size options and sustainability-driven packaging to suit different events and hospitality needs.",
      image: "https://customer-assets.emergentagent.com/job_aquaflow-replica/artifacts/ypbroyzi_image1-Picsart-AiImageEnhancer.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Droplets className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Luxe Springs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium, eco-conscious custom-labeled bottled water designed to elevate brand presence and customer experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market Stats */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
            Positioned slightly above mass-market brands but below ultra-premium brands, Luxe Springs conveys exclusivity with value in the ₹3000+ crore Indian bottled water market.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">78%</div>
              <div className="text-gray-700">CAGR in Tier 2/3 Cities</div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">₹3000+ CR</div>
              <div className="text-gray-700">Indian Bottled Water Market</div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">Untapped</div>
              <div className="text-gray-700">Event & Hospitality Demand</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
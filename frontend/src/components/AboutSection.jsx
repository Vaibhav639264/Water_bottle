import React from 'react';
import { Target, Heart, Leaf } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Premium Quality",
      description: "Natural mineral water sourced from certified vendors with strict quality control and testing."
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Custom Branding",
      description: "High-quality, waterproof custom labels that act as subtle, premium brand advertisements."
    },
    {
      icon: <Leaf className="h-8 w-8 text-blue-600" />,
      title: "Sustainability Focus",
      description: "Eco-conscious packaging options with recyclable materials to align with your brand's values."
    }
  ];

  const audiences = [
    {
      title: "Event Planners & Wedding Organisers",
      description: "Branded water bottles for wedding hampers, welcome kits, and table setups in the massive wedding market."
    },
    {
      title: "Boutique Hotels & Resorts",
      description: "Premium-looking products for guest experiences in family-run hotels and boutique resorts."
    },
    {
      title: "Corporate Offices & Co-Working Spaces",
      description: "Custom-branded items for meetings, conferences, and visitor lounges in emerging business hubs."
    },
    {
      title: "Gyms, Salons & Spas",
      description: "Branded hydration as an add-on service for the growing wellness market."
    },
    {
      title: "Car Showrooms & Luxury Retail",
      description: "Enhance customer experience in upscale showrooms and outlets with branded water."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Luxe Springs</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Luxe Springs is a premium packaged drinking water brand that blends hydration with high-end brand personalisation. With a commitment to quality, design, and service, Luxe Springs is the perfect partner for businesses looking to elevate their brand presence.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading provider of customised premium water solutions that enhance brand experiences across industries.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver high-quality, beautifully branded water bottles that serve both functional and marketing needs, while ensuring sustainability, customer satisfaction, and attention to detail.
            </p>
          </div>
        </div>

        {/* Market Opportunity */}
        <div className="bg-blue-50 p-8 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">The Opportunity</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Current Market Gaps:</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Generic bottled water lacks brand customization for events, hospitality, and corporate needs in 3-tier cities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Limited access to premium, eco-conscious bottled water with personalized branding</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Rising demand for lifestyle-centric, branded products for weddings, hotels, and retail in small cities</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Luxesprings Stands Out:</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span className="text-gray-700">Premium, fresh-tasting natural mineral water sourced from certified vendors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span className="text-gray-700">Custom-designed, high-quality labels that act as subtle, premium brand advertisements</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span className="text-gray-700">Flexible size options to suit different event and hospitality needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span className="text-gray-700">Sustainability-driven packaging options to align with your brand's eco values</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10,000</div>
            <div className="text-gray-700">Monthly Orders</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">₹15 Lakh</div>
            <div className="text-gray-700">Monthly Revenue</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">~20%</div>
            <div className="text-gray-700">Gross Margin</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">₹1.8 CR</div>
            <div className="text-gray-700">Yearly Revenue</div>
          </div>
        </div>

        {/* Target Audiences */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Target Audiences We Serve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-lg font-bold text-gray-900 mb-4">{audience.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Operations & Team */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Operations & Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Production</h4>
              <p className="text-gray-600 text-sm">Outsourced to certified facilities with strict quality control</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Distribution</h4>
              <p className="text-gray-600 text-sm">Local logistics partners with scope for pan-India delivery</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Team</h4>
              <p className="text-gray-600 text-sm">2 Directors & 2 Staff members managing branding, logistics, and client coordination</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import React from 'react';
import { Droplets } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subscription Models Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">Subscription Models</h3>
          <p className="text-gray-300 mb-8 max-w-3xl">
            Choose from our flexible subscription plans designed for different business needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fixed Monthly Plan */}
            <div className="bg-gray-800 p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-4">Fixed Monthly Bottle Plan (Retainer Model)</h4>
              <p className="text-gray-300 mb-6">
                Clients commit to a minimum monthly order quantity at a discounted rate for 6 months.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Discounted rates for bulk orders</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Predictable monthly supply</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">6-month commitment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Ideal for regular needs</span>
                </li>
              </ul>
              
              <div className="text-sm text-gray-400">
                <strong>Ideal For:</strong> Hotels, showrooms, gyms, salons, and offices with predictable monthly water needs
              </div>
            </div>

            {/* Prepaid Bulk Subscription */}
            <div className="bg-gray-800 p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-4">Prepaid Bulk Subscription</h4>
              <p className="text-gray-300 mb-6">
                Clients pay upfront for a large volume of bottles to be delivered in scheduled instalments over 6 months.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Higher discount (5-70%)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Storage flexibility — delivered in batches</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Early renewal bonus</span>
                </li>
              </ul>
              
              <div className="text-sm text-gray-400">
                <strong>Ideal For:</strong> Large hotels, corporate parks, caterers
              </div>
            </div>
          </div>

          {/* Subscription Add-ons */}
          <div className="mt-8 bg-gray-800 p-6 rounded-xl">
            <h4 className="text-lg font-bold mb-4">Subscription Add-ons</h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">Label design refresh service every 6 months</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">Limited-edition festive labels during Diwali, New Year, or wedding season</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">Dedicated account manager for subscription clients</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Luxe Springs</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <img 
                src="https://avatars.githubusercontent.com/in/1201222?s=120&u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&v=4" 
                alt="Emergent"
                className="h-6 w-6 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

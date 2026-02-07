import React from 'react';
import { Shield, CreditCard, Search, MapPin } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

// Import images
import storeButtons from 'figma:asset/6b7660ba114d875adfd305fce520ad5190019f1c.png';
import analyticsScreen from 'figma:asset/169a4a4c788a0687ecfc3435b9832dd181af9cdd.png';
import homeScreen from 'figma:asset/684c9e8d5ba2a38c65f65fbb8caebc0dbff165e6.png';

const features = [
  {
    name: 'Verified Suppliers',
    description: 'We rigorously vet every vendor to ensure genuine, high-quality spare parts.',
    icon: Shield,
    color: 'text-fuchsia-400',
    gradient: 'from-fuchsia-600 to-fuchsia-400',
  },
  {
    name: 'Smart Search',
    description: 'Find the exact part you need using your VIN number or car model details.',
    icon: Search,
    color: 'text-purple-400',
    gradient: 'from-purple-600 to-purple-400',
  },
  {
    name: 'Local Experts',
    description: 'Locate the best mechanics and service centers in your neighborhood.',
    icon: MapPin,
    color: 'text-pink-400',
    gradient: 'from-pink-600 to-pink-400',
  },
  {
    name: 'Secure Payments',
    description: 'Transactions are protected with state-of-the-art encryption.',
    icon: CreditCard,
    color: 'text-violet-400',
    gradient: 'from-violet-600 to-violet-400',
  },
];

export function Features() {
  return (
    <div className="py-24 bg-[#0B0514] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-24">
          <h2 className="text-sm font-bold text-fuchsia-500 tracking-wider uppercase">Platform Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Everything You Need
          </p>
          <p className="mt-4 max-w-2xl text-lg text-slate-400 lg:mx-auto">
             Powerful tools built for both car owners and service providers.
          </p>
        </div>

        {/* Honeycomb/Diamond Grid */}
        <div className="relative w-full flex flex-wrap justify-center items-start gap-y-8 lg:gap-y-0 lg:-space-x-4 pb-24 border-b border-white/5">
          {features.map((feature, index) => (
            <div 
              key={feature.name} 
              className={`
                relative w-[300px] h-[350px] flex-shrink-0 group transition-all duration-300
                ${index % 2 !== 0 ? 'lg:mt-32' : 'lg:mt-0'} 
                hover:z-10
              `}
            >
              {/* Drop Shadow Wrapper */}
              <div className="w-full h-full filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:drop-shadow-[0_20px_30px_rgba(192,38,211,0.25)]">
                
                {/* Hexagon Shape Container */}
                <div 
                  className="w-full h-full bg-[#160C25] border-t border-white/5 flex flex-col items-center justify-center p-8 text-center"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                >
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                  {/* Icon */}
                  <div className={`
                    relative w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} 
                    flex items-center justify-center mb-6 shadow-lg shadow-black/40
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold text-white mb-3">{feature.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed max-w-[200px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      
        {/* Download App Section */}
        <div id="download" className="mt-24">
          <div className="bg-[#160C25] rounded-[3rem] p-8 md:p-12 lg:p-16 border border-white/5 shadow-2xl overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
              
              {/* Left Side: Content */}
              <div className="flex-1 text-center lg:text-left space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                    Get the App & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-500">Start Your Engine</span>
                  </h2>
                  <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Experience the full power of our automotive marketplace in the palm of your hand. 
                    Track orders, chat with mechanics, and manage your garage effortlessly.
                    Download now for exclusive mobile-only deals.
                  </p>
                </div>
                
                <div className="flex justify-center lg:justify-start">
                   <img 
                      src={storeButtons} 
                      alt="Download on App Store and Google Play" 
                      className="h-28 md:h-40 object-contain hover:opacity-90 transition-opacity cursor-pointer"
                   />
                </div>
              </div>

              {/* Right Side: Static Phone Mockups (Hidden on Mobile) */}
              <div className="hidden lg:flex flex-1 w-full justify-end relative h-[500px]">
                 <div className="relative w-full max-w-[500px] h-full">
                    {/* Back Phone (Analytics) - Shifted Left */}
                    <div className="absolute top-8 left-0 transform rotate-[-6deg] hover:rotate-0 transition-all duration-500 z-10 hover:z-30 hover:scale-105">
                       <PhoneMockup src={analyticsScreen} className="shadow-2xl" />
                    </div>
                    
                    {/* Front Phone (Home Screen) - Shifted Right */}
                    <div className="absolute top-0 right-0 transform rotate-[6deg] hover:rotate-0 transition-all duration-500 z-20 hover:scale-105">
                       <PhoneMockup src={homeScreen} className="shadow-[0_20px_50px_-12px_rgba(192,38,211,0.5)]" />
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

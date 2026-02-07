import React from 'react';
import { Wrench, ShoppingCart, User, Briefcase, ArrowRight, ShieldCheck, ShoppingBag, Truck, PenTool } from 'lucide-react';

import serviceProviderImg from 'figma:asset/7968328b892303d5ecec53cefabc2264fbe34f07.png';
import vendorImg from 'figma:asset/3c4c762d26ca7a7607e811c1464b375c47547c45.png';

const gateways = [
  {
    title: "For Drivers",
    badge: "For Drivers",
    badgeIcon: User,
    image: "https://images.unsplash.com/photo-1758525747638-25563afc9ff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlcnNvbiUyMGRyaXZpbmclMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzAzODczNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    headline: "Find Parts & Services",
    description: "Access a vast marketplace of genuine spare parts and connect with top-rated mechanics in your area.",
    features: [
      { icon: ShoppingCart, text: "Buy Genuine Spare Parts" },
      { icon: Wrench, text: "Book Trusted Mechanics" }
    ],
    buttonText: "Enter Customer Portal"
  },
  {
    title: "For Parts Vendors",
    badge: "For Vendors",
    badgeIcon: ShoppingBag,
    image: vendorImg,
    headline: "Sell Auto Parts",
    description: "Expand your reach by selling directly to car owners. Manage inventory and orders in one dashboard.",
    features: [
      { icon: ShoppingBag, text: "Sell Parts Globally" },
      { icon: ShieldCheck, text: "Verified Store Profile" }
    ],
    buttonText: "Join as Vendor"
  },
  {
    title: "For Service Providers",
    badge: "For Providers",
    badgeIcon: Briefcase,
    image: serviceProviderImg,
    headline: "Grow Your Workshop",
    description: "Get more bookings for repairs, towing, and recovery services. Streamline your service operations.",
    features: [
      { icon: Wrench, text: "Receive Booking Requests" },
      { icon: Truck, text: "Offer Roadside Assistance" }
    ],
    buttonText: "Join as Provider"
  }
];

export function GatewaySection() {
  return (
    <div id="gateways" className="py-24 bg-[#0B0514] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-fuchsia-500 tracking-wider uppercase">Your Journey Starts Here</h2>
          <p className="mt-2 text-3xl leading-tight font-extrabold text-white sm:text-4xl">
            Choose Your Path
          </p>
          <p className="mt-4 max-w-2xl text-lg text-slate-400 mx-auto">
            Whether you're looking to fix up your ride, sell parts, or offer specialized services, we have a dedicated portal for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gateways.map((gateway, index) => (
            <div key={index} className="group relative bg-[#160C25] rounded-3xl p-1 shadow-xl hover:shadow-2xl hover:shadow-fuchsia-500/10 transition-all duration-300 border border-white/5 flex flex-col h-full">
              <div className="flex flex-col h-full rounded-[1.3rem] overflow-hidden">
                 {/* Image Header */}
                 <div className="h-56 relative overflow-hidden">
                    <div className="absolute inset-0 bg-fuchsia-900/20 mix-blend-overlay z-10"></div>
                    <img 
                      src={gateway.image} 
                      alt={gateway.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#160C25]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-fuchsia-400 z-20 flex items-center shadow-sm border border-white/10">
                      <gateway.badgeIcon className="w-4 h-4 mr-2" />
                      {gateway.badge}
                    </div>
                 </div>

                 {/* Content Body */}
                 <div className="flex-1 p-6 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3">{gateway.headline}</h3>
                    <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-1">
                      {gateway.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {gateway.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-300 text-sm">
                          <div className="bg-fuchsia-500/10 p-1.5 rounded-full mr-3 shrink-0">
                            <feature.icon className="w-3.5 h-3.5 text-fuchsia-400" />
                          </div>
                          {feature.text}
                        </li>
                      ))}
                    </ul>

                    <a href="#download" className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:opacity-90 text-white py-3.5 rounded-xl font-bold text-base shadow-lg shadow-purple-600/20 transition-all flex items-center justify-center group-hover:translate-y-[-2px]">
                      {gateway.buttonText} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

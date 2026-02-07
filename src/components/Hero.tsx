import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

// Import images
import originalScreen from 'figma:asset/684c9e8d5ba2a38c65f65fbb8caebc0dbff165e6.png';
import analyticsScreen from 'figma:asset/169a4a4c788a0687ecfc3435b9832dd181af9cdd.png';
import accountTypeScreen from 'figma:asset/190fa6f7648ca58fda24707d356f072cc0007a78.png';

export function Hero() {
  return (
    <div className="relative bg-[#0B0514] pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20 dark:opacity-30 mix-blend-overlay"
          src="https://images.unsplash.com/photo-1690674569400-0396f33445b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBzaWx2ZXIlMjBjYXIlMjBzdHVkaW8lMjBsaWdodGluZ3xlbnwxfHx8fDE3NzAzODczNjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Modern Luxury Car"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0514] via-[#0B0514]/90 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-fuchsia-900/20 via-[#0B0514]/0 to-[#0B0514]/0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Text Content - Left Aligned */}
          <div className="text-center lg:text-left lg:w-1/2 z-20">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              The Ultimate Hub for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-500">Automotive Excellence</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Connect with trusted service providers or expand your automotive business. The one-stop marketplace for parts, repairs, and growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#download"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-500/40 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#gateways"
                className="flex items-center justify-center px-8 py-3 border border-slate-700 bg-white/5 backdrop-blur-sm text-base font-medium rounded-full text-white hover:bg-white/10 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
          
          {/* 3 Phone Composition - Right Aligned */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10 h-[450px] sm:h-[550px] lg:h-[650px] perspective-1000">
             
             {/* Glow effect behind phones */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-fuchsia-600/20 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none"></div>
             
             <div className="relative w-full h-full flex items-center justify-center">
                {/* 1. Left Phone - Analytics (Behind) */}
                <div className="absolute left-[5%] sm:left-[15%] lg:left-[5%] top-1/2 transform -translate-y-1/2 -translate-x-1/4 scale-[0.4] sm:scale-[0.5] lg:scale-[0.6] z-10 hover:z-40 transition-all duration-500 hover:scale-[0.45] sm:hover:scale-[0.55] lg:hover:scale-[0.65] rotate-[-15deg] hover:rotate-0 opacity-80 hover:opacity-100 origin-center">
                    <PhoneMockup src={analyticsScreen} className="shadow-2xl" />
                </div>

                {/* 2. Right Phone - Original/Dashboard (Behind) */}
                <div className="absolute right-[5%] sm:right-[15%] lg:right-[5%] top-1/2 transform -translate-y-1/2 translate-x-1/4 scale-[0.4] sm:scale-[0.5] lg:scale-[0.6] z-10 hover:z-40 transition-all duration-500 hover:scale-[0.45] sm:hover:scale-[0.55] lg:hover:scale-[0.65] rotate-[15deg] hover:rotate-0 opacity-80 hover:opacity-100 origin-center">
                    <PhoneMockup src={originalScreen} className="shadow-2xl" />
                </div>

                {/* 3. Center Phone - Choose Account Type (Front/Top) */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[0.5] sm:scale-[0.6] lg:scale-[0.7] z-30 transition-transform duration-500 hover:scale-[0.55] sm:hover:scale-[0.65] lg:hover:scale-[0.75] drop-shadow-2xl origin-center">
                    <PhoneMockup src={accountTypeScreen} className="shadow-[0_20px_60px_-15px_rgba(192,38,211,0.5)]" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

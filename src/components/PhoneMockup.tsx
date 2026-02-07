import React from 'react';
import appScreenDefault from 'figma:asset/684c9e8d5ba2a38c65f65fbb8caebc0dbff165e6.png';

interface PhoneMockupProps {
  className?: string;
  src?: string;
}

export function PhoneMockup({ className = "", src = appScreenDefault }: PhoneMockupProps) {
  return (
    <div className={`relative ${className} select-none`}>
      {/* 
        iPhone 16 Pro Max Realistic Mockup 
      */}
      
      {/* 1. Outer Frame (Titanium Edge) */}
      <div className="relative mx-auto rounded-[3.5rem] h-[750px] w-[360px] bg-gradient-to-tr from-[#4a4a4a] via-[#2a2a2a] to-[#4a4a4a] shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_20px_50px_-12px_rgba(0,0,0,0.5)] p-[3px]">
        
        {/* 2. Antenna Bands (Subtle details) */}
        <div className="absolute top-[80px] -left-[1px] h-[6px] w-[2px] bg-[#666]"></div>
        <div className="absolute top-[80px] -right-[1px] h-[6px] w-[2px] bg-[#666]"></div>
        <div className="absolute bottom-[80px] -left-[1px] h-[6px] w-[2px] bg-[#666]"></div>
        <div className="absolute bottom-[80px] -right-[1px] h-[6px] w-[2px] bg-[#666]"></div>

        {/* 3. Side Buttons (Left) */}
        <div className="absolute top-[100px] -left-[5px] h-[32px] w-[4px] bg-[#3a3a3a] rounded-l-md shadow-sm"></div> {/* Mute/Action */}
        <div className="absolute top-[160px] -left-[5px] h-[60px] w-[4px] bg-[#3a3a3a] rounded-l-md shadow-sm"></div> {/* Volume Up */}
        <div className="absolute top-[240px] -left-[5px] h-[60px] w-[4px] bg-[#3a3a3a] rounded-l-md shadow-sm"></div> {/* Volume Down */}

        {/* 4. Side Button (Right) */}
        <div className="absolute top-[180px] -right-[5px] h-[90px] w-[4px] bg-[#3a3a3a] rounded-r-md shadow-sm"></div> {/* Power */}

        {/* 5. Inner Black Bezel */}
        <div className="relative h-full w-full bg-black rounded-[3.3rem] border-[6px] border-black overflow-hidden ring-1 ring-white/5">
          
          {/* Dynamic Island */}
          <div className="absolute top-[12px] left-1/2 transform -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-30 flex items-center justify-center pointer-events-none">
            {/* Camera Lens */}
            <div className="absolute right-[12px] w-[8px] h-[8px] rounded-full bg-[#1a1a1a] ring-1 ring-[#333]">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-blue-900/30 rounded-full"></div>
            </div>
          </div>

          {/* Screen Content */}
          <div className="relative h-full w-full bg-black rounded-[2.9rem] overflow-hidden">
             {/* The App Screenshot */}
            <img 
              src={src} 
              alt="App Screen" 
              className="w-full h-full object-cover object-top"
            />
            
            {/* Glass Reflections / Glare */}
            {/* Top-Right Glare */}
            <div className="absolute -top-[100px] -right-[100px] w-[300px] h-[300px] bg-gradient-to-b from-white/10 to-transparent transform rotate-45 blur-2xl pointer-events-none"></div>
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

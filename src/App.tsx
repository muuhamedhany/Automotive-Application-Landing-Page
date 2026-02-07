import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GatewaySection } from './components/GatewaySection';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { FadeInSection } from './components/FadeInSection';

function AppContent() {
  return (
    // Hardcoded dark mode classes on the wrapper
    <div className="dark min-h-screen bg-[#0B0514] font-sans text-slate-100 selection:bg-fuchsia-500/30">
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Header />
      <main>
        <FadeInSection>
          <Hero />
        </FadeInSection>
        
        <FadeInSection>
          <GatewaySection />
        </FadeInSection>
        
        <div id="features">
           <FadeInSection>
             <Features />
           </FadeInSection>
        </div>
      </main>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
}

export default function App() {
  return (
    <AppContent />
  );
}

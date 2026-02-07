import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "figma:asset/87278e0361815ce26a9cea98bff38b3f149fbf4e.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0514]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#"
              className="flex items-center gap-2 group"
            >
              <img
                src={logo}
                alt="CarKit Logo"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a
              href="#gateways"
              className="text-slate-300 hover:text-white font-medium transition-colors"
            >
              Gateways
            </a>
            <a
              href="#features"
              className="text-slate-300 hover:text-white font-medium transition-colors"
            >
              Features
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#download"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full font-medium transition-all backdrop-blur-sm border border-white/5"
            >
              Get the App
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
              className="text-slate-300 hover:text-white p-2 rounded-md"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0B0514]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#"
              className="block px-3 py-3 text-base font-medium text-white hover:bg-white/5 rounded-lg"
            >
              Home
            </a>
            <a
              href="#gateways"
              className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              Gateways
            </a>
            <a
              href="#features"
              className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              Features
            </a>
            <a
              href="#about"
              className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              About
            </a>
            <div className="pt-4 mt-4 border-t border-white/10">
              <a
                href="#download"
                className="block w-full text-center bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-4 py-3 rounded-lg font-bold transition-colors"
              >
                Get the App
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

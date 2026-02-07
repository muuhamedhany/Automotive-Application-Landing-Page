import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import logo from "figma:asset/87278e0361815ce26a9cea98bff38b3f149fbf4e.png";

export function Footer() {
  return (
    <footer className="bg-[#0B0514] border-t border-white/5">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <a
              href="#"
              className="flex items-center gap-2 mb-4"
            >
              <img
                src={logo}
                alt="CarKit"
                className="h-8 w-auto object-contain"
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              The premier marketplace for automotive parts and
              services. Connecting drivers with the best vendors
              globally.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-100 tracking-wider uppercase mb-4">
              Platform
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#gateways"
                  className="text-base text-slate-400 hover:text-white transition-colors"
                >
                  For Customers
                </a>
              </li>
              <li>
                <a
                  href="#gateways"
                  className="text-base text-slate-400 hover:text-white transition-colors"
                >
                  For Vendors
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-base text-slate-400 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} CarKit. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
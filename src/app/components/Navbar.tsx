"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 py-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Logo className="h-12 w-auto" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("why-digits")}
            className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Why Digits?
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Who It&apos;s For
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Benefits
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("roadmap")}
            className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Roadmap
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-xl">{isMenuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-100 bg-white/95 backdrop-blur-sm">
          <div className="flex flex-col space-y-4 pt-4">
            <button
              onClick={() => scrollToSection("why-digits")}
              className="text-gray-600 hover:text-gray-900 transition-colors text-left cursor-pointer"
            >
              Why Digits?
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-gray-900 transition-colors text-left cursor-pointer"
            >
              Who It&apos;s For
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-600 hover:text-gray-900 transition-colors text-left cursor-pointer"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-gray-900 transition-colors text-left cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="text-gray-600 hover:text-gray-900 transition-colors text-left cursor-pointer"
            >
              Roadmap
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-gray-900 transition-colors text-left cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-finance-black-300/80 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-gradient">
            FinTechBank
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-sm font-medium text-gray-300 hover:text-finance-green transition-colors"
          >
            Features
          </a>
          <a
            href="#business"
            className="text-sm font-medium text-gray-300 hover:text-finance-green transition-colors"
          >
            Business
          </a>
          <a
            href="#personal"
            className="text-sm font-medium text-gray-300 hover:text-finance-green transition-colors"
          >
            Personal
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-gray-300 hover:text-finance-green transition-colors"
          >
            About
          </a>
          <Button
            variant="outline"
            className="border-finance-green text-finance-green hover:bg-finance-green hover:text-finance-black-100 bg-finance-black-300"
          >
            Log In
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-200"
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-finance-black shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-finance-green"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#business"
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-finance-green"
              onClick={() => setMobileMenuOpen(false)}
            >
              Business
            </a>
            <a
              href="#personal"
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-finance-green"
              onClick={() => setMobileMenuOpen(false)}
            >
              Personal
            </a>
            <a
              href="#about"
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-finance-green"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <Button
              variant="outline"
              className="border-finance-green text-finance-green hover:bg-finance-green hover:text-finance-black-100 bg-finance-black-300"
            >
              Log In
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

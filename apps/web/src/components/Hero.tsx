"use client";

import React from "react";
import { Button } from "~/components/ui/button";
import { ArrowRight, UserRound, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80dvh]  flex items-center pt-16 overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-finance-green/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-finance-green/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-finance-green/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
              Banking That <span className="text-gradient">Grows</span> With
              Your Ambitions
            </h1>
            <p className="text-xl text-gray-300 md:pr-12 opacity-0 animate-fade-in-delayed">
              Secure, flexible, and powerful financial services for individuals
              and businesses. Join thousands making smarter financial decisions
              with FinTechBank.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-finance-green/10 opacity-0 animate-fade-in-delayed">
              <div className="h-14 w-14 bg-finance-green/20 rounded-lg flex items-center justify-center mb-6">
                <UserRound className="h-8 w-8 text-finance-green" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personal Banking</h3>
              <p className="text-gray-400 mb-6">
                Tailored solutions for your personal financial growth and
                security.
              </p>
              <Button
                className="w-full bg-finance-green text-finance-black-100 hover:bg-finance-green-100 btn-glow group"
                onClick={() => (window.location.href = "/onboarding/personal")}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="glass-card rounded-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-finance-green/10 opacity-0 animate-fade-in-delayed-more">
              <div className="h-14 w-14 bg-finance-green/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-finance-green" />
              </div>
              <h3 className="text-xl font-bold mb-3">Business Banking</h3>
              <p className="text-gray-400 mb-6">
                Powerful tools and services to help your business thrive and
                expand.
              </p>
              <Button
                className="w-full bg-finance-black-300 text-finance-green border border-finance-green hover:bg-finance-green hover:text-finance-black-100 btn-glow group"
                onClick={() => (window.location.href = "/onboarding/business")}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center opacity-0 animate-fade-in-delayed-more">
          <p className="text-sm text-gray-500 mb-4">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-gray-400 font-bold text-lg">ACME Corp</div>
            <div className="text-gray-400 font-bold text-lg">TechGiant</div>
            <div className="text-gray-400 font-bold text-lg">Globex</div>
            <div className="text-gray-400 font-bold text-lg">Initech</div>
            <div className="text-gray-400 font-bold text-lg">
              Massive Dynamic
            </div>
          </div>
        </div>
      </div>

      <div className="md:block hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#features" className="text-gray-400 hover:text-finance-green">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;

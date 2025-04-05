"use client";

import React from "react";
import {
  Shield,
  CreditCard,
  PiggyBank,
  BarChart3,
  ArrowDownUp,
  Wallet,
} from "lucide-react";

const features = [
  {
    title: "Secure Transactions",
    description:
      "Bank-level encryption and security protocols to keep your finances safe",
    icon: Shield,
  },
  {
    title: "Smart Cards",
    description:
      "Virtual and physical cards with real-time controls and instant notifications",
    icon: CreditCard,
  },
  {
    title: "Savings Goals",
    description:
      "Set targets and watch your savings grow with competitive interest rates",
    icon: PiggyBank,
  },
  {
    title: "Investment Options",
    description:
      "Diverse portfolio opportunities tailored to your risk tolerance",
    icon: BarChart3,
  },
  {
    title: "Instant Transfers",
    description:
      "Move money quickly between accounts or to other banks without fees",
    icon: ArrowDownUp,
  },
  {
    title: "Financial Insights",
    description:
      "AI-powered analysis to help optimize your spending and saving habits",
    icon: Wallet,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-80 h-80 bg-finance-green/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-finance-green/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Powerful Features</span> For Your
            Financial Journey
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Experience the next generation of banking with tools designed to
            simplify your finances and empower your financial decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 h-full transform transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-12 w-12 bg-finance-green/20 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-finance-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

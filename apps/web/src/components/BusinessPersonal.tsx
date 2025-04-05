"use client";

import React from "react";
import { Button } from "~/components/ui/button";
import {
  ArrowRight,
  Users,
  UserRound,
  BarChart3,
  Globe,
  Shield,
  CreditCard,
} from "lucide-react";

const BusinessPersonal = () => {
  return (
    <>
      {/* Business Section */}
      <section id="business" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-finance-green/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="glass-card rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-finance-green/10 rounded-full transform translate-x-8 -translate-y-8 blur-3xl"></div>
                <div className="relative z-10">
                  <div className="bg-finance-black-300 p-4 rounded-lg mb-4 flex items-center">
                    <Users className="h-6 w-6 text-finance-green mr-3" />
                    <span className="text-sm">Business Banking</span>
                  </div>
                  <div className="bg-finance-black-300 p-4 rounded-lg mb-4 flex items-center">
                    <BarChart3 className="h-6 w-6 text-finance-green mr-3" />
                    <span className="text-sm">Financial Analytics</span>
                  </div>
                  <div className="bg-finance-black-300 p-4 rounded-lg mb-4 flex items-center">
                    <Globe className="h-6 w-6 text-finance-green mr-3" />
                    <span className="text-sm">Global Payments</span>
                  </div>
                  <div className="bg-finance-green p-4 rounded-lg text-finance-black">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Business Growth</span>
                      <span className="font-medium">+24%</span>
                    </div>
                    <div className="mt-2 h-2 bg-finance-black/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-finance-black/60 rounded-full"
                        style={{ width: "76%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Business Solutions That{" "}
                <span className="text-gradient">Scale</span>
              </h2>
              <p className="text-gray-300 mb-6">
                From startups to enterprises, our business banking solutions
                provide the tools and insights you need to manage finances,
                streamline operations, and drive growth.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-finance-green mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Dedicated business account managers
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-finance-green mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Advanced financial reporting and forecasting
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-finance-green mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Multi-currency accounts with competitive exchange rates
                  </span>
                </li>
              </ul>
              <Button
                className="bg-finance-green text-finance-black-100 hover:bg-finance-green-100 btn-glow group"
                onClick={() => (window.location.href = "/onboarding/business")}
              >
                Start Business Onboarding
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section
        id="personal"
        className="py-24 bg-finance-black-200 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-finance-green/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Personal Banking That{" "}
                <span className="text-gradient">Empowers</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Take control of your personal finances with tools that make
                managing money simple, secure, and rewarding. Experience banking
                designed around your life.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-finance-green mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">
                    No minimum balance requirements
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-finance-green mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">
                    24/7 access to your accounts via our mobile app
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-finance-green mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Personalized financial insights and recommendations
                  </span>
                </li>
              </ul>
              <Button
                className="bg-finance-green text-finance-black-100 hover:bg-finance-green-100 btn-glow group"
                onClick={() => (window.location.href = "/onboarding/personal")}
              >
                Start Personal Onboarding
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div>
              <div className="glass-card rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-finance-green/10 rounded-full transform -translate-x-8 -translate-y-8 blur-3xl"></div>
                <div className="relative z-10">
                  <div className="bg-finance-black-300 p-4 rounded-lg mb-4 flex items-center">
                    <UserRound className="h-6 w-6 text-finance-green mr-3" />
                    <span className="text-sm">Personal Banking</span>
                  </div>
                  <div className="bg-finance-black-300 p-4 rounded-lg mb-4 flex items-center">
                    <Shield className="h-6 w-6 text-finance-green mr-3" />
                    <span className="text-sm">Account Protection</span>
                  </div>
                  <div className="bg-finance-black-300 p-4 rounded-lg mb-4 flex items-center">
                    <CreditCard className="h-6 w-6 text-finance-green mr-3" />
                    <span className="text-sm">Smart Cards</span>
                  </div>
                  <div className="bg-finance-green p-4 rounded-lg text-finance-black">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Savings Growth</span>
                      <span className="font-medium">+12%</span>
                    </div>
                    <div className="mt-2 h-2 bg-finance-black/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-finance-black/60 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessPersonal;

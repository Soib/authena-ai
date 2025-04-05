"use client";

import React from "react";
import { Button } from "~/components/ui/button";
import { ArrowRight, UserRound, Users } from "lucide-react";

const CTA = () => {
  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-b from-finance-black to-finance-black-200 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-finance-green/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-finance-green/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready To <span className="text-gradient">Transform</span> Your
            Financial Future?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of individuals and businesses who trust FinTechBank
            for their financial needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-finance-green text-finance-black-100 hover:bg-finance-green-100 btn-glow group py-6 px-8 text-lg"
              onClick={() => (window.location.href = "/onboarding/personal")}
            >
              <UserRound className="h-5 w-5 mr-2" />
              Personal Banking
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              className="bg-finance-black-300 text-finance-green border border-finance-green hover:bg-finance-green hover:text-finance-black-100 btn-glow group py-6 px-8 text-lg"
              onClick={() => (window.location.href = "/onboarding/business")}
            >
              <Users className="h-5 w-5 mr-2" />
              Business Banking
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <p className="mt-8 text-gray-500 text-sm">
            No hidden fees. Cancel anytime. 30-day money back guarantee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;

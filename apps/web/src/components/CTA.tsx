"use client";

import { ArrowRight, UserRound, Users } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";

const CTA = () => {
	return (
		<section
			id="cta"
			className="relative overflow-hidden bg-gradient-to-b from-finance-black to-finance-black-200 py-20"
		>
			{/* Background elements */}
			<div className="absolute inset-0 z-0">
				<div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-finance-green/10 blur-3xl filter"></div>
				<div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-finance-green/5 blur-3xl filter"></div>
			</div>

			<div className="container relative z-10 mx-auto px-4">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="mb-6 font-bold text-3xl md:text-5xl">
						Ready To <span className="text-gradient">Transform</span> Your
						Financial Future?
					</h2>
					<p className="mb-10 text-gray-300 text-xl">
						Join thousands of individuals and businesses who trust FinTechBank
						for their financial needs.
					</p>

					<div className="flex flex-col justify-center gap-4 sm:flex-row">
						<Button
							className="btn-glow group bg-finance-green px-8 py-6 text-finance-black-100 text-lg hover:bg-finance-green-100"
							onClick={() => (window.location.href = "/onboarding/personal")}
						>
							<UserRound className="mr-2 h-5 w-5" />
							Personal Banking
							<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
						</Button>

						<Button
							className="btn-glow group border border-finance-green bg-finance-black-300 px-8 py-6 text-finance-green text-lg hover:bg-finance-green hover:text-finance-black-100"
							onClick={() => (window.location.href = "/onboarding/business")}
						>
							<Users className="mr-2 h-5 w-5" />
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

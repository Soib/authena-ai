"use client";

import {
	ArrowDownUp,
	BarChart3,
	CreditCard,
	PiggyBank,
	Shield,
	Wallet,
} from "lucide-react";
import React from "react";

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
		<section id="features" className="relative overflow-hidden py-24">
			{/* Background elements */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-40 right-20 h-80 w-80 rounded-full bg-finance-green/5 blur-3xl filter"></div>
				<div className="absolute bottom-20 left-10 h-64 w-64 rounded-full bg-finance-green/5 blur-3xl filter"></div>
			</div>

			<div className="container relative z-10 mx-auto px-4">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold text-3xl md:text-4xl">
						<span className="text-gradient">Powerful Features</span> For Your
						Financial Journey
					</h2>
					<p className="mx-auto max-w-3xl text-gray-400">
						Experience the next generation of banking with tools designed to
						simplify your finances and empower your financial decisions.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{features.map((feature, index) => (
						<div
							key={index}
							className="glass-card hover:-translate-y-1 h-full transform rounded-xl p-6 transition-all duration-300"
							data-aos="fade-up"
							data-aos-delay={index * 100}
						>
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-finance-green/20">
								<feature.icon className="h-6 w-6 text-finance-green" />
							</div>
							<h3 className="mb-2 font-semibold text-lg">{feature.title}</h3>
							<p className="text-gray-400">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;

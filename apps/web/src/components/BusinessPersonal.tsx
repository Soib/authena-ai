"use client";

import {
	ArrowRight,
	BarChart3,
	CreditCard,
	Globe,
	Shield,
	UserRound,
	Users,
} from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";

const BusinessPersonal = () => {
	return (
		<>
			{/* Business Section */}
			<section id="business" className="relative overflow-hidden py-24">
				<div className="absolute inset-0 z-0">
					<div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-finance-green/5 blur-3xl filter"></div>
				</div>

				<div className="container relative z-10 mx-auto px-4">
					<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
						<div className="order-2 lg:order-1">
							<div className="glass-card relative overflow-hidden rounded-xl p-6">
								<div className="-translate-y-8 absolute top-0 right-0 h-32 w-32 translate-x-8 transform rounded-full bg-finance-green/10 blur-3xl"></div>
								<div className="relative z-10">
									<div className="mb-4 flex items-center rounded-lg bg-finance-black-300 p-4">
										<Users className="mr-3 h-6 w-6 text-finance-green" />
										<span className="text-sm">Business Banking</span>
									</div>
									<div className="mb-4 flex items-center rounded-lg bg-finance-black-300 p-4">
										<BarChart3 className="mr-3 h-6 w-6 text-finance-green" />
										<span className="text-sm">Financial Analytics</span>
									</div>
									<div className="mb-4 flex items-center rounded-lg bg-finance-black-300 p-4">
										<Globe className="mr-3 h-6 w-6 text-finance-green" />
										<span className="text-sm">Global Payments</span>
									</div>
									<div className="rounded-lg bg-finance-green p-4 text-finance-black">
										<div className="flex items-center justify-between">
											<span className="font-medium">Business Growth</span>
											<span className="font-medium">+24%</span>
										</div>
										<div className="mt-2 h-2 overflow-hidden rounded-full bg-finance-black/20">
											<div
												className="h-full rounded-full bg-finance-black/60"
												style={{ width: "76%" }}
											></div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="order-1 lg:order-2">
							<h2 className="mb-6 font-bold text-3xl md:text-4xl">
								Business Solutions That{" "}
								<span className="text-gradient">Scale</span>
							</h2>
							<p className="mb-6 text-gray-300">
								From startups to enterprises, our business banking solutions
								provide the tools and insights you need to manage finances,
								streamline operations, and drive growth.
							</p>
							<ul className="mb-8 space-y-3">
								<li className="flex items-start">
									<svg
										className="mr-2 h-6 w-6 text-finance-green"
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
										className="mr-2 h-6 w-6 text-finance-green"
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
										className="mr-2 h-6 w-6 text-finance-green"
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
								className="btn-glow group bg-finance-green text-finance-black-100 hover:bg-finance-green-100"
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
				className="relative overflow-hidden bg-finance-black-200 py-24"
			>
				<div className="absolute inset-0 z-0">
					<div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-finance-green/5 blur-3xl filter"></div>
				</div>

				<div className="container relative z-10 mx-auto px-4">
					<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
						<div>
							<h2 className="mb-6 font-bold text-3xl md:text-4xl">
								Personal Banking That{" "}
								<span className="text-gradient">Empowers</span>
							</h2>
							<p className="mb-6 text-gray-300">
								Take control of your personal finances with tools that make
								managing money simple, secure, and rewarding. Experience banking
								designed around your life.
							</p>
							<ul className="mb-8 space-y-3">
								<li className="flex items-start">
									<svg
										className="mr-2 h-6 w-6 text-finance-green"
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
										className="mr-2 h-6 w-6 text-finance-green"
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
										className="mr-2 h-6 w-6 text-finance-green"
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
								className="btn-glow group bg-finance-green text-finance-black-100 hover:bg-finance-green-100"
								onClick={() => (window.location.href = "/onboarding/personal")}
							>
								Start Personal Onboarding
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
						</div>

						<div>
							<div className="glass-card relative overflow-hidden rounded-xl p-6">
								<div className="-translate-x-8 -translate-y-8 absolute top-0 left-0 h-32 w-32 transform rounded-full bg-finance-green/10 blur-3xl"></div>
								<div className="relative z-10">
									<div className="mb-4 flex items-center rounded-lg bg-finance-black-300 p-4">
										<UserRound className="mr-3 h-6 w-6 text-finance-green" />
										<span className="text-sm">Personal Banking</span>
									</div>
									<div className="mb-4 flex items-center rounded-lg bg-finance-black-300 p-4">
										<Shield className="mr-3 h-6 w-6 text-finance-green" />
										<span className="text-sm">Account Protection</span>
									</div>
									<div className="mb-4 flex items-center rounded-lg bg-finance-black-300 p-4">
										<CreditCard className="mr-3 h-6 w-6 text-finance-green" />
										<span className="text-sm">Smart Cards</span>
									</div>
									<div className="rounded-lg bg-finance-green p-4 text-finance-black">
										<div className="flex items-center justify-between">
											<span className="font-medium">Savings Growth</span>
											<span className="font-medium">+12%</span>
										</div>
										<div className="mt-2 h-2 overflow-hidden rounded-full bg-finance-black/20">
											<div
												className="h-full rounded-full bg-finance-black/60"
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

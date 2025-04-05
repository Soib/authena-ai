"use client";

import { ArrowRight, UserRound, Users } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";

const Hero = () => {
	return (
		<section className="relative flex min-h-[80dvh] items-center overflow-hidden pt-16">
			{/* Abstract background elements */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-finance-green/5 blur-3xl filter"></div>
				<div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-finance-green/10 blur-3xl filter"></div>
				<div className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-finance-green/5 blur-3xl filter"></div>
			</div>

			<div className="container z-10 mx-auto px-4 pt-12">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
					<div className="space-y-8">
						<h1 className="animate-fade-in font-bold text-4xl leading-tight md:text-6xl">
							Banking That <span className="text-gradient">Grows</span> With
							Your Ambitions
						</h1>
						<p className="animate-fade-in-delayed text-gray-300 text-xl opacity-0 md:pr-12">
							Secure, flexible, and powerful financial services for individuals
							and businesses. Join thousands making smarter financial decisions
							with FinTechBank.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<div className="glass-card hover:-translate-y-2 transform animate-fade-in-delayed rounded-xl p-8 opacity-0 transition-all duration-300 hover:shadow-finance-green/10 hover:shadow-xl">
							<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-finance-green/20">
								<UserRound className="h-8 w-8 text-finance-green" />
							</div>
							<h3 className="mb-3 font-bold text-xl">Personal Banking</h3>
							<p className="mb-6 text-gray-400">
								Tailored solutions for your personal financial growth and
								security.
							</p>
							<Button
								className="btn-glow group w-full bg-finance-green text-finance-black-100 hover:bg-finance-green-100"
								onClick={() => (window.location.href = "/onboarding/personal")}
							>
								Get Started
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
						</div>

						<div className="glass-card hover:-translate-y-2 transform animate-fade-in-delayed-more rounded-xl p-8 opacity-0 transition-all duration-300 hover:shadow-finance-green/10 hover:shadow-xl">
							<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-finance-green/20">
								<Users className="h-8 w-8 text-finance-green" />
							</div>
							<h3 className="mb-3 font-bold text-xl">Business Banking</h3>
							<p className="mb-6 text-gray-400">
								Powerful tools and services to help your business thrive and
								expand.
							</p>
							<Button
								className="btn-glow group w-full border border-finance-green bg-finance-black-300 text-finance-green hover:bg-finance-green hover:text-finance-black-100"
								onClick={() => (window.location.href = "/onboarding/business")}
							>
								Get Started
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
						</div>
					</div>
				</div>

				<div className="mt-24 animate-fade-in-delayed-more text-center opacity-0">
					<p className="mb-4 text-gray-500 text-sm">
						Trusted by leading companies worldwide
					</p>
					<div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
						<div className="font-bold text-gray-400 text-lg">ACME Corp</div>
						<div className="font-bold text-gray-400 text-lg">TechGiant</div>
						<div className="font-bold text-gray-400 text-lg">Globex</div>
						<div className="font-bold text-gray-400 text-lg">Initech</div>
						<div className="font-bold text-gray-400 text-lg">
							Massive Dynamic
						</div>
					</div>
				</div>
			</div>

			<div className="-translate-x-1/2 absolute bottom-8 left-1/2 hidden transform animate-bounce md:block">
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

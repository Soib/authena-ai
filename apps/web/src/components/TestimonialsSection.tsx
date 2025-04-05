import { Star } from "lucide-react";
import React from "react";

const testimonials = [
	{
		name: "Sarah Johnson",
		position: "Small Business Owner",
		text: "FinTechBank transformed how I manage my business finances. The real-time insights and dedicated account manager have been game-changers for my company's growth.",
		rating: 5,
	},
	{
		name: "Michael Chen",
		position: "Freelance Designer",
		text: "As someone who manages multiple income streams, FinTechBank's personal banking tools have made my financial life so much simpler and more organized.",
		rating: 5,
	},
	{
		name: "Emily Rodriguez",
		position: "Marketing Director",
		text: "The business analytics tools are impressive. I can track expenses, forecast cash flow, and make data-driven decisions that have improved our bottom line.",
		rating: 4,
	},
];

const Testimonials = () => {
	return (
		<section id="testimonials" className="relative overflow-hidden py-24">
			{/* Background elements */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-10 left-1/4 h-72 w-72 rounded-full bg-finance-green/5 blur-3xl filter"></div>
			</div>

			<div className="container relative z-10 mx-auto px-4">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold text-3xl md:text-4xl">
						What Our <span className="text-gradient">Clients</span> Say
					</h2>
					<p className="mx-auto max-w-3xl text-gray-400">
						Don't take our word for it. Hear from individuals and businesses who
						have transformed their financial journey with FinTechBank.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="glass-card hover:-translate-y-1 h-full transform rounded-xl p-6 transition-all duration-300 hover:shadow-finance-green/10 hover:shadow-lg"
						>
							<div className="mb-4 flex">
								{Array(5)
									.fill(0)
									.map((_, i) => (
										<Star
											key={i}
											className={`h-5 w-5 ${i < testimonial.rating ? "text-finance-green" : "text-gray-600"}`}
											fill={i < testimonial.rating ? "currentColor" : "none"}
										/>
									))}
							</div>
							<p className="mb-6 text-gray-300 italic">"{testimonial.text}"</p>
							<div className="flex items-center">
								<div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-finance-green/20">
									<span className="font-semibold text-finance-green">
										{testimonial.name.charAt(0)}
									</span>
								</div>
								<div>
									<p className="font-medium">{testimonial.name}</p>
									<p className="text-gray-500 text-sm">
										{testimonial.position}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;

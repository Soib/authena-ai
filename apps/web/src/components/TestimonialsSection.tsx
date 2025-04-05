import React from "react";
import { Star } from "lucide-react";

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
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-finance-green/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Don't take our word for it. Hear from individuals and businesses who
            have transformed their financial journey with FinTechBank.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-finance-green/10"
            >
              <div className="flex mb-4">
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
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="h-10 w-10 bg-finance-green/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-finance-green font-semibold">
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

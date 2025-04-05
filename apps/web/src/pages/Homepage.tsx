import BusinessPersonal from "~/components/BusinessPersonal";
import CTA from "~/components/CTA";
import Features from "~/components/Features";
import Footer from "~/components/FooterSection";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import Testimonials from "~/components/TestimonialsSection";

export default function Home() {
	return (
		<div className="min-h-screen bg-finance-black text-white">
			<Navbar />
			<main>
				<Hero />
				<Features />
				<BusinessPersonal />
				<Testimonials />
				<CTA />
			</main>
			<Footer />
		</div>
	);
}

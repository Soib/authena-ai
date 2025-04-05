import BusinessPersonal from "~/components/BusinessPersonal";
import Features from "~/components/Features";
import Hero from "~/components/Hero";
import CTA from "~/components/CTA";
import Navbar from "~/components/Navbar";
import Testimonials from "~/components/TestimonialsSection";
import Footer from "~/components/FooterSection";

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

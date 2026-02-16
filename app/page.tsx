import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials"; // Keeping this, user might want to add reviews later
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductShowcase />
      <Pricing />
      {/* <Testimonials />  -- Commenting out if there are no real testimonials yet, or leave as placeholder? Plan says: "Testimonials (Optional)". I'll keep it active as placeholder or comment it out if it looks too fake. Let's keep it but maybe it needs a quick update if I have time. For now, standard placeholders are fine. */}
      <Testimonials />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import BusinessSection from "@/components/BusinessSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import ContactCTA from "@/components/ContactCTA";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <BusinessSection />
      <PartnersMarquee />
      <ContactCTA />
      <ChatbotWidget />
    </>
  );
}

import Pointer from "@/components/Pointer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service"
import About from "@/components/About";
import FeaturedProjects from "@/components/FeatureProjects";
import ClientTestimonials from "@/components/ClientTestimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Pointer />
      <Navbar />
      <Hero />
      <Service />
      <About />
      <FeaturedProjects />
      <ClientTestimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}

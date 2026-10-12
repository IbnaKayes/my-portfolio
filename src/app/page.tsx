import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import ExpertiseAndTestimonials from "@/components/ExpertiseAndTestimonials";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-darkBg text-white selection:bg-primaryAccent selection:text-darkBg overflow-x-hidden">
      {/* Floating Navbar */}
      <Navbar />

      {/* Hero Section with Lanyard & 360-Degree Swing/Spin ID Card */}
      <Hero />

      {/* About Me Section with Scroll Glowing Timeline */}
      <About />

      {/* Technical Skills Marquee with Official Logos */}
      <Skills />

      {/* Services / What I Offer Section */}
      <Services />

      {/* Expertise & Skills (Technical Arsenal Proficiency Bars & Testimonials) */}
      <ExpertiseAndTestimonials />

      {/* Featured Projects with Scroll Progress Glowing Line */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
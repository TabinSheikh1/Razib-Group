"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navigation from "../components/navigation";
import TestimonialsSection from "@/components/Testimonials";
import Hero from "../components/Hero";
import Services from "./services";
import AboutUs from "../components/AboutUs";

import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import { Contact } from "lucide-react";
import ContactUs from "@/components/ContactUs";
import Gallery from "./gallery/page";
export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }
  }, []);

  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <AboutUs />
      <Services />
      <GetInTouch />
      <Gallery/>
      <ContactUs />
      <Footer />
    </div>
  );
}

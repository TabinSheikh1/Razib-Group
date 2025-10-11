"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navigation from "../components/navigation";
import TestimonialsSection from "@/components/Testimonials";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import Services from "./services";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
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
    <div>
    <Navigation/>
    <Hero/>
    <AboutUs />
    <Services/>
    <TestimonialsSection/>
    <GetInTouch />
      <Footer />
    </div>
  );
}

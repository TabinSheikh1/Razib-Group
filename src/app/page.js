import Image from "next/image";
import Navigation from '../components/navigation';
import Hero from "../components/Hero";
import Services from "../components/Services";
import TestimonialsSection from "@/components/Testimonials";
export default function Home() {
  return (
    <div>
    <Navigation/>
    <Hero/>
    <Services/>
    <TestimonialsSection/>
    </div>
  );
}

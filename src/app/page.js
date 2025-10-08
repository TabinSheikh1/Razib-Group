import Image from "next/image";
import Navigation from '../components/navigation';
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
export default function Home() {
  return (
    <div className="">
    <Navigation/>
    <Hero/>
    <AboutUs/>
    <Services/>
    <GetInTouch/>
    <Footer/>
    </div>
  );
}

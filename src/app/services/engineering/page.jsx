"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navigation";
import Footer from "@/components/Footer";
import {
  FaRoad,
  FaBuilding,
  FaTools,
  FaCheckCircle,
  FaLeaf,
  FaUsersCog,
  FaHandshake,
} from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EngineeringPage() {
  const router = useRouter();
  const sectionRefs = useRef([]);
  const heroRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const projectsRef = useRef(null);
  const cardRefs = useRef([]);
  const featureCardRefs = useRef([]);
  const projectCardRefs = useRef([]);

  const handleBackToServices = () => {
    router.push("/#services");
  };

  useEffect(() => {
    // Hero section animation
    const hero = heroRef.current;
    if (hero) {
      gsap.fromTo(
        hero.querySelector("img"),
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        hero.querySelector(".hero-content > *"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          delay: 0.5,
          ease: "power2.out",
        }
      );
    }

    // What We Do section animation
    const whatWeDo = whatWeDoRef.current;
    if (whatWeDo) {
      gsap.fromTo(
        whatWeDo.querySelector("h2"),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: whatWeDo,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        whatWeDo.querySelector("p"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: whatWeDo,
            start: "top 80%",
          },
        }
      );
    }

    // Why Choose Us section animations
    const whyChooseUs = whyChooseUsRef.current;
    if (whyChooseUs) {
      gsap.fromTo(
        whyChooseUs.querySelector("h2"),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: whyChooseUs,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        featureCardRefs.current,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whyChooseUs,
            start: "top 70%",
          },
        }
      );
    }

    // Projects section animations
    const projects = projectsRef.current;
    if (projects) {
      gsap.fromTo(
        projects.querySelector("h2"),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: projects,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        projectCardRefs.current,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projects,
            start: "top 70%",
          },
        }
      );
    }

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="font-montserrat text-gray-800 bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative mt-4 w-full h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden"
      >
        <img
          src="/images/civil-bg.jpg"
          alt="Engineering Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-content absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <MdEngineering className="text-[#ff9800] text-5xl sm:text-6xl md:text-7xl mb-4 animate-pulse" />
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-semibold mb-3 leading-tight">
            Civil Engineering & Infrastructure
          </h1>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-3xl">
            Precision. Performance. Progress — Building the foundation for sustainable development.
          </p>

          <button
            onClick={handleBackToServices}
            className="group relative mt-8 inline-flex items-center gap-2 px-6 py-2.5 border border-[#ff9800] text-[#ff9800] font-semibold rounded-full transition-all duration-300 hover:bg-[#0c0d62] hover:text-white hover:shadow-[0_0_20px_#0c0d62] focus:ring-[#0c0d62]/50"
          >
            <span className="relative transition-transform duration-300 group-hover:-translate-x-1">
              ← Back to Services
            </span>
          </button>
        </div>
      </section>

      {/* What We Do */}
      <section
        ref={whatWeDoRef}
        className="max-w-6xl mx-auto bg-white px-6 py-16 md:py-24"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-l-4 border-[#ff9800] pl-3 text-[#0c0d62] flex items-center gap-3">
          <FaTools className="text-[#ff9800]" />
          What We Do
        </h2>
        <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
          Razib Group delivers end-to-end engineering and infrastructure solutions, specializing in civil works, construction, rehabilitation, and maintenance. From roads and bridges to industrial facilities and commercial structures, we combine engineering precision with project management excellence to ensure timely, safe, and sustainable delivery. Our multidisciplinary team manages every phase — from design and feasibility to execution and lifecycle maintenance.
        </p>
      </section>

      {/* Why Choose Us */}
      <section
        ref={whyChooseUsRef}
        className="bg-gray-100 py-16 md:py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 border-l-4 border-[#ff9800] pl-3 text-[#0c0d62] flex items-center gap-3">
            <FaHandshake className="text-[#ff9800]" />
            Why Choose Us
          </h2>

          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                icon: <FaCheckCircle />,
                title: "Proven Track Record",
                desc: "Success in delivering complex, large-scale civil and industrial projects across multiple regions.",
              },
              {
                icon: <FaUsersCog />,
                title: "Experienced Professionals",
                desc: "A skilled team of engineers and managers with regional and international expertise.",
              },
              {
                icon: <FaBuilding />,
                title: "Quality & Efficiency",
                desc: "Integrated project delivery ensures safety, quality, and cost optimization at every stage.",
              },
              {
                icon: <FaLeaf />,
                title: "Sustainable Approach",
                desc: "Commitment to sustainable construction aligned with global standards and environmental responsibility.",
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => (featureCardRefs.current[index] = el)}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-[#ff9800] text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#0c0d62]">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Projects / Clients */}
      <section
        ref={projectsRef}
        className="max-w-6xl mx-auto px-6 py-16 md:py-24"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 border-l-4 border-[#ff9800] pl-3 text-[#0c0d62] flex items-center gap-3">
          <FaRoad className="text-[#ff9800]" />
          Example Projects / Clients
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              icon: <FaRoad />,
              title: "Road & Bridge Projects",
              desc: "Rehabilitation projects in Bangladesh and Angola, enhancing connectivity and durability.",
            },
            {
              icon: <FaBuilding />,
              title: "Industrial Upgrades",
              desc: "Structural retrofit and facility upgrades for industrial clients in KSA and UAE.",
            },
            {
              icon: <FaTools />,
              title: "Maintenance Contracts",
              desc: "Ongoing maintenance for government and private sector facilities, ensuring long-term reliability.",
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => (projectCardRefs.current[index] = el)}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-[#ff9800] text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[#0c0d62]">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
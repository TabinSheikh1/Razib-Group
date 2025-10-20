"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navigation";
import Footer from "@/components/Footer";
import {
    FaCloud,
    FaCogs,
    FaServer,
    FaLaptopCode,
    FaHandshake,
    FaCheckCircle,
    FaUsersCog,
    FaBuilding,
} from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TechnologyConsultingPage() {
    const router = useRouter();
    const heroRef = useRef(null);
    const whatWeDoRef = useRef(null);
    const whyChooseUsRef = useRef(null);
    const projectsRef = useRef(null);
    const featureCardRefs = useRef([]);
    const projectCardRefs = useRef([]);

    const handleBackToServices = () => {
        router.push("/#services");
    };

    useEffect(() => {
        const hero = heroRef.current;
        if (hero) {
            gsap.fromTo(
                hero.querySelector("img"),
                { scale: 1.2, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
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

        const animateSection = (ref, elements) => {
            const section = ref.current;
            if (section) {
                gsap.fromTo(
                    section.querySelector("h2"),
                    { opacity: 0, x: -50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        scrollTrigger: { trigger: section, start: "top 80%" },
                    }
                );
                gsap.fromTo(
                    elements.current,
                    { opacity: 0, y: 70 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: { trigger: section, start: "top 70%" },
                    }
                );
            }
        };

        animateSection(whyChooseUsRef, featureCardRefs);
        animateSection(projectsRef, projectCardRefs);

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="font-montserrat text-gray-800">
            <Navbar />

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative mt-4 w-full h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden"
            >
                <img
                    src="/images/technology-consulting-bg.jpg"
                    alt="Technology Consulting Background"
                    className="absolute inset-0 w-full h-full object-cover  "
                />
                <div className="hero-content absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                    <MdOutlineComputer className="text-[#ff9800] text-5xl sm:text-6xl md:text-7xl mb-4 animate-pulse" />
                    <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-semibold mb-3 leading-tight">
                        Technology & IT Consulting
                    </h1>
                    <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-3xl">
                        Driving digital transformation and operational efficiency through strategic IT and enterprise solutions.
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
            <section ref={whatWeDoRef} className="max-w-6xl bg-white mx-auto px-6 py-16 md:py-24">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-l-4 border-[#ff9800] pl-3 text-[#0c0d62] flex items-center gap-3">
                    <FaLaptopCode className="text-[#ff9800]" />
                    What We Do
                </h2>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    We deliver strategic technology consulting and enterprise IT solutions that drive digital transformation and operational efficiency.
                    From ERP implementation (SAP, Oracle, and Microsoft Dynamics) to custom IT and digital solutions, we empower organizations
                    to modernize their systems, optimize workflows, and achieve measurable business outcomes.
                </p>
            </section>

            {/* Why Choose Us */}
            <section ref={whyChooseUsRef} className="bg-gray-100 py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-10 border-l-4 border-[#ff9800] pl-3 text-[#0c0d62] flex items-center gap-3">
                        <FaHandshake className="text-[#ff9800]" />
                        Why Choose Us
                    </h2>

                    <div className="grid gap-8 sm:grid-cols-2">
                        {[
                            {
                                icon: <FaUsersCog />,
                                title: "Certified ERP and IT Professionals",
                                desc: "Our team consists of globally certified experts with proven implementation experience.",
                            },
                            {
                                icon: <FaCogs />,
                                title: "Expertise Across Industries",
                                desc: "We serve clients in public, telecom, and industrial sectors with tailored technology strategies.",
                            },
                            {
                                icon: <FaCheckCircle />,
                                title: "Proven Methodology",
                                desc: "Structured approach ensuring smooth digital transformation and minimal disruption.",
                            },
                            {
                                icon: <FaBuilding />,
                                title: "Focus on Integration & Scalability",
                                desc: "We prioritize seamless system integration, scalability, and long-term client success.",
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
            <section ref={projectsRef} className="max-w-6xl mx-auto px-6 py-16 md:py-24">
                <h2 className="text-2xl sm:text-3xl font-bold mb-10 border-l-4 border-[#ff9800] pl-3 text-[#0c0d62] flex items-center gap-3">
                    <FaServer className="text-[#ff9800]" />
                    Example Projects / Clients
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {[
                        {
                            icon: <FaLaptopCode />,
                            title: "ERP Implementation Projects",
                            desc: "Implemented ERP solutions for construction and service companies across the UAE and India.",
                        },
                        {
                            icon: <FaServer />,
                            title: "IT Infrastructure Deployment",
                            desc: "Delivered infrastructure and software deployment for telecom and manufacturing firms.",
                        },
                        {
                            icon: <FaCloud />,
                            title: "Cloud & Digital Modernization",
                            desc: "Executed modernization projects for government agencies, enabling scalable digital ecosystems.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => (projectCardRefs.current[index] = el)}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="text-[#ff9800] text-4xl mb-3">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-2 text-[#0c0d62]">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}

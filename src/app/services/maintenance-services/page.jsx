"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navigation";
import Footer from "@/components/Footer";
import {
    FaTools,
    FaCheckCircle,
    FaCogs,
    FaClock,
    FaUserShield,
    FaChartLine,
    FaBuilding,
} from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MaintenancePage() {
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
        // ✅ Hero Section Animations
        if (heroRef.current) {
            gsap.fromTo(
                heroRef.current.querySelector("img"),
                { scale: 1.2, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.out",
                }
            );

            gsap.fromTo(
                heroRef.current.querySelectorAll(".hero-content > *"),
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    delay: 0.5,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power2.out",
                }
            );
        }

        // ✅ What We Do
        if (whatWeDoRef.current) {
            gsap.fromTo(
                whatWeDoRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    scrollTrigger: {
                        trigger: whatWeDoRef.current,
                        start: "top 85%",
                    },
                }
            );
        }

        // ✅ Why Choose Us Cards
        if (whyChooseUsRef.current) {
            gsap.fromTo(
                featureCardRefs.current,
                { opacity: 0, y: 80, rotateX: 15 },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: whyChooseUsRef.current,
                        start: "top 75%",
                    },
                }
            );
        }

        // ✅ Projects Section
        if (projectsRef.current) {
            gsap.fromTo(
                projectCardRefs.current,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: projectsRef.current,
                        start: "top 75%",
                    },
                }
            );
        }
    }, []);

    return (
        <div className="font-montserrat text-gray-800">
            <Navbar />

            {/* ✅ Hero Section */}
            <section
                ref={heroRef}
                className="relative mt-4 w-full h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden"
            >
                <img
                    src="/images/maintenance-bg.jpg"
                    alt="Maintenance Services Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="hero-content absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                    <MdHomeRepairService className="text-[#ff9800] text-5xl sm:text-6xl md:text-7xl mb-4 animate-pulse" />
                    <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-semibold mb-3">
                        Maintenance Services
                    </h1>
                    <p className="text-gray-200 max-w-3xl sm:text-lg md:text-xl">
                        Reliability. Efficiency. Uptime — Sustaining infrastructure, industries & operations.
                    </p>

                    <button
                        onClick={handleBackToServices}
                        className="group relative mt-8 inline-flex items-center gap-2 px-6 py-2.5 border border-[#ff9800] text-[#ff9800] font-semibold rounded-full hover:bg-[#0c0d62] hover:text-white transition-all duration-300"
                    >
                        ← Back to Services
                    </button>
                </div>
            </section>

            {/* ✅ What We Do */}
            <section ref={whatWeDoRef} className="max-w-6xl mx-auto px-6 py-16 md:py-24">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-l-4 border-[#ff9800] pl-3 text-[#0c0d62] flex items-center gap-3">
                    <FaTools className="text-[#ff9800]" />
                    What We Do
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Razib Group provides comprehensive maintenance and facility management solutions
                    that ensure the long-term performance, safety, and reliability of infrastructure,
                    buildings, and industrial assets. Our services include preventive, corrective, and
                    predictive maintenance across civil, electrical, mechanical, and telecom systems.
                    With skilled teams and smart maintenance planning, we minimize downtime, extend
                    asset life, and improve operational efficiency.
                </p>
            </section>

            {/* ✅ Why Choose Us */}
            <section ref={whyChooseUsRef} className="bg-gray-100 py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-10 border-l-4 border-[#ff9800] pl-3 text-[#0c0d62] flex items-center gap-3">
                        <FaCogs className="text-[#ff9800]" />
                        Why Choose Us
                    </h2>

                    <div className="grid gap-8 sm:grid-cols-2">
                        {[
                            {
                                icon: <FaCogs />,
                                title: "Complete Maintenance Coverage",
                                desc: "Civil, electrical, mechanical & telecom maintenance under one roof.",
                            },
                            {
                                icon: <FaClock />,
                                title: "24/7 Operational Support",
                                desc: "Rapid-response teams to ensure uninterrupted service & minimal downtime.",
                            },
                            {
                                icon: <FaUserShield />,
                                title: "Skilled & Certified Teams",
                                desc: "Technicians trained to international HSE & quality standards.",
                            },
                            {
                                icon: <FaChartLine />,
                                title: "Data-Driven Efficiency",
                                desc: "Predictive maintenance that lowers lifecycle costs and boosts performance.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => (featureCardRefs.current[index] = el)}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 duration-300"
                            >
                                <div className="text-[#ff9800] text-4xl mb-3">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-[#0c0d62] mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ✅ Projects */}
            <section ref={projectsRef} className="bg-white max-w-6xl mx-auto px-6 py-16 md:py-24">
                <h2 className="text-2xl sm:text-3xl font-bold mb-10 border-l-4 border-[#ff9800] pl-3 text-[#0c0d62] flex items-center gap-3">
                    <FaBuilding className="text-[#ff9800]" />
                    Projects
                </h2>

                 <div className="w-[90%] bg-white md:w-[80%] lg:w-[70%] mx-auto">
                    <ul className="space-y-4">
                        {[
                            "Africell (Digis)",

                        ].map((item, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-gray-800 text-base md:text-lg font-medium"
                            >
                                <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-[#ff9800] to-[#0c0d62] shadow"></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                
            </section>

            <Footer />
        </div>
    );
}

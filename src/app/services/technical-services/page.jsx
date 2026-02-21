"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navigation";
import Footer from "@/components/Footer";
import {
    FaBalanceScale,
    FaGavel,
    FaGlobe,
    FaHandshake,
    FaUsersCog,
    FaBuilding,
    FaFileSignature,
    FaTools,
    FaClock,
    FaShieldAlt,

} from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TaxLegalAdvisoryPage() {
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

        const sections = [
            { ref: whatWeDoRef },
            { ref: whyChooseUsRef },
            { ref: projectsRef },
        ];

        sections.forEach(({ ref }) => {
            if (ref.current) {
                gsap.fromTo(
                    ref.current.querySelector("h2"),
                    { opacity: 0, x: -50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: ref.current,
                            start: "top 80%",
                        },
                    }
                );
            }
        });

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
                    trigger: whyChooseUsRef.current,
                    start: "top 70%",
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
                    trigger: projectsRef.current,
                    start: "top 70%",
                },
            }
        );

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
                    src="/images/technical-services-bg.jpg"
                    alt="Technical Services – UAE"
                    className="absolute inset-0 w-full object-cover"
                />
                <div className="hero-content absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                    <FaUsersCog className="text-[#ff9800] text-5xl sm:text-6xl animate-pulse md:text-7xl mb-4" />
                    <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-semibold mb-3 leading-tight">
                        Technical Services – UAE
                    </h1>
                    <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-3xl">
                        Compliance. Safety. Continuity — Keeping operations running without interruption.
                    </p>

                    <button
                        onClick={handleBackToServices}
                        className="group relative mt-8 inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#ff9800] text-[#ff9800] font-semibold rounded-full transition-all duration-300 hover:bg-[#0c0d62] hover:text-white hover:shadow-[0_0_20px_#0c0d62] focus:ring-[#0c0d62]/50"
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
                    <FaGavel className="text-[#ff9800] animate-pulse" />
                    What We Do
                </h2>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    Through its UAE subsidiary Perfect World, Razib Group delivers specialized Technical and Facility Management Services across commercial, residential, retail, and industrial sectors throughout the United Arab Emirates.<br></br>

                    <br></br>Our services include comprehensive MEP works (Mechanical, Electrical & Plumbing), HVAC systems installation and maintenance, low-voltage systems, electrical panel installations, plumbing networks, civil maintenance, fit-out works, and integrated facility management solutions.<br></br>

                    <br></br>We provide both preventive and corrective maintenance programs, ensuring operational reliability, asset longevity, and regulatory compliance. All works are executed in accordance with Dubai Municipality regulations, DEWA standards, UAE Civil Defense requirements, and local authority guidelines, ensuring safety, performance, and full statutory compliance.<br></br>

                    <br></br>From project-based installations to long-term Annual Maintenance Contracts (AMC), Perfect World ensures responsive service delivery, technical excellence, and minimal operational disruption.
                </p>
            </section>

            {/* Why Choose Us */}
            <section ref={whyChooseUsRef} className="bg-gray-100 py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-10 border-l-4 border-[#ff9800] pl-3 text-[#0c0d62] flex items-center gap-3">
                        <FaHandshake className="text-[#ff9800]" />
                        Why Choose Us
                    </h2>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: <FaUsersCog />,
                                title: "Licensed UAE Technical Teams",
                                desc: "UAE-based, authority-approved teams with strong knowledge of local regulatory frameworks and approval processes.",
                            },
                            {
                                icon: <FaBalanceScale />,
                                title: "Authority-Compliant Execution",
                                desc: "Compliance-driven project execution aligned with DEWA, Civil Defense, and Municipality standards.",
                            },
                            {
                                icon: <FaTools />,
                                title: "Certified MEP & HVAC Engineers",
                                desc: "Qualified engineers and technicians across MEP, HVAC, and facility management systems.",
                            },
                            {
                                icon: <FaClock />,
                                title: "24/7 Emergency Response",
                                desc: "Round-the-clock support backed by structured preventive maintenance programs.",
                            },
                            {
                                icon: <FaBuilding />,
                                title: "Diverse Project Portfolio",
                                desc: "Proven experience across commercial towers, retail complexes, warehouses, and residential communities.",
                            },
                            {
                                icon: <FaShieldAlt />,
                                title: "International HSE Standards",
                                desc: "Strong Health, Safety & Environment culture aligned with global best practices.",
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
            <section ref={projectsRef} className="bg-white max-w-6xl mx-auto px-6 py-16 md:py-24">
                <h2 className="text-2xl sm:text-3xl font-bold mb-10 border-l-4 border-[#ff9800] pl-3 text-[#0c0d62] flex items-center gap-3">
                    <FaBuilding className="text-[#ff9800]" />
                    Projects
                </h2>

                <div className="w-[90%] bg-white md:w-[80%] lg:w-[70%] mx-auto">
                    <ul className="space-y-4">
                        {[
                            "MEP installation and facility maintenance for commercial office in Dubai",
                            "HVAC system retrofitting and electrical upgrades for industrial warehouses in Duabi",
                            "Annual Maintenance Contracts (AMC) for residential communities, retail outlets, and mixed-use developments across the UAE",
                            "Civil and technical fit-out works for private developers and property management companies"
                            

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

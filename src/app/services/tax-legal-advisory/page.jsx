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
        <div className="font-montserrat text-gray-800">
            <Navbar />

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden"
            >
                <img
                    src="/images/tax-legal-advisory-bg.jpg"
                    alt="Tax & Legal Advisory Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="hero-content absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                    <FaBalanceScale className="text-[#ff9800] text-5xl sm:text-6xl animate-pulse md:text-7xl mb-4" />
                    <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-semibold mb-3 leading-tight">
                        Tax & Legal Advisory
                    </h1>
                    <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-3xl">
                        Expert legal and financial advisory services for international tax
                        structuring, regulatory compliance, and corporate governance across
                        multiple jurisdictions.
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
            <section ref={whatWeDoRef} className="max-w-6xl mx-auto px-6 py-16 md:py-24">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-l-4 border-[#ff9800] pl-3 text-[#0c0d62] flex items-center gap-3">
                    <FaGavel className="text-[#ff9800] animate-pulse" />
                    What We Do
                </h2>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    Razib Group’s Tax & Legal Advisory division supports clients in achieving
                    regulatory compliance, cross-border structuring, and international tax
                    optimization. Our team of legal and financial professionals delivers tailored
                    advice to ensure businesses operate efficiently and meet jurisdictional
                    requirements in every country we serve.
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
                                title: "Multinational Expertise",
                                desc: "Advisory experience across UAE, Poland, India, and KSA — ensuring compliance with complex tax and legal frameworks.",
                            },
                            {
                                icon: <FaGlobe />,
                                title: "Cross-Border Structuring",
                                desc: "Specialized knowledge in international trade regulations and double taxation agreements for seamless cross-border operations.",
                            },
                            {
                                icon: <FaFileSignature />,
                                title: "End-to-End Legal Advisory",
                                desc: "From company incorporation to ongoing compliance, we offer full-cycle legal and regulatory support.",
                            },
                            {
                                icon: <FaBalanceScale />,
                                title: "Ethical & Transparent Consulting",
                                desc: "Our approach is rooted in integrity, transparency, and sustainable client success.",
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
                    <FaBuilding className="text-[#ff9800]" />
                    Example Projects / Clients
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {[
                        {
                            icon: <FaGavel />,
                            title: "Legal Structuring for Foreign Investments",
                            desc: "Advised clients on establishing compliant business entities in the Middle East and Europe.",
                        },
                        {
                            icon: <FaGlobe />,
                            title: "Cross-Border Compliance Advisory",
                            desc: "Supported multinational enterprises in meeting international tax and legal obligations.",
                        },
                        {
                            icon: <FaBalanceScale />,
                            title: "International Tax Optimization",
                            desc: "Designed efficient global tax structures for regional business groups operating across borders.",
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

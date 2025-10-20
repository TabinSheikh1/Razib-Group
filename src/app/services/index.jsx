"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
// import { FiTool } from "react-icons/fi";
// import { GiBrickWall } from "react-icons/gi";
// import { FaWrench, FaHardHat } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css"
gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "engineering",
        title: "Civil Engineering & Infrastructure ",
    },
    {
        id: "telecom-solutions",
        title: "Telecom Solutions",
    },
    {
        id: "technology-consulting",
        title: "Technology & IT Consulting",

    },
    {
        id: "tax-legal-advisory",
        title: "Tax & Legal Advisory",
    }
];

export default function ServicesPage() {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const section = sectionRef.current;
        const cards = cardRefs.current;

        gsap.fromTo(
            section.querySelector("h2"),
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%",
                },
            }
        );

        gsap.fromTo(
            cards,
            { opacity: 0, y: 70 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-12 px-4 sm:px-6 lg:px-16 font-montserrat max-w-7xl mx-auto"
            id="services"
        >
            <div className="text-center mb-12">
                <p className=" lg:text-2xl montserrat-bold text-2xl text-[#ff9800] uppercase tracking-wide">
                    Our Services
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0c0d62] leading-tight">
                    Navigate the Path to Success
                </h2>
                <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                    Explore our comprehensive services designed to help your projects
                    succeed.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        ref={(el) => (cardRefs.current[index] = el)}
                        className="group bg-[#0c0d62] p-6 rounded-2xl border transition-all duration-300 ease-out relative hover:bg-[#ff9800] "
                    >
                        {/* Inner div */}
                        <div
                            className="group bg-[#0c0d62] p-6 rounded-2xl shadow-lg border transition-all duration-300 ease-out flex flex-col items-center justify-center
             hover:scale-105 hover:bg-[#0c0d62] hover:shadow-[0_0_25px_rgba(12,13,98,0.6)]"
                        >
                            <div className="mt-8">
                                <h3 className="text-md font-bold mb-3 text-white transition-colors duration-300 group-hover:text-white text-center">
                                    {service.title}
                                </h3>

                                <p className="text-white mb-5 montserrat-regular transition-colors duration-400 group-hover:text-white">
                                    {service.description}
                                </p>

                                <Link href={`/services/${service.id}`}>
                                    <button
                                        className="flex items-center text-sm font-semibold py-2 px-4 rounded-lg border border-[#ffbf5e] text-white
                   transition-all duration-400 ease-in-out m-auto
                   group-hover:bg-[#ff9800] group-hover:text-[#0c0d62] group-hover:border-[#0c0d62]"
                                    >
                                        Read More <span className="ml-2">&rarr;</span>
                                    </button>
                                </Link>
                            </div>
                        </div>



                    </div>
                ))}
            </div>
        </section>
    );
}

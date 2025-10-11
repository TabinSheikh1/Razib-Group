"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRefs = useRef([]);
    const imageRefs = useRef([]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Section entrance animation
        gsap.fromTo(
            section,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Heading animation
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Paragraphs animation with stagger
        gsap.fromTo(
            paragraphRefs.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                delay: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Images animation with staggered delay and subtle scale
        gsap.fromTo(
            imageRefs.current,
            {
                opacity: 0,
                y: 50,
                scale: 0.8
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                stagger: 0.15,
                delay: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Hover effects for images
        imageRefs.current.forEach((image) => {
            if (image) {
                gsap.to(image, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out",
                    paused: true,
                    onComplete: () => {
                        gsap.to(image, {
                            boxShadow: "0 20px 40px rgba(12, 13, 98, 0.3)",
                            duration: 0.3,
                        });
                    },
                });

                // Mouse enter
                image.addEventListener("mouseenter", () => {
                    gsap.to(image, { scale: 1.05, duration: 0.3 });
                    gsap.to(image, {
                        boxShadow: "0 20px 40px rgba(12, 13, 98, 0.3)",
                        duration: 0.3,
                    });
                });

                // Mouse leave
                image.addEventListener("mouseleave", () => {
                    gsap.to(image, { scale: 1, duration: 0.3 });
                    gsap.to(image, {
                        boxShadow: "0 0 0 rgba(12, 13, 98, 0)",
                        duration: 0.3,
                    });
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            id="aboutUs"
            className="m-auto w-[90%] flex flex-col lg:flex-row gap-10 py-5 lg:py-8"
        >
            {/* Text Section */}
            <div ref={textRef} className="w-full lg:w-[70%]">
                <h1 className="text-[#ff9800] montserrat-semiBold">About Us</h1>
                <h1
                    ref={headingRef}
                    className="text-[#0c0d62] montserrat-bold text-4xl sm:text-5xl mt-5"
                >
                    Razib Group
                </h1>
                <p
                    ref={(el) => (paragraphRefs.current[0] = el)}
                    className="mb-2 mt-5 text-sm sm:text-base md:text-base lg:text-base text-gray-700 leading-relaxed"
                >
                    We are diversified multinational organization headquartered in the
                    United Arab Emirates, with operations across six countries — the UAE,
                    Angola, Poland, India, Bangladesh, Congo, and the Kingdom of Saudi
                    Arabia (KSA). Bringing together five specialized companies under one
                    umbrella, the Group delivers integrated solutions in civil
                    engineering, construction, telecommunications, IT consulting, and
                    legal and tax advisory, serving both public and private sector
                    clients worldwide.
                </p>
                <p
                    ref={(el) => (paragraphRefs.current[1] = el)}
                    className="mb-2 text-sm sm:text-base md:text-base lg:text-base text-gray-700 leading-relaxed"
                >
                    Driven by a commitment to excellence, innovation, and sustainability,
                    Razib Group offers comprehensive project capabilities that span from
                    concept development and design to execution, consulting, and
                    long-term operational support. Our interdisciplinary approach enables
                    seamless coordination across engineering, technology, and consulting
                    disciplines, ensuring efficiency, quality, and value at every stage of
                    a project.
                </p>
                <p
                    ref={(el) => (paragraphRefs.current[2] = el)}
                    className="mb-2 text-sm sm:text-base md:text-base lg:text-base text-gray-700 leading-relaxed"
                >
                    Built on the collective expertise of its subsidiaries and a highly
                    skilled workforce, Razib Group has earned a reputation for delivering
                    complex infrastructure and technology solutions that meet global
                    standards of safety, reliability, and performance. Guided by
                    integrity and driven by innovation, the Group continues to shape
                    resilient infrastructure, strengthen digital and physical
                    connectivity, and create sustainable value for governments,
                    development agencies, and private enterprises across its global
                    markets.
                </p>
            </div>

            {/* Images Section */}
            <div className="w-full lg:w-[30%] grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:gap-2">
                <div className="w-full lg:w-[210] overflow-hidden rounded-2xl">
                    <Image
                        ref={(el) => (imageRefs.current[0] = el)}
                        src="/images/About-1.jpg"
                        alt="Razib Group"
                        width={250}
                        height={250}
                        className="object-cover rounded-2xl w-full h-auto transition-all duration-300 cursor-pointer"
                    />
                </div>
                <div className="w-full lg:w-[210] lg:ml-24 overflow-hidden rounded-2xl">
                    <Image
                        ref={(el) => (imageRefs.current[1] = el)}
                        src="/images/About-2.jpg"
                        alt="Razib Group"
                        width={250}
                        height={250}
                        className="object-cover rounded-2xl w-full h-auto transition-all duration-300 cursor-pointer"
                    />
                </div>
                <div className="w-full lg:w-[210] overflow-hidden rounded-2xl">
                    <Image
                        ref={(el) => (imageRefs.current[2] = el)}
                        src="/images/About-3.jpg"
                        alt="Razib Group"
                        width={250}
                        height={250}
                        className="object-cover rounded-2xl w-full h-auto transition-all duration-300 cursor-pointer"
                    />
                </div>
                <div className="w-full lg:w-[210] lg:ml-24 overflow-hidden rounded-2xl">
                    <Image
                        ref={(el) => (imageRefs.current[3] = el)}
                        src="/images/About-4.jpg"
                        alt="Razib Group"
                        width={250}
                        height={250}
                        className="object-cover rounded-2xl w-full h-auto transition-all duration-300 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;
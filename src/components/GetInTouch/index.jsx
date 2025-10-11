"use client";

import React, { useRef, useEffect } from "react";
import { FiUser, FiMail, FiChevronDown } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
    const fullNameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    const sectionRef = useRef(null);
    const leftColumnRef = useRef(null);
    const rightColumnRef = useRef(null);
    const headingRef = useRef(null);
    const subheadingRef = useRef(null);
    const formElementsRef = useRef([]);
    const buttonRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Section entrance animation
        gsap.fromTo(
            section,
            {
                opacity: 0,
                y: 80
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Left column animations
        gsap.fromTo(
            headingRef.current,
            {
                opacity: 0,
                x: -50,
                scale: 0.9
            },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1,
                delay: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: leftColumnRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        gsap.fromTo(
            subheadingRef.current,
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: leftColumnRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Right column animations
        gsap.fromTo(
            rightColumnRef.current,
            {
                opacity: 0,
                x: 50
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.4,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: rightColumnRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Form elements staggered animation
        gsap.fromTo(
            formElementsRef.current,
            {
                opacity: 0,
                y: 40
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                delay: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: rightColumnRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Button animation
        gsap.fromTo(
            buttonRef.current,
            {
                opacity: 0,
                scale: 0.8
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                delay: 1.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: buttonRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Input field focus animations
        const inputFields = section.querySelectorAll('input, textarea');
        inputFields.forEach((field) => {
            field.addEventListener('focus', () => {
                gsap.to(field, {
                    borderColor: "#0c0d62",
                    duration: 0.3,
                    ease: "power2.out"
                });
                gsap.to(field, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            field.addEventListener('blur', () => {
                gsap.to(field, {
                    borderColor: "#d1d5db",
                    duration: 0.3,
                    ease: "power2.out"
                });
                gsap.to(field, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Button click animation
        gsap.to(buttonRef.current, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut"
        });

        const data = {
            fullName: fullNameRef.current.value,
            email: emailRef.current.value,
            subject: subjectRef.current.value,
            message: messageRef.current.value,
        };

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (result.success) {
                // Success animation
                gsap.to(buttonRef.current, {
                    backgroundColor: "#10b981",
                    duration: 0.5,
                    ease: "power2.out"
                });
                setTimeout(() => {
                    gsap.to(buttonRef.current, {
                        backgroundColor: "#0c0d62",
                        duration: 0.5,
                        ease: "power2.out"
                    });
                }, 2000);
                alert("Email sent successfully!");
            } else {
                // Error animation
                gsap.to(buttonRef.current, {
                    backgroundColor: "#ef4444",
                    duration: 0.5,
                    ease: "power2.out",
                    yoyo: true,
                    repeat: 1
                });
                alert("Failed to send email.");
            }
        } catch (err) {
            console.error("Error:", err);
            gsap.to(buttonRef.current, {
                backgroundColor: "#ef4444",
                duration: 0.5,
                ease: "power2.out",
                yoyo: true,
                repeat: 1
            });
            alert("Something went wrong!");
        }

        e.target.reset();
    };

    const InputField = ({
        label,
        name,
        type = "text",
        Icon,
        isSubject = false,
        inputRef,
    }) => (
        <div
            ref={(el) => formElementsRef.current.push(el)}
            className="relative py-3"
        >
            <input
                type={type}
                name={name}
                id={name}
                placeholder={label}
                ref={inputRef}
                autoComplete="off"
                className="w-full bg-transparent border-b border-gray-300 placeholder-gray-500 text-gray-800 pr-8 focus:border-[#0c0d62] focus:border-b-2 outline-none transition-all duration-300 transform origin-left"
                required
            />
            {Icon && (
                <Icon className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[#ff9800]" />
            )}
            {isSubject && (
                <FiChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[#ff9800]" />
            )}
        </div>
    );

    return (
        <section
            ref={sectionRef}
            id="getInTouch"
            className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-montserrat bg-white overflow-hidden"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Left Column */}
                <div ref={leftColumnRef} className="flex flex-col lg:mt-25">
                    <h2
                        ref={headingRef}
                        className="text-4xl md:text-6xl font-bold mb-4 text-[#0c0d62] leading-tight"
                    >
                        Let's Get in <span className="text-[#ff9800]">Touch!</span>
                    </h2>
                    <p
                        ref={subheadingRef}
                        className="text-lg text-gray-700 max-w-lg mb-8 italic leading-relaxed"
                    >
                        Have a question or need assistance? Reach out to us via email, phone, or the contact form below.
                    </p>
                    <p className="text-2xl mb-9 font-semibold text-[#ff9800]">
                        Nice hearing from you!
                    </p>
                </div>

                {/* Right Column */}
                <div ref={rightColumnRef}>
                    <h3 className="text-3xl font-bold mb-8 text-[#0c0d62] border-b border-black pb-1">
                        Talk to Us
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <InputField
                            label="Full name"
                            name="fullName"
                            Icon={FiUser}
                            inputRef={fullNameRef}
                        />
                        <InputField
                            label="Your mail"
                            name="email"
                            type="email"
                            Icon={FiMail}
                            inputRef={emailRef}
                        />
                        <InputField
                            label="Subject"
                            name="subject"
                            isSubject={true}
                            inputRef={subjectRef}
                        />

                        <div
                            ref={(el) => formElementsRef.current.push(el)}
                            className="relative pt-3"
                        >
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Message"
                                rows="5"
                                ref={messageRef}
                                className="w-full border border-gray-300 rounded-lg p-4 outline-none resize-none text-gray-800 focus:border-[#0c0d62] focus:ring-0 transition-all duration-300 transform origin-top"
                                required
                            ></textarea>
                        </div>

                        <button
                            ref={buttonRef}
                            type="submit"
                            className="flex items-center justify-center px-8 py-3 rounded-lg font-regular shadow-md transition-all duration-100 bg-[#0c0d62] text-white hover:bg-[#ff9800] hover:scale-105 hover:shadow-lg transform"
                        >
                            Send Now <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-100">&rarr;</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
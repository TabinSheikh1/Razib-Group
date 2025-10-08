"use client";

import React, { useRef } from "react";
import { FiUser, FiMail, FiChevronDown } from "react-icons/fi";

export default function ContactSection() {
    const fullNameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

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
                alert("Email sent successfully!");
            } else {
                alert("Failed to send email.");
            }
        } catch (err) {
            console.error("Error:", err);
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
        <div className="relative py-3">
            <input
                type={type}
                name={name}
                id={name}
                placeholder={label}
                ref={inputRef}
                autoComplete="off"
                className="w-full bg-transparent border-b border-gray-300 placeholder-gray-500 text-gray-800 pr-8 focus:border-primary focus:border-b-2 outline-none transition duration-200"
                required
            />
            {Icon && (
                <Icon className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none secondary" />
            )}
            {isSubject && (
                <FiChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none secondary" />
            )}
        </div>
    );

    return (
        <section  id="getInTouch" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-montserrat bg-white ">
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Left Column */}
                <div className="flex flex-col lg:mt-25">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#0c0d62]">
                        Let’s Get in <span className="text-[#ff9800]">Touch!</span>
                    </h2>
                    <p className="text-lg text-gray-700 max-w-lg mb-8 italic">
                        Have a question or need assistance? Reach out to us via email, phone, or the contact form below.
                    </p>
                    <p className="text-2xl mb-9 font-semibold text-[#ff9800]">
                        Nice hearing from you!
                    </p>
                </div>

                {/* Right Column */}
                <div>
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

                        <div className="relative pt-3">
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Message"
                                rows="5"
                                ref={messageRef}
                                className="w-full border border-gray-300 rounded-lg p-4 outline-none resize-none text-gray-800 focus:border-primary focus:ring-0 transition duration-200"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="flex items-center justify-center px-8 py-3 rounded-lg font-regular shadow-md transition duration-300 bg-[#0c0d62] text-white hover:bg-[#ff9800]"
                        >
                            Send Now <span className="ml-2">&rarr;</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

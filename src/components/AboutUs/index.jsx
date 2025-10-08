"use client";
import React from "react";
import Image from "next/image";

const AboutUsSection = () => {
    return (
        <div
            id="aboutUs"
            className="m-auto w-[90%] flex flex-col lg:flex-row gap-10 py-5 lg:py-8"
        >
            {/* Text Section */}
            <div className="w-full lg:w-[70%]">
                <h1 className="secondary montserrat-semiBold">About Us</h1>
                <h1 className="primary montserrat-bold text-4xl sm:text-5xl mt-5">Razib Group</h1>
                <p className="mb-2 mt-5 text-sm sm:text-base md:text-base lg:text-base">
                    We are diversified multinational organization headquartered in the
                    United Arab Emirates, with operations across six countries — the UAE,
                    Angola, Poland, India, Bangladesh, Congo, and the Kingdom of Saudi
                    Arabia (KSA). Bringing together five specialized companies under one
                    umbrella, the Group delivers integrated solutions in civil
                    engineering, construction, telecommunications, IT consulting, and
                    legal and tax advisory, serving both public and private sector
                    clients worldwide.
                </p>
                <p className="mb-2 text-sm sm:text-base md:text-base lg:text-base">
                    Driven by a commitment to excellence, innovation, and sustainability,
                    Razib Group offers comprehensive project capabilities that span from
                    concept development and design to execution, consulting, and
                    long-term operational support. Our interdisciplinary approach enables
                    seamless coordination across engineering, technology, and consulting
                    disciplines, ensuring efficiency, quality, and value at every stage of
                    a project.
                </p>
                <p className="mb-2 text-sm sm:text-base md:text-base lg:text-base">
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
                <div className="w-full lg:w-[210]">
                    <Image
                        src="/images/About-1.jpg"
                        alt="Razib Group"
                        width={250}
                        height={250}
                        className="object-cover rounded-2xl w-full h-auto"
                    />
                </div>
                <div className="w-full lg:w-[210] lg:ml-24">
                    <Image
                        src="/images/About-2.jpg"
                        alt="Razib Group"
                        width={250}
                        height={250}
                        className="object-cover rounded-2xl w-full h-auto"
                    />
                </div>
                <div className="w-full lg:w-[210]">
                    <Image
                        src="/images/About-3.jpg"
                        alt="Razib Group"
                        width={250}
                        height={250}
                        className="object-cover rounded-2xl w-full h-auto"
                    />
                </div>
                <div className="w-full lg:w-[210] lg:ml-24">
                    <Image
                        src="/images/About-4.jpg"
                        alt="Razib Group"
                        width={250}
                        height={250}
                        className="object-cover rounded-2xl w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;

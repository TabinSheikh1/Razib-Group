'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
    { id: 1, src: '/images/s1.jpg', alt: 'Modern skyscrapers from below' },
    { id: 2, src: '/images/s2.jpg', alt: 'City skyline at dusk' },
    { id: 3, src: '/images/s3.jpg', alt: 'Abstract view of glass buildings' },
];

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center py-10 bg-white">
            <div className="w-full max-w-3xl mx-auto mb-8 px-2">
                <h1 className="text-center text-black text-md sm:text-3xl lg:text-4xl font-bold montserrat-bold">
                    Building Infrastructure. Enabling Technology.
                    <span style={{ color: '#ff9800' }}> Driving Compliance.</span>
                </h1>
            </div>

            <div className="relative flex justify-center items-center w-full">
                {/* iPad-style background */}
                <div
                    className="absolute left-0 right-0 mt-10 sm:mt-16 md:mt-20 lg:mt-38 h-[140px] sm:h-[200px] md:h-[230px] lg:h-[250px] bg-[#0c0d62] rounded-2xl"
                    style={{ zIndex: 1 }}
                ></div>
                {/* iPad-style Swiper container */}
                <div
                    className="
                        relative
                        w-[65vw] sm:w-[80vw] md:w-[60vw] lg:max-w-2xl
                        h-[180px] sm:h-[300px] md:h-[310px] lg:h-[400px] border-6
                        rounded-3xl lg:border-8 sm:border-5 md:border-8  border-black flex items-center justify-center shadow-3xl"
                    style={{ zIndex: 1 }}
                >
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 1600,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        className="w-full h-full rounded-xl"
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="w-full h-full object-fit rounded-xl"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
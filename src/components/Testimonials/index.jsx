"use client";

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

// --- Mock Data ---
const testimonialsData = [
  {
    id: 1,
    review: "Roofing is the process of installing, repairing, and maintaining roofs on buildings. It involves various materials such as shingle tiles, metal, and membranes. Roofing services ensure structural integrity and weather protection.",
    author: "Alex Johnson",
    title: "CEO, Innovate Corp",
    rating: 5,
    avatarUrl: "https://placehold.co/100x100/1A205A/FFFFFF?text=AJ", // Placeholder for avatar
    imageUrl: "/images/review1.png", // Placeholder for main image
  },
  {
    id: 2,
    review: "The construction process was seamless from start to finish. Their team handled everything professionally, ensuring high quality and adherence to the timeline. Highly recommend their structural integrity services.",
    author: "Maria Sanchez",
    title: "Director, Global Solutions",
    rating: 4,
    avatarUrl: "https://placehold.co/100x100/1A205A/FFFFFF?text=MS", // Placeholder for avatar
    imageUrl: "https://placehold.co/750x572/C0C0C0/000000?text=Site+Manager", // Placeholder for main image
  },
  {
    id: 3,
    review: "Excellent material selection and detailed craftsmanship. The metal roofing they installed is durable and looks fantastic. They definitely prioritize weather protection and client satisfaction.",
    author: "David Lee",
    title: "Owner, Local Business",
    rating: 5,
    avatarUrl: "https://placehold.co/100x100/1A205A/FFFFFF?text=DL", // Placeholder for avatar
    imageUrl: "https://placehold.co/750x572/B0C4DE/000000?text=Contractor", // Placeholder for main image
  },
];



const StarRating = ({ count }) => (
  <div className="flex space-x-1 mt-4">
    {Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className="w-5 h-5" 
        fill={i < count ? '#FF8C00' : '#CCCCCC'} 
        color={i < count ? '#FF8C00' : '#CCCCCC'} 
      />
    ))}
  </div>
);


const ReviewCard = ({ data, handlePrev, handleNext }) => {
  const { review, author, rating, avatarUrl, imageUrl, title } = data; 
  
  const [isHovered, setIsHovered] = useState(false);
  
  const reviewClasses = `
    p-8 lg:p-10 bg-[#1A205A] rounded-2xl shadow-2xl text-white 
    w-full lg:ml-18
    
    // Desktop (lg) styles for overlapping - Adjusted width for smaller size
    lg:absolute lg:w-[45%] 
    lg:top-1/2 lg:-translate-y-1/2 lg:left-0 
    
    transition-all duration-300 ease-in-out
    transform 
    ${isHovered 
      ? 'scale-[1.03] shadow-3xl lg:translate-y-[-53%] z-30' 
      : 'scale-100 z-10' 
    }
  `;
    
  return (
    <div 
      className="relative w-full flex flex-col items-center justify-center p-4 sm:p-6 lg:h-[500px] lg:flex-row lg:pt-10"
    >
      
      <div 
        className={reviewClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)} 
        onTouchEnd={() => setIsHovered(false)}
      >
        <div className="flex items-start mb-4">
          <img
            src={avatarUrl}
            alt={author}
            className="w-14 h-14 rounded-full border-2 border-white object-cover flex-shrink-0 mr-4"
          />
          <div>
            <p className="font-bold text-xl">{author}</p>
            <p className="text-sm opacity-75">{title}</p> 
          </div>
        </div>
        
        <p className="text-base leading-relaxed opacity-90 line-clamp-6">
          {review}
        </p>
        
        <StarRating count={rating} />
        
        <div className="absolute bottom-6 right-8 flex space-x-4">
            <ArrowLeft 
                className="w-6 h-6 text-white cursor-pointer hover:text-[#FF8C00] transition duration-150" 
                onClick={handlePrev} 
            />
            <ArrowRight 
                className="w-6 h-6 text-white cursor-pointer hover:text-[#FF8C00] transition duration-150" 
                onClick={handleNext} 
            />
        </div>
      </div>

      <div className="relative w-full h-[300px] sm:h-[400px] lg:w-3/5  lg:h-full rounded-2xl shadow-xl overflow-hidden lg:ml-[45%] z-20 mt-8 lg:mt-0 " >
        <img
          src={imageUrl}
          alt="Office worker testimonial context"
          className="w-full h-full object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/750x572/D3D3D3/000000?text=Image+Loading+Failed" }}
        />
      </div>
      
    </div>
  );
};



const TestimonialsSection = () => {
  const primaryDark = 'text-[#1A205A]';
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentReview = testimonialsData[currentIndex];
  const totalReviews = testimonialsData.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalReviews);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalReviews) % totalReviews);
  };
  
  return (
    <section className="min-w-[320px] pt-16 pb-24 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <p className="text-[#FF8C00] font-semibold text-base sm:text-lg mb-2">Clients Testimonial</p>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold ${primaryDark}`}>
            Innovation Moves You Forward
          </h2>
        </div>

        
        <div className="flex justify-center items-center ">
            <div className="w-full max-w-5xl"> 
                <ReviewCard 
                    key={currentReview.id} 
                    data={currentReview} 
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

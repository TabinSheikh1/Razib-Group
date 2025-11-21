import Navbar from "@/components/navigation";
import Image from "next/image";
import Link from "next/link";

export default function CricketMatch() {
  const images = [
    "/images/cricketMatch-8.jpg",
    "/images/cricketMatch-3.png",
    "/images/cricketMatch-4.jpg",
    "/images/cricketMatch-5.png",
    "/images/cricketMatch-6.jpg",
    "/images/cricketMatch-7.png",
  ];

  return (
    <div>
      <Navbar />
      <section className="py-6">
        {/* ✅ Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[90%] mx-auto">
          {images.map((src, index) => (
            <div key={index} className="w-full h-64 overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Cricket Match ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        
        <div className="w-[90%] mx-auto mt-8 rounded-xl overflow-hidden shadow-lg">
          <video
            className="w-full h-[400px] md:h-[500px] object-cover"
            src="https://res.cloudinary.com/dmjbxzsau/video/upload/v1763757635/cricketMatch_eharq7.mp4" // place cricketMatch.mp4 in the public folder
            autoPlay
            loop
            muted
            controls // 👈 Add this if you want Play/Pause controls
            playsInline
          ></video>
        </div>

        {/* ✅ Back Button */}
        <div className="mt-6 w-[90%] mx-auto flex justify-end">
          <Link href={"/#events"}>
            <button className="group relative inline-flex items-center gap-2 px-6 py-2.5 border border-[#ff9800] text-[#ff9800] rounded-full text-base transition-all duration-300 hover:bg-[#0c0d62] hover:text-white hover:shadow-[0_0_20px_#0c0d62]">
              <span className="relative transition-transform duration-300 group-hover:-translate-x-1">
                ← Back to Events
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

import Navbar from "@/components/navigation";
import Image from "next/image";
import Link from "next/link";

export default function AngolaOffice() {
    const images = [
        "/images/office-1.jpg",
        "/images/office-2.jpg",
        "/images/office-3.jpg",
        // "/images/office-13.jpg", same as img-3
        "/images/office-11.jpg",
        "/images/office-12.jpg",
        // "/images/office-5.jpg",
        "/images/office-20.jpg",
        "/images/office-21.jpg",
        "/images/office-7.jpg",
        "/images/office-8.jpg",
        "/images/office-9.jpg",
        "/images/office-10.jpg",
        "/images/office-14.jpg",
        "/images/office-15.jpg",
        "/images/office-17.jpg",
        "/images/office-23.jpg",
         "/images/office-4.jpg",
        "/images/office-18.jpg",
        "/images/office-19.jpg",
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
                                alt={`AngolaOffice ${index + 1}`}
                                width={400}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
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

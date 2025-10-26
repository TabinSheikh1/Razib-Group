import Navbar from "@/components/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Civilprojects() {
    const images = [
        "/images/telecom-1.jpg",
        "/images/telecom-2.jpg",
        "/images/telecom-3.jpg",
        "/images/telecom-4.jpg",
        "/images/telecom-5.jpg",
        "/images/telecom-6.jpg",
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
                                alt={`TelecomProjects ${index + 1}`}
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

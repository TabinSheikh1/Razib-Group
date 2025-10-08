"use client";
import Link from "next/link";

export default function EngineeringPage() {
  return (
    <div className="py-16 px-4 max-w-5xl mx-auto font-montserrat">
      <h1 className="text-4xl md:text-5xl font-extrabold primary mb-4">
        Engineering & Infrastructure
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        Detailed content about Engineering & Infrastructure. Explain methodology, past projects,
        technologies used, and how your team ensures excellence.
      </p>

      <Link href="/#services">
        <button className="px-5 py-2 border-2 border-[#ff9800] text-[#ff9800] font-semibold rounded-md hover:bg-[#ff9800] hover:text-white transition duration-300">
          Back to Services
        </button>
      </Link>
    </div>
  );
}

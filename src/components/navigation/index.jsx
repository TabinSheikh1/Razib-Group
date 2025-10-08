"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "About Us", id: "aboutUs", scroll: true },
    { name: "Services", href: "/services", dropdown: true },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="flex justify-between items-center px-4 md:px-10 bg-white shadow-md relative z-10 h-[80] py-2">
            {/* Logo Section */}
            <div className="flex ml-[-80] md:ml-0">
                <img
                    src="/images/Logo-1.png"
                    alt="Razib Group Logo"
                    className="w-[325px] md:w-[250px] lg:w-[325px] object-contain"
                />
            </div>

            {/* Hamburger Icon (mobile + tablet) */}
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none transition"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Desktop Menu (large screens only) */}
            <div className="hidden lg:flex items-center space-x-8">
                <div className="flex space-x-6 text-base font-medium">
                    {navItems.map((item) =>
                        item.scroll ? (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.id)}
                                className="text-gray-800 hover:text-[#ff9800] transition duration-200 flex items-center"
                            >
                                {item.name}
                            </button>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-800 hover:text-[#ff9800] transition duration-200 flex items-center"
                            >
                                {item.name}
                                {item.dropdown && (
                                    <span className="ml-1 text-xs text-[#ff9800]">&#9662;</span>
                                )}
                            </Link>
                        )
                    )}
                </div>

                {/* Get in Touch Button */}
                <button
                    onClick={() => scrollToSection("getInTouch")}
                    className="ml-4 px-5 py-1.5 border border-[#ff9800] text-[#ff9800] font-bold rounded-md transition duration-300 hover:bg-[#0c0d62] hover:text-white"
                >
                    Get in Touch<span className="ml-2">&rarr;</span>
                </button>
            </div>

            {/* Mobile + Tablet Dropdown */}
            <div
                className={`block lg:hidden absolute top-[60px] left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[500px] border-t border-gray-100" : "max-h-0"
                    }`}
            >
                <div className="flex flex-col p-4 space-y-3">
                    {navItems.map((item) =>
                        item.scroll ? (
                            <button
                                key={item.name}
                                onClick={() => {
                                    setIsOpen(false);
                                    scrollToSection(item.id);
                                }}
                                className="text-gray-800 font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition"
                            >
                                {item.name}
                            </button>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-800 font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition"
                            >
                                {item.name}
                            </Link>
                        )
                    )}

                    {/* Get in Touch Button for Mobile */}
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            scrollToSection("getInTouch");
                        }}
                        className="w-full mt-3 px-4 py-2 border-2 border-[#ff9800] text-[#ff9800] font-semibold rounded-md transition duration-300 hover:bg-[#ff9800] hover:text-white flex items-center justify-center"
                    >
                        Get in Touch<span className="ml-2">&rarr;</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

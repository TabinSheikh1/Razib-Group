"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Make sure this package is installed

const navItems = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services", dropdown: true },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center px-4 md:px-8 py-4 bg-white shadow-md relative z-10">
            {/* Logo Section */}
            <div className="flex items-center">
                {/* <img
                    src="/images/logo.png"
                    alt="Razib Group Logo"
                    style={{ height: "100px", width: "100px" }}
                    className="mr-2"
                /> */}
            </div>

            {/* Hamburger Icon (mobile only) */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-md primary hover:bg-gray-100 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
                <div className="flex space-x-6 text-base">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="primary hover:secondary transition duration-150 ease-in-out flex items-center"
                        >
                            {item.name}
                            {item.dropdown && (
                                <span className="ml-1 text-xs secondary">&#9662;</span>
                            )}
                        </Link>
                    ))}
                </div>

                {/* Get in Touch Button */}
                <Link href="/get-in-touch" passHref legacyBehavior>
                    <button className="ml-4 px-6 py-2 primary border-2 border-[#ff9800] font-semibold rounded-lg transition duration-300 ease-in-out hover:bg-[#ff9800] hover:text-white">Get in Touch<span className="ml-2">&rarr;</span></button>

                </Link>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`md:hidden absolute top-[65px] left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen border-t border-gray-100" : "max-h-0"
                    }`}
            >
                <div className="flex flex-col p-4 space-y-3">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md primary hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <Link href="/get-in-touch" passHref legacyBehavior>
                        <button
                            className="w-full mt-4 px-3 py-2 border-2 border-amber-500 primary font-regular rounded-lg transition duration-300 ease-in-out hover:bg-primary hover:text-white flex items-center justify-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Get in Touch
                            <span className="ml-2">&rarr;</span>
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
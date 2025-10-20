"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
    { name: "About Us", id: "aboutUs", scroll: true },
    { name: "Services", id: "services", scroll: true },
    // { name: "Projects", href: "/projects" },
    // { name: "Careers", href: "/careers" },
    { name: "Contact", href: "#contact"},
    { name:"Events & Insights", id:"events",href: "#events", scroll:true}
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [logoLoaded, setLogoLoaded] = useState(false); // for logo animation
    const router = useRouter();
    const pathname = usePathname();
    const navRef = useRef(null);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (pathname === "/" && section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else if (pathname !== "/about" && pathname !== "/services") {
            router.push(`/#${id}`);
        }
    };

    // Navbar scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Trigger logo animation on mount
    useEffect(() => {
        setLogoLoaded(true);
        
    }, [isOpen]);

    const handleMobileItemClick = (item) => {
        if (item.scroll) {
            setIsOpen(false);
            setTimeout(() => {
                scrollToSection(item.id);
            }, 250);
        } else {
            setIsOpen(false);
        }
    };

    return (
        <nav
            ref={navRef}
            className={`flex justify-between items-center px-4 md:px-10 bg-white relative z-50 h-[80px] py-2 transition-all duration-300 backdrop-blur-sm ${isScrolled ? "bg-white/95 shadow-md" : "bg-white"
                }`}
        >
            {/* Logo with fade-in */}
            <div className="flex ml-[-80px] md:ml-0">
                <Link href={"/"} className="flex items-center  lg:flex-row">
                    <img
                        src="/images/logo_jpg.jpg"
                        alt="Razib Group Logo"
                         className={`w-[65px] ml-16 lg:ml-0 object-contain mt-3  transition-opacity duration-800 ease-out ${logoLoaded ? "opacity-100" : "opacity-0"
                            }`}
                        
                    />
                    <Link href={"/"} className="flex items-center"/>
                    <img
                        src="/images/Logo-1.png"
                        alt="Razib Group Logo"
                        className={`w-[200px] scale-325 object-contain transition-opacity duration-1000 ease-out ${logoLoaded ? "opacity-100" : "opacity-0"
                            }`}
                    />
                </Link>
            </div>

            {/* Hamburger */}
            <div className="block relative lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 z-100 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none transition-transform duration-200 hover:scale-105"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-28">
                <div className="flex space-x-6 text-base font-medium">
                    {navItems.map((item) =>
                        item.scroll ? (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.id)}
                                className="text-gray-800 hover:text-[#ff9800] transition-all duration-300 relative group "
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff9800] transition-all duration-300 group-hover:w-full"></span>
                            </button>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-800 hover:text-[#ff9800] transition-all duration-300 relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff9800] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        )
                    )}
                </div>

                <button
                    onClick={() => scrollToSection("getInTouch")}
                    className="ml-4 px-5 py-1.5 border border-[#ff9800] text-[#ff9800] font-bold rounded-md transition-all duration-300 hover:bg-[#0c0d62] hover:text-white hover:shadow-lg"
                >
                    Get in Touch<span className="ml-2">&rarr;</span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`block z-100 lg:hidden absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ${isOpen ? "border-t border-gray-100" : ""
                    }`}
                style={{ height: isOpen ? "auto" : 0 }}
            >
                <div className="flex flex-col p-4 items-start space-y-2">
                    {navItems.map((item) =>
                        item.scroll ? (
                            <button
                                key={item.name}
                                onClick={() => handleMobileItemClick(item)}
                                className="text-gray-800 font-medium px-3 py-3 rounded-md hover:bg-gray-100 transition-all duration-200 w-full text-left hover:pl-5 hover:text-[#ff9800]"
                            >
                                {item.name}
                            </button>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-800 font-medium px-3 py-3 rounded-md hover:bg-gray-100 transition-all duration-200 w-full text-left hover:pl-5 hover:text-[#ff9800]"
                            >
                                {item.name}
                            </Link>
                        )
                    )}

                    <button
                        onClick={() => {
                            setIsOpen(false);
                            setTimeout(() => {
                                scrollToSection("getInTouch");
                            }, 250);
                        }}
                        className="w-full mt-3 px-4 py-3 border-2 border-[#0c0d62] text-[#ff9800] font-medium rounded-md transition-all duration-300 hover:bg-[#0c0d62] hover:text-white"
                    >
                        Get in Touch
                    </button>
                </div>
            </div>
        </nav>
    );
}

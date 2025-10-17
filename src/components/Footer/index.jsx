"use client";

import Image from "next/image";
import Link from "next/link";
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiFacebook,
    FiTwitter,
    FiInstagram,
    FiLinkedin,
} from "react-icons/fi";

const usefulLinks = [
    { name: "About Us", href: "#aboutUs"},
    { name: "Services", href: "#services" },
    // { name: "Career", href: "/careers" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    // { Icon: FiFacebook, href: "https://facebook.com" },
    // { Icon: FiTwitter, href: "https://twitter.com" },
    // { Icon: FiInstagram, href: "https://instagram.com" },
    { Icon: FiLinkedin, href: "https://www.linkedin.com/company/razibgroup/" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="font-montserrat primary bg-[#0c0d62] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                {/* Main Flex Container */}
                <div className="flex flex-col md:flex-row flex-wrap justify-between border-b border-gray-700 pb-12 gap-10">
                    {/* Column 1: Logo + About */}
                    <div className="w-full md:w-[30%] space-y-4">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/images/Logo-2.png"
                                alt="Razib Group Logo"
                                width={200}
                                height={200}
                                className="object-contain"
                            />
                        </div>

                        <p className="text-sm text-gray-400 max-w-xs">
                            Building strong infrastructure enables technology, ensures compliance, and drives innovation.   
                        </p>

                        <div className="flex space-x-3 pt-2">
                            {socialLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition duration-150"
                                >
                                    <link.Icon size={16} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Useful Links */}
                    <div className="w-full md:w-[20%] space-y-4 mt-5">
                        <h3 className="text-xl text-white font-semibold mb-2">Useful Links</h3>
                        <ul className="space-y-2">
                            {usefulLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition duration-100"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Our Office */}
                    <div className="w-full md:w-[30%] mt-5 space-y-4">
                        <h3 className="text-xl text-white font-semibold mb-2">Our Office</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center text-gray-400">
                                <FiPhone size={16} className="mr-3 text-[#ff9800]" />
                                <span>+791 50 742 4592</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <FiMail size={16} className="mr-3 text-[#ff9800]" />
                                <span>info@razibgroup.com</span>
                            </li>
                            <li className="flex items-start text-gray-400">
                                <FiMapPin
                                    size={16}
                                    className="mr-3 mt-1 text-[#ff9800] flex-shrink-0"
                                />
                                <span>NBQ bank building 1st floor office #105 Khalid bin Al Waleed street, Al Hamriya Bur, Dubai</span>
                            </li>
                            <li className="flex items-start text-gray-400">
                                <FiMapPin
                                    size={16}
                                    className="mr-3 mt-1 text-[#ff9800] flex-shrink-0"
                                />
                                <span>Condomínio Pedras de Angola, Talatona, Luanda, Angola</span>
                            </li>
                            <li className="flex items-start text-gray-400">
                                <FiMapPin
                                    size={16}
                                    className="mr-3 mt-1 text-[#ff9800] flex-shrink-0"
                                />
                                <span>117 Aleja "Solidarności" Street, Warsaw, 00-140, Poland</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-gray-400">
                    <p>© www.razibgroup.com</p>
                    <p className="mt-2 md:mt-0">{currentYear} | All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
}

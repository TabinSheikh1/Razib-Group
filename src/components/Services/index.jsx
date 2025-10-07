"use client";
import Link from 'next/link';
import { FiTool } from 'react-icons/fi';
import { GiBrickWall } from 'react-icons/gi';
import { FaWrench, FaHardHat } from 'react-icons/fa';


const services = [
    {
        title: 'Engineering & Infrastructure',
        description: 'Infrastructure design solutions with expert engineering insights.',
        icon: <FiTool className="text-2xl primary" />,
        href: '/services/engineering',
    },
    {
        title: 'Civil Works',
        description: 'Comprehensive land development, and project management services.',
        icon: <FaHardHat className="text-2xl primary" />,
        href: '/services/civil',
    },
    {
        title: 'Construction',
        description: 'From concept we deliver high-quality construction projects on time.',
        icon: <GiBrickWall className="text-2xl primary" />,
        href: '/services/construction',
    },
    {
        title: 'Maintenance Services',
        description: 'Reliable maintenance and repair services to ensure operational excellence.',
        icon: <FaWrench className="text-2xl primary" />,
        href: '/services/maintenance',
    },
];

const ServiceCard = ({ title, description, icon, href }) => (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300 relative">
        <div className="absolute -top-6 left-6 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center border border-[#ff9800]">
            {icon}
        </div>

        <div className="mt-8">
            <h3 className={`text-md font-extrabold mb-3 primary`}>{title}</h3>
            <p className="text-gray-600 mb-5 montserrat-regular">{description}</p>
            <Link href={href} className="inline-block">
                <button className="flex items-center text-sm font-semibold py-2 px-4 rounded-lg border border-[#ff9800] text-[#ff9800] transition duration-300 ease-in-out hover:bg-[#0c0d62] hover:text-white hover:border-black">
                    Read More <span className="ml-2">&rarr;</span>
                </button>

            </Link>
        </div>
    </div>
);

export default function ServicesSection() {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-10 px-4 sm:px-6 font-montserrat">
            <div className="max-w-7xl  mx-auto">
                {/* --- Header Section --- */}
                <div className="text-center md:text-left max-w-3xl md:mb-14 lg:mb-19 mx-auto">
                    <p className="text-base sm:text-lg font-semibold text-[#ff9800] uppercase tracking-wide">
                        Our Services
                    </p>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0c0d62] leading-tight">
                        Navigate the Path to Success
                    </h2>

                    <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto md:mx-0">
                        Use receiving acco growin number of currencies and get Use receiving acco growin number of currencies and get paid like designpaid.
                    </p>
                </div>

                {/* --- Grid Section --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-12 md:gap-10">
                    {services.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </div>
        </section>

    );
}

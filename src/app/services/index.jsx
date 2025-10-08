"use client";
import Link from "next/link";
import { FiTool } from 'react-icons/fi';
import { GiBrickWall } from 'react-icons/gi';
import { FaWrench, FaHardHat } from 'react-icons/fa';

const services = [
    {
        id: 'engineering',
        title: 'Engineering & Infrastructure',
        description: 'Infrastructure design solutions with expert engineering insights.',
        icon: <FiTool className="text-2xl primary" />,
    },
    {
        id: 'civil',
        title: 'Civil Works',
        description: 'Comprehensive land development, and project management services.',
        icon: <FaHardHat className="text-2xl primary" />,
    },
    {
        id: 'construction',
        title: 'Construction',
        description: 'From concept we deliver high-quality construction projects on time.',
        icon: <GiBrickWall className="text-2xl primary" />,
    },
    {
        id: 'maintenance',
        title: 'Maintenance Services',
        description: 'Reliable maintenance and repair services to ensure operational excellence.',
        icon: <FaWrench className="text-2xl primary" />,
    },
];

export default function ServicesPage() {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-16 font-montserrat max-w-7xl mx-auto"
            id="services">
            <div className="text-center mb-12">
                <p className="text-base sm:text-lg font-semibold text-[#ff9800] uppercase tracking-wide">
                    Our Services
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0c0d62] leading-tight">
                    Navigate the Path to Success
                </h2>
                <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                    Explore our comprehensive services designed to help your projects succeed.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service) => (
                    <div key={service.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300 relative">
                        <div className="absolute -top-6 left-6 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center border border-[#ff9800]">
                            {service.icon}
                        </div>
                        <div className="mt-8">
                            <h3 className="text-md font-extrabold mb-3 primary">{service.title}</h3>
                            <p className="text-gray-600 mb-5 montserrat-regular">{service.description}</p>
                            <Link href={`/services/${service.id}`}>
                                <button className="flex items-center text-sm font-semibold py-2 px-4 rounded-lg border border-[#ff9800] text-[#ff9800] transition duration-300 ease-in-out hover:bg-[#0c0d62] hover:text-white hover:border-black">
                                    Read More <span className="ml-2">&rarr;</span>
                                </button>
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

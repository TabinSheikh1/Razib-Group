import Link from "next/link";

const events = [
    {
        name: "ICA premier league season 5",
        slug: "gallery/events/cricket-match",
        image: "/images/cricketMatch-3.png"
    },
    {
        name: "Fluxx Conference & Awards 2025-Qatar",
        slug: "gallery/events/awards",
        image: "/images/awards-1.jpg"
    },
    {
        name: "Razib Group UAE Head Office",
        slug: "gallery/events/angola-office",
        image: "/images/office-1.jpg"
    },

    {
        name: "Razib Group Civil Projects",
        slug: "gallery/events/civil-projects",
        image: "/images/civil-1.jpg"
    },

    {
        name: "Razib Group Telecom Projects",
        slug: "gallery/events/telecom-projects",
        image: "/images/telecom-5.jpg"
    },
    {
        name: "Angola Our Country Coordinate Office and Angola Top Management Team",
        slug: "gallery/events/country-office",
        image: "/images/angola-12.jpg"
    },
];

export default function Gallery() {
    return (
        <section id="events" className="bg-white">
            <div className="p-8">
                <div className="text-center mb-6">
                    <h1 className="lg:text-4xl text-2xl font-bold text-[#0c0d62] tracking-wide">
                        EVENTS & INSIGHTS
                    </h1>
                    <div className="w-30 h-1 bg-[#ff9800] rounded-full mx-auto mt-2"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <Link
                            key={event.slug}
                            href={`/${event.slug}`}
                            className="group block rounded-xl overflow-hidden border border-gray-200 shadow hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Event Image */}
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.name}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Event Info */}
                            <div className="p-4 bg-white">
                                <h2 className="text-lg font-bold group-hover:text-[#ff9800]">
                                    {event.name}
                                </h2>
                                <p className="text-gray-900 mt-1">Click to view details</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

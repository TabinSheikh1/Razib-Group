"use client";
import { useState } from "react";

export default function ContactUs() {
  const offices = {
    DUBAI: {
      title: "Dubai Office",
      address:
        "NBQ bank building 1st floor office #105 Khalid bin Al Waleed street, Al Hamriya Bur, Dubai",
      phone: "(+971) 4 123 4567",
      email: "info@razibgroup.com",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.162580426261!2d55.29827417476694!3d25.25830283150165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43e1dbb3f88b%3A0x70bb93ce1c5a1b2!2sAl%20Hamriya%2C%20Bur%20Dubai%2C%20Dubai%2C%20UAE!5e0!3m2!1sen!2sae!4v1715584329083!5m2!1sen!2sae",
    },
    ANGOLA: {
      title: "Angola Office",
      address: "Condomínio Pedras de Angola, Talatona, Luanda, Angola",
      phone: "+244 923 277 171",
      email: "info@razibgroup.com",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.021182425807!2d13.235297974721503!3d-8.93069259116778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f37a3a77cd47%3A0x26e109db47e429f0!2sTalatona%2C%20Luanda%2C%20Angola!5e0!3m2!1sen!2sao!4v1715584725114!5m2!1sen!2sao",
    },
    POLAND: {
      title: "Poland Office",
      address: '117 Aleja "Solidarności" Street, Warsaw, 00-140, Poland',
      phone: "+48 572 218 490",
      email: "info@razibgroup.com",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.304998798178!2d20.995112976832505!3d52.24275435700817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc79b14a64f5%3A0x3b8e92e9b2b449f!2sAleja%20Solidarno%C5%9Bci%20117%2C%2000-140%20Warszawa%2C%20Poland!5e0!3m2!1sen!2spl!4v1715584865930!5m2!1sen!2spl",
    },
  };

  const [selected, setSelected] = useState("DUBAI");
  const current = offices[selected];

  return (
    <div
      id="contact"
      className="min-h-screen bg-white text-[#0c0d62] flex flex-col font-[Montserrat]"
    >
      {/* Centered Heading */}
      <div className="text-center py-6">
        <h1 className="lg:text-4xl text-2xl font-bold text-[#0c0d62] tracking-wide">
          CONTACT US
        </h1>
        <div className="w-24 h-1 bg-[#ff9800] mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="md:w-1/4 w-full p-12  space-y-3">
          <h2 className="text-2xl font-semibold">Let’s Connect</h2>
          <ul className="space-y-3">
            {Object.keys(offices).map((name) => (
              <li
                key={name}
                onClick={() => setSelected(name)}
                className={`cursor-pointer text-lg transition ${
                  selected === name
                    ? "text-[#ff9800] font-bold"
                    : "hover:text-[#ff9800]"
                }`}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4 w-full p-10 bg-white">
          <h1 className="text-3xl font-semibold mb-4 text-[#0c0d62]">
            {current.title}
          </h1>
          <div className="text-[#0c0d62] space-y-2 mb-6">
            <p>
              <span className="font-bold text-[#0c0d62]">Telephone:</span>{" "}
              {current.phone}
            </p>
            <p>
              <span className="font-semibold text-[#0c0d62]">Inquiry:</span>{" "}
              <a
                href={`mailto:${current.email}`}
                className="text-[#0c0d62] hover:text-[#ff9800] hover:underline"
              >
                {current.email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-[#0c0d62]">Address: </span>
              {current.address}
            </p>
          </div>

          {/* Embedded Map */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
            <iframe
              src={current.mapEmbed}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

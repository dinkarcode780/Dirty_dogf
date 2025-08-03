import React from "react";
// import mastercard from "/assets/payment/mastercard.png";
// import visa from "/assets/payment/visa.png";
// import amex from "/assets/payment/amex.png";
// import discover from "/assets/payment/discover.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm mt-16 flex flex-col items-center">
      <div className="bg-red-600 text-white text-center w-[90vw] py-12 text-sm font-semibold uppercase tracking-wide">
        Veteran owned • Licensed & insured • Estimates are always free
      </div>
      <div className=" pt-8 pb-4 px-4 md:px-16">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Contact Info & Links */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-white">
              Dirt Dogs Excavating Grading & Land LLC
            </h3>
            <p className="text-gray-300">Elizabeth, Colorado</p>
            <p className="text-red-600 mt-2">(303) 435-4774</p>
            <p className="text-white mt-1">(303) 646-5438</p>
            <a
              href="mailto:garr@dirtdogsexcavating.com"
              className="text-red-600 block mt-2"
            >
              garr@dirtdogsexcavating.com
            </a>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-4 text-red-500">
              {[
                "Home",
                "Financing",
                "About",
                "Services",
                "Barn & Building Pads",
                "Driveways",
                "Dust Control",
                "Earth Moving",
                "Erosion Matting",
                "Footing",
                "Finish Grade",
                "Foundations",
                "Horse Arenas",
                "Road Base",
                "Road Grading",
                "Trenching",
                "Gallery",
                "Giving Back",
                "Quotes",
                "Elizabeth, Colorado",
                "Parker, Colorado",
                "Franktown, Colorado",
                "HTML Sitemap",
                "XML Sitemap",
              ].map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:underline w-1/2 md:w-1/3 lg:w-1/4"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Payment & Copyright */}
          <div className="text-center md:text-right">
            <h4 className="text-gray-400 mb-4">We accept Credit Cards</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-6">
              <img
                // src={mastercard}
                alt="MasterCard" className="h-12" />
              <img
                // src={visa}
                alt="Visa" className="h-12" />
              <img
                // src={amex}
                alt="American Express" className="h-12" />
              <img
                // src={discover}
                alt="Discover" className="h-12" />
            </div>
            <hr className="border-gray-700 mb-4" />
            <p className="text-gray-400 text-sm">
              Copyright 2024 Dirt Dogs Excavating Grading & Land LLC
            </p>
            <p className="text-red-600 text-xs">
              Powered by{" "}
              <a href="#" className="text-white hover:underline">
                Cymax Media
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

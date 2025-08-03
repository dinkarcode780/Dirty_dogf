import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    title: "New Garage Pad for home out by Strasburg CO.",
    description:
      "Dirt Dogs Excavating recently finished excavation work on a new, detached garage pad for a home out by Strasburg CO. The homeowner has a modular home and wanted a detached garage to store his vehicles. Dirt Dogs Excavating spent a day leveling and preparing the area and excavating…",
    image: "https://via.placeholder.com/600x400?text=Garage+Pad",
  },
  {
    title: "New driveway Loop for a home in Elizabeth, CO",
    description:
      "Dirt Dogs Excavating recently installed a road base driveway loop for a house in Elizabeth to make better access for delivery vehicles. This loop also provides additional parking for guests. The delivery trucks can more easily drive up to the home…",
    image: "https://via.placeholder.com/600x400?text=Driveway+Loop",
  },
  {
    title: "Pickleball Court Pad Excavation – Littleton, Colorado",
    description:
      "Dirt Dogs Excavating helped a homeowner in Littleton install a Pickleball court in their back yard. For this job, we cleared out trees, shrubs, and sod, replaced most of the…",
    image: "https://via.placeholder.com/600x400?text=Pickleball+Court",
  },
  {
    title: "Another Project Title",
    description:
      "Short summary of another excavation or earth-moving project goes here…",
    image: "https://via.placeholder.com/600x400?text=Another+Project",
  },
  {
    title: "Next Featured Project",
    description:
      "Details about the next feature project. Highlight your work for SEO and engagement…",
    image: "https://via.placeholder.com/600x400?text=Next+Project",
  },
  {
    title: "Next Featured Project",
    description:
      "Details about the next feature project. Highlight your work for SEO and engagement…",
    image: "https://via.placeholder.com/600x400?text=Next+Project",
  }
];

const CommitmentCard = () => {
  return (
    <section className="bg-gray-100">
      {/* Commitment Banner */}
      <div className="relative bg-red-600 text-white py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Commitment to Quality
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          At Dirt Dogs Excavating our goal is to ensure that we satisfy our
          customers the first time, every time by delivering a professional
          excavation and earth moving services at a reasonable price.
        </p>

        {/* Triangle pointer */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-red-600"></div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1">{card.description}</p>
                <div>
                  <p className="text-red-600 font-medium mb-2">
                    Continue reading
                  </p>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md transition">
                    Read more
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentCard;

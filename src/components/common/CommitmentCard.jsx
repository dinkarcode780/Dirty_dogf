// import React from "react";
// import { motion } from "framer-motion";

// const data = [
//   {
//     title: "New Garage Pad for home out by Strasburg CO.",
//     description:
//       "Dirt Dogs Excavating recently finished excavation work on a new, detached garage pad for a home out by Strasburg CO. The homeowner has a modular home and wanted a detached garage to store his vehicles. Dirt Dogs Excavating spent a day leveling and preparing the area and excavating…",
//     image: "https://via.placeholder.com/600x400?text=Garage+Pad",
//   },
//   {
//     title: "New driveway Loop for a home in Elizabeth, CO",
//     description:
//       "Dirt Dogs Excavating recently installed a road base driveway loop for a house in Elizabeth to make better access for delivery vehicles. This loop also provides additional parking for guests. The delivery trucks can more easily drive up to the home…",
//     image: "https://via.placeholder.com/600x400?text=Driveway+Loop",
//   },
//   {
//     title: "Pickleball Court Pad Excavation – Littleton, Colorado",
//     description:
//       "Dirt Dogs Excavating helped a homeowner in Littleton install a Pickleball court in their back yard. For this job, we cleared out trees, shrubs, and sod, replaced most of the…",
//     image: "https://via.placeholder.com/600x400?text=Pickleball+Court",
//   },
//   {
//     title: "Another Project Title",
//     description:
//       "Short summary of another excavation or earth-moving project goes here…",
//     image: "https://via.placeholder.com/600x400?text=Another+Project",
//   },
//   {
//     title: "Next Featured Project",
//     description:
//       "Details about the next feature project. Highlight your work for SEO and engagement…",
//     image: "https://via.placeholder.com/600x400?text=Next+Project",
//   },
//   {
//     title: "Next Featured Project",
//     description:
//       "Details about the next feature project. Highlight your work for SEO and engagement…",
//     image: "https://via.placeholder.com/600x400?text=Next+Project",
//   }
// ];

// const CommitmentCard = () => {



//   return (
//     <section className="bg-gray-100">
//       {/* Commitment Banner */}
//       <div className="relative bg-red-600 text-white py-12 text-center">
//         <h2 className="text-3xl md:text-4xl font-semibold mb-4">
//           Commitment to Quality
//         </h2>
//         <p className="text-lg max-w-3xl mx-auto">
//           At Dirt Dogs Excavating our goal is to ensure that we satisfy our
//           customers the first time, every time by delivering a professional
//           excavation and earth moving services at a reasonable price.
//         </p>

//         {/* Triangle pointer */}
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-red-600"></div>
//       </div>

//       {/* Cards Grid */}
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {data.map((card, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
//             >
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="w-full h-60 object-cover"
//               />
//               <div className="p-6 flex flex-col flex-1">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   {card.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4 flex-1">{card.description}</p>
//                 <div>
//                   <p className="text-red-600 font-medium mb-2">
//                     Continue reading
//                   </p>
//                   <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md transition">
//                     Read more
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CommitmentCard;



// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../../services/axiosInstance";

// const CommitmentCard = () => {
//   const [blogData, setBlogData] = useState([]);
//   const [commitmentData, setCommitmentData] = useState({
//     title: "Commitment to Quality",
//     description: "At Dirt Dogs Excavating our goal is to ensure that we satisfy our customers the first time, every time by delivering professional excavation and earth moving services at a reasonable price."
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch both blog data and home data (which contains commitment info)
//         const [blogResponse, homeResponse] = await Promise.all([
//           axiosInstance.get("/users/getBlogByFilter"),
//           axiosInstance.get("/users/getHomePage")
//         ]);

//         // Process blog data - take first 3 blogs
//         const featuredBlogs = blogResponse.data.data.slice(0, 3).map(blog => ({
//           id: blog._id,
//           title: blog.title,
//           description: blog.description,
//           image: blog.image?.[0] ? 
//             `https://dirty-dog-api.onrender.com/${blog.image[0].replace(/\\/g, '/')}` : 
//             "https://via.placeholder.com/600x400?text=Project+Image"
//         }));

//         // Process commitment data from home response
//         if (homeResponse.data.data.commitment) {
//           setCommitmentData({
//             title: homeResponse.data.data.commitment.title,
//             description: homeResponse.data.data.commitment.description
//           });
//         }

//         setBlogData(featuredBlogs);
//       } catch (err) {
//         setError(err.message);
//         console.error("Error fetching data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleBlogClick = (blogId) => {
//     navigate(`/users/getBlogById/${blogId}`);
//   };

//   if (loading) {
//     return (
//       <section className="bg-gray-100 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p>Loading content...</p>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="bg-gray-100 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-red-500">Error: {error}</p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="bg-gray-100">
//       {/* Dynamic Commitment Banner */}
//       <div className="relative bg-red-600 text-white py-12 text-center">
//         <h2 className="text-3xl md:text-4xl font-semibold mb-4">
//           {commitmentData.title}
//         </h2>
//         <p className="text-lg max-w-3xl mx-auto">
//           {commitmentData.description}
//         </p>

//         {/* Triangle pointer */}
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-red-600"></div>
//       </div>

//       {/* Blog Cards Grid */}
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         {blogData.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {blogData.map((blog, index) => (
//               <motion.div
//                 key={blog.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col cursor-pointer"
//                 onClick={() => handleBlogClick(blog.id)}
//               >
//                 {/* Clickable Image */}
//                 <div className="overflow-hidden">
//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="w-full h-60 object-cover hover:scale-105 transition duration-300"
//                     onError={(e) => {
//                       e.target.src = "https://via.placeholder.com/600x400?text=Project+Image";
//                     }}
//                   />
//                 </div>

//                 <div className="p-6 flex flex-col flex-1">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                     {blog.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4 flex-1">
//                     {blog.description.length > 150
//                       ? `${blog.description.substring(0, 150)}...`
//                       : blog.description}
//                   </p>
//                   <div>
//                     <p className="text-red-600 font-medium mb-2">
//                       Continue reading
//                     </p>
//                     <button 
//                       className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md transition"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleBlogClick(blog.blogId);
//                       }}
//                     >
//                       Read more
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center">No blog posts available</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default CommitmentCard;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/axiosInstance";

const CommitmentCard = () => {
  const [blogData, setBlogData] = useState([]);
  const [commitmentData, setCommitmentData] = useState({
    title: "Commitment to Quality",
    description: "At Dirt Dogs Excavating our goal is to ensure that we satisfy our customers the first time, every time by delivering professional excavation and earth moving services at a reasonable price."
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch both blog data and home data (which contains commitment info)
        const [blogResponse, homeResponse] = await Promise.all([
          axiosInstance.get("/users/getBlogByFilter"),
          axiosInstance.get("/users/getHomePage")
        ]);

        // Process blog data - take first 3 blogs
        const featuredBlogs = blogResponse.data.data.slice(0, 3).map(blog => ({
          blogId: blog._id,  // Changed from id to blogId
          title: blog.title,
          description: blog.description,
          image: blog.image?.[0] ? 
            `https://dirty-dog-api.onrender.com/${blog.image[0].replace(/\\/g, '/')}` : 
            "/images/placeholder-project.jpg"  // Changed to local fallback
        }));

        // Process commitment data from home response
        if (homeResponse.data.data.commitment) {
          setCommitmentData({
            title: homeResponse.data.data.commitment.title,
            description: homeResponse.data.data.commitment.description
          });
        }

        setBlogData(featuredBlogs);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);  // Updated to use /blog route
  };

  if (loading) {
    return (
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-10 bg-gray-300 rounded w-1/2 mx-auto"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-6">
                  <div className="h-48 bg-gray-300 rounded-md mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
                  <div className="h-10 bg-gray-300 rounded w-32"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-100">
      {/* Dynamic Commitment Banner */}
      <div className="relative bg-red-600 text-white py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          {commitmentData.title}
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          {commitmentData.description}
        </p>

        {/* Triangle pointer */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-red-600"></div>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {blogData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogData.map((blog, index) => (
              <motion.div
                key={blog.blogId}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col cursor-pointer"
                onClick={() => handleBlogClick(blog.blogId)}
              >
                {/* Clickable Image */}
                <div className="overflow-hidden h-60">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    onError={(e) => {
                      e.target.src = "/images/placeholder-project.jpg";
                    }}
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    {blog.description.length > 150
                      ? `${blog.description.substring(0, 150)}...`
                      : blog.description}
                  </p>
                  <div>
                    <p className="text-red-600 font-medium mb-2">
                      Continue reading
                    </p>
                    <button 
                      className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBlogClick(blog.blogId);
                      }}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts available</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Refresh
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CommitmentCard;
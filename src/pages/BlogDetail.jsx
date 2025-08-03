import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";

const BlogDetail = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await axiosInstance.get(`/users/getBlogById?blogId=${blogId}`);
        if (!res.data.success) throw new Error(res.data.message);
        
        const blogData = res.data.data;
        if (blogData.image && Array.isArray(blogData.image)) {
          blogData.image = blogData.image.map(img => 
            img.startsWith('http') ? img : `https://dirty-dog-api.onrender.com/${img.replace(/\\/g, '/')}`
          );
        }
        setBlog(blogData);
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (blogId) fetchBlogData();
    else setError("Missing blog ID");
  }, [blogId]);

  if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  if (error) return <div className="text-red-600 text-center p-10 min-h-screen">{error}</div>;
  if (!blog) return <div className="text-center p-10 min-h-screen">No blog data found</div>;

  return (
    <main className="max-w-4xl mx-auto px-4 pt-32 pb-12 font-sans min-h-screen">
      {/* Blog Title */}
      <h1 className="text-3xl font-bold mb-6 border-b-2 border-gray-200 pb-4">
        {blog.title}
      </h1>
      
      {/* Blog Content */}
      <div className="prose max-w-none mb-8">
        {blog.description.split('\n').map((paragraph, i) => (
          <p key={i} className="mb-4 leading-relaxed">{paragraph}</p>
        ))}
      </div>

      {/* Image Gallery */}
      {blog.image?.length > 0 && (
        <div className="mb-8 grid grid-cols-1 gap-4">
          {blog.image.map((img, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <img
                src={img}
                alt={`${blog.title} ${index + 1}`}
                className="w-full h-auto max-h-96 object-contain mx-auto"
                onError={(e) => {
                  e.target.src = '/placeholder-image.jpg';
                  e.target.className = 'w-full h-64 object-contain bg-gray-100 p-4 mx-auto';
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Contact Section */}
      <div className="my-8 text-center p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800">Give us a call!</h3>
        <p className="text-red-600 font-bold text-2xl mt-2">Phone: 303-435-4774</p>
      </div>

     
      {blog.recentPosts?.length > 0 && (
        <div className="mt-10  p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2">
            RECENT POSTS
          </h2>
          <ul className="space-y-3">
            {blog.recentPosts.map((post) => (
              <li 
                key={post._id}
                onClick={() => navigate(`/blog/${post._id}`)}
                className="border-b border-gray-100 pb-2 last:border-0 hover:text-red-600 hover:bg-gray-100 transition-colors cursor-pointer px-3 py-2 rounded"
              >
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default BlogDetail;
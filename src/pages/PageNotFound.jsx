    import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;

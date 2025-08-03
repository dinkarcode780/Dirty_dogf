import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../features/product/actions/productThunks';            //Product hi services hai 

const ServiceCard = ({ title, image, slug }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 p-4">
    <Link to={`/services/${slug}`} className="block bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-center bg-gray-200">
        <h3 className="text-red-600 text-lg font-bold">{title}</h3>
      </div>
    </Link>
  </div>
);

const Services = () => {
  const dispatch = useDispatch();
  const { products = [], loading, error } = useSelector((state) => state.product);

  const services = products.filter((item) => item.type === "service"); //  filter services

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p className="text-center py-10">Loading services...</p>;
  }

  if (error) {
    return <p className="text-center py-10 text-red-600">Error loading services: {error}</p>;
  }

  if (services.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-xl text-gray-600 mb-4">No services available right now.</h2>
        <p className="text-gray-500">Please check back later or contact us for more information.</p>
      </div>
    );
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-red-600 font-bold text-center mb-4">Services - We can help!</h1>
      <p className="text-center text-gray-600 mb-6">
        Listed below is only a partial list of excavation and earth moving services we provide.
        If you don’t see the specific earth moving service you are looking for, contact us anyway.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;

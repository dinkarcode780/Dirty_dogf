import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interests: [],
    message: "",
  });

  const services = [
    "Horse Arena", "Barn Pad", "Driveway", "Erosion Matting", "Finish Grade",
    "Road Base", "Road Grading", "Foundation", "Sand"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // TODO: send data to backend here
    toast.success("Quote request submitted successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-10">
      <h1 className="text-3xl font-semibold text-red-700 mb-2">Quote Form</h1>
      <p className="text-gray-700 mb-4">
        If you are interested in a quote from Dirt Dogs Excavating, please call or send in a quote form request below.
      </p>

      <p className="flex items-center text-lg text-gray-800 mb-6">
        <FaPhoneAlt className="text-red-600 mr-2" /> Phone: <span className="text-red-600 ml-2">(303) 435-4774</span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">Name *</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone Number *</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email Address *</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded bg-gray-100"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium">I'm interested in: *</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {services.map((service) => (
              <label key={service} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={service}
                  checked={formData.interests.includes(service)}
                  onChange={handleChange}
                />
                {service}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Tell us about your project needs:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            maxLength="380"
            className="w-full border border-gray-300 p-3 rounded bg-gray-100 resize-none"
          />
          <p className="text-right text-sm text-gray-500">{formData.message.length} / 380</p>
        </div>

        <button
          type="submit"
          className="bg-red-700 hover:bg-red-800 text-white font-medium px-6 py-2 rounded"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default Quote;

import React from "react";
// import aboutImg from "../assets/about.jpg"; // Replace with your actual image path

const About = () => {
  return (
    <div className="px-4 py-10 md:px-10 lg:px-20 max-w-screen-xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
        About Dirt Dogs Excavating
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side - Image & Contact */}
        <div className="lg:w-1/3">
          <img
          //  src={aboutImg}
           alt="About us" className="rounded shadow-md mb-6" />
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-2">Garr Hughes</h3>
            <p>Dirt Dogs Excavating</p>
            <p>Elizabeth, Colorado</p>
            <div className="mt-4 space-y-1 text-sm text-gray-700">
              <p>📞 (303) 435-4774</p>
              <p>📠 (303) 646-5438</p>
              <p>📧 <a href="mailto:garr@dirtdogsexcavating.com" className="text-red-700 hover:underline">garr@dirtdogsexcavating.com</a></p>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-2/3 space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold mb-2">Company History</h2>
            <p>
              Dirt Dogs Excavating Grading and Land is a family owned and operated business founded in 2005 by Garr Hughes. After being in the construction industry in several different areas for 28 years, Garr decided to start his own business and focus on what he personally enjoys.
            </p>
            <p className="mt-2">
              Dirt Dogs Excavating can help with trenching, foundations, horse arenas, driveways and grading services of all types.
            </p>
            <p className="mt-2 text-red-700 font-medium">
              Learn More about all our Earth Moving Services
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Customer Testimonials</h2>
            <blockquote className="italic mb-2 text-sm">"Thank you, I was amazed at what you did. It looks GREAT!" - Jan G.</blockquote>
            <blockquote className="italic mb-2 text-sm">"Thank you Garr, it looks great! We are really happy with it!" - Anonymous</blockquote>
            <blockquote className="italic mb-2 text-sm">
              "I wanted to take this opportunity to thank you for the magnificent job you did on our driveway...we couldn't believe our eyes..."
              <br />– Kelly B.
            </blockquote>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Commitment to Quality</h2>
            <p>
              At Dirt Dogs Excavating our goal is to ensure that we satisfy our customers the first time, every time by delivering a professional service at a reasonable price.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Loyal Dirt Dogs!</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <img src="/path/dog1.jpg" alt="dog1" className="rounded shadow-sm" />
              <img src="/path/dog2.jpg" alt="dog2" className="rounded shadow-sm" />
              <img src="/path/dog3.jpg" alt="dog3" className="rounded shadow-sm" />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Service Areas</h2>
            <p>We service Elizabeth, Elbert County, Douglas County, Arapahoe County and El Paso County.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

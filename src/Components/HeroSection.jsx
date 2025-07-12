import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="w-full px-4 py-10 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between">
          {/* First Main Div */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <a href="#">Linkedln</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>

          {/* Second Main Div */}
          <div className="text-center lg:text-left max-w-xl">
            <h1 className="text-3xl md:text-9xl  font-bold text-gray-800 mb-4">
              token Service Provider
            </h1>
            <p className="text-gray-600 mb-6">
              Your Trusted Partner in Token Service Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-blue-700 transition">
                Get a Free Consultation
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-2xl hover:bg-blue-50 transition">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

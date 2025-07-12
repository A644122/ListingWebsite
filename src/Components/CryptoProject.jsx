import React from "react";

const CryptoProject = () => {
  return (
    <>
      <section className="w-full px-6 py-12 bg-gray-50">
        {/* Top Text Block */}
        <div className="max-w-5xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Experience
          </h2>
          <h3 className="text-xl text-blue-600">Grow Your Crypto project.</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ready to take your crypto project to the next level? Contact us to
            learn more about our consulting services as a premier crypto service
            provider. We can help you achieve your business goals in the
            cryptocurrency industry.
          </p>
        </div>

        {/* Main Layout: Image + 2 Subcards */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Main Image */}
          <div className="flex justify-center">
            <img
              src="https://listobyte.com/wp-content/uploads/2024/04/9-0K_bHWR3q33h5amFlk2A.png"
              alt="Crypto"
              className=" sm:w-200 w-full max-w-md rounded-xl   outline-8 rounded-b-4xl border-r-8 b shadow-lg  "
            />
          </div>

          {/* Right: Two Feature Blocks */}
          <div className="grid sm:grid-cols-1 gap-10">
            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <div className="  bg-black   items-center  border rounded-full w-50 h-50     md:text-center  md:bg-gradient-to-b to-pink-600 from-gray-500 md:rounded-4xl text-white  md:w-70 md:h-40 ">
                <h1 className=" py-20 text-2xl">90%</h1>
              </div>
              <div className="px-3 py-5">
                <h4 className="text-lg font-semibold text-gray-800">
                  Tailored Solutions{" "}
                </h4>

                <p className="text-gray-600 mt-1">
                  We understand that every project is unique. That’s why we
                  offer customized solutions tailored to your specific goals and
                  objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* second div */}
        <div className="  max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          {/* Right: Two Feature Blocks */}
          <div className="grid sm:grid-cols-1 gap-10">
            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <div className="  bg-black   items-center  border rounded-full w-50 h-50   md:text-center  md:bg-gradient-to-b to-pink-600 from-gray-500 md:rounded-4xl text-white  md:w-70 md:h-40 ">
                <h1 className=" py-20 text-2xl">85%</h1>
              </div>
              <div className="px-3 py-5">
                <h4 className="text-lg font-semibold text-gray-800">
                  Guaranteed Success
                </h4>

                <p className="text-gray-600 mt-1">
                  Our team of experienced professionals has a deep understanding
                  of the cryptocurrency industry and a track record of success.
                </p>
              </div>
            </div>
          </div>
          {/* third */}
          <div className="grid sm:grid-cols-1 gap-10">
            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <div className=" bg-black   items-center  border rounded-full w-50 h-50  md:text-center  md:bg-gradient-to-b to-pink-600 from-gray-500 md:rounded-4xl text-white  md:w-70 md:h-40  ">
                <h1 className=" py-20 text-2xl">100%</h1>
              </div>
              <div className="px-3 py-5">
                <h4 className="text-lg font-semibold text-gray-800">
                  Transparent Communication
                </h4>

                <p className="text-gray-600 mt-1">
                  We believe in open and transparent communication, keeping you
                  informed every step of the way and actively seeking your input
                  and feedback
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* imgaes */}
      
      </section>
    </>
  );
};

export default CryptoProject;

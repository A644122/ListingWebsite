import React from "react";

const CryptoSection = () => {
  return (
    <section className="w-full px-4 py-10 md:px-12 lg:px-24 bg-gray-900">
      <div className="max-w-200 max-h-300  text-red-400 border rounded-b-full"></div>
     <span className=" text-white text-3xl md:text-5xl"> About us</span>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* First Main Div */}
        <div className="space-y-6">
          {/* Sub-Div 1: Heading + Paragraph */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">
              empowering crypto development solutions for success
            </h2>
            <p className="text-gray-100">
              We are a leading best token service provider, offering specialized
              services for the cryptocurrency industry. Specializing in token
              services, project consulting, crypto marketing, and development,
              we empower clients in the blockchain sector worldwide. As a
              trusted crypto token service provider in India and UAE, our
              expertise combines global knowledge with local insights to ensure
              strategic advantages for your projects. From concept to execution,
              we deliver complete solutions that drive growth and innovation.
              Partner with Listobyte to elevate your presence in the crypto
              market and securely achieve the complete potential of blockchain
              technology.
            </p>
          </div>

          {/* Sub-Div 2: Image */}
          <div className="max-w-200 max-h-300 bg-yellow-400 border rounded-b-full"></div>

          {/* Paragraphs and Button in Main Div */}
          <p className="text-red-700">
            ---Learn how cryptocurrencies are reshaping the digital economy and
            how you can be part of it.
          </p>
          <p className="text-red-700 ">
            ---From Bitcoin to NFTs, gain insights and tools to make informed
            investments.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-2xl hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Second Main Div */}
        <div className="space-y-6 text-center lg:text-left">
          <img
            src="https://listobyte.com/wp-content/uploads/2024/04/TE2zCF59Q6S5Y3pSrq9kHw.png"
            alt="Crypto Dashboard"
            className="w-full h-auto  rounded-full border shadow"
          />
          <p className="text-purple-700">
            Free listing support for Crypto exchanges.
          </p>
          <p className="text-purple-700">
            Free project development and marketing consultant.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-2xl hover:bg-green-700 transition">
            GET A FREE CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default CryptoSection;

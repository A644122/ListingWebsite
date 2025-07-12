import React from "react";

const DeliverySection = () => {
  return (
    <section
      className=" h-full w-full bg-cover bg-center bg-no-repeat px-10 py-12"
      style={{
        backgroundImage: `url('https://listobyte.com/wp-content/uploads/2024/04/TE2zCF59Q6S5Y3pSrq9kHw.png')`,
      }}
    >
      <div className="max-w-7xl  mx-auto grid md:grid-cols-1 gap-10 items-center bg-white/90 p-6 rounded-2xl shadow-lg">
        {/* Left Side: Headings & Paragraph */}
        <div className="space-y-4 text-[20px] md:px-20 md:text-left">
          <h2 className=" text-center text-3xl md:text-4xl font-bold text-gray-900">
            How we Work
          </h2>
          <h3 className= "  text-center  text-2xl text-yellow-600">
            Our Process for Delivering Results
          </h3>
          <p className="text-red-700">
            We believe in transparency, collaboration, and excellence in
            everything we do. As a leading token development company, our
            approach to working with clients is centered around these core
            principles. This ensures a seamless and rewarding experience at
            every step of the process.
          </p>
        </div>

        {/* Right Side: Image & Button */}
       
      </div>
      <div className=" hidden md:visible lg:visible 2xl:visible  py-10 md:flex md:relative md:py-20 md:px-30 lg:px-50 mx-auto text-center">
        <div className=" w-full h-screen  md:py-20 md:rounded-full md:absolute  right-30 md:top-45 md:w-50 md:h-50 bg-pink-500">04.
          <br />
          Start Project</div>
        <div className="md:rounded-full md:absolute top-0  right-100 md:w-50 md:h-50 md:py-12 font-medium bg-pink-500">03.
          <br />
          Transparent Communication</div>
        <div className="  md:rounded-full md:absolute top-32  right-200 md:w-50 md:h-50 md:py-2 font-semibold bg-pink-500">02
          <br />
          Customized Strategy Development
        </div>
        <div className="md:rounded-full absolute md:w-50  md:left-5 bottom-38 md:h-50  md:py-2 md:font-semibold bg-pink-500">01
          <br />Initial Consultation
        </div>

        <img className="   sm:bg-pink-500   md:bg-black    md:visible visible " src="https://listobyte.com/wp-content/uploads/2024/04/Vector-1.png" alt="route"  />

      </div>
      <div className=" md:hidden sm:visible  grid grid-cols-2 ">
        <div className=" rounded-3xl w-50 h-50 p-4 m-5 bg-pink-400/65 border ">
          <h3  className="font-medium text-white  text-2xl" > 01.
            <br />
            Initial Consultation
             </h3>
        </div>
        <div className=" rounded-3xl w-50 h-50 p-4 m-5 bg-pink-400/45 border ">
          <h3  className=" font-medium text-white text-2xl" >02.
            <br />Customized Strategy Development
          </h3>
        </div>
        <div className=" rounded-3xl w-50 h-50 p-4 m-5 bg-pink-400/45 border ">
          <h3  className=" font-medium text-white  text-2xl" >
03.
<br />Transparent Communication
          </h3>
        </div>
        <div className=" rounded-3xl w-50 h-50 p-4 m-5 bg-pink-400/45 border ">
          <h3  className=" font-medium text-white text-2xl" >
            04.
            <br />Start Project
          </h3>
        </div>
       
     
      </div>
    <button className=" md:bg-black/30 md:mx-auto md:text-center md:p-5 md:rounded-lg text-white border-2 border-red-400">Contact Now</button>
      <button className="md:hidden rounded-b-md  border-red-700 text-white w-full p-3 m-6 mx-auto border-2 hover:bg-black ">Contact Now</button>

    </section>
  );
};

export default DeliverySection;

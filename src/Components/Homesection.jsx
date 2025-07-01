import React from "react";
import { FaTelegram, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import Marketing from "./Marketing";

const Homesection = () => {
  return (
    <>
      <section>
        <div className=" text-3xl   ">
          <FaTwitter className="  m-4 mx-auto hover:shadow-inner rounded-2xl   hover:bg-gradient-to-b hover:to-blue-500 hover:bg-amber-400" />
          <FaInstagramSquare className=" m-4 mx-auto hover:shadow-inner rounded-2xl   hover:bg-gradient-to-b hover:to-blue-700 hover:bg-amber-400" />
          <FaTelegram className=" m-4 mx-auto hover:shadow-inner rounded-2xl   hover:bg-gradient-to-b hover:to-blue-800 hover:bg-amber-700 " />
        </div>
        <div className="  p-12 text-4xl font-bold ">
          TOKEN SERVICE PROVIDER
          <p className=" p-22 text-2xl">
            YOUR TRUSTED PARTNER IN TOKEN SERVICE SOLUTIONS
          </p>
        </div>

        <div className="  p-5 ">
          <button className="  text-center   text-white w-60 h-10 rounded-2xl  bg-gradient-to-tr to-pink-700   bg-pink-400">
            GET A FREE CONSULTATION
          </button>
        </div>
        <button className="  ml-52 m-6  text-white  border text-center  w-60 h-10 rounded-2xl  font-bold bg-gradient-to-tr to-pink-700   bg-pink-400">
          DISCOVER MORE
        </button>
      </section>
      <Marketing   />
    </>
  );
};

export default Homesection;

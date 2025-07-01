import React from "react";
import { FaCoins } from "react-icons/fa6";
import { FcCandleSticks } from "react-icons/fc";
import { TfiDesktop } from "react-icons/tfi";
import { GrAnnounce } from "react-icons/gr";
const Marketing = () => {
  return (
    <>
      <section className=" container mx-auto">
        <div className=" text-center m-9  ml-20 w-80 max-h-screen  border bg-gradient-to-t to-pink-900/50 border-none rounded-md from-pink-900">
          <FaCoins className=" mx-auto text-3xl items-center" />

          <h1 className="  p-5 m-5 text-center font-bold items-center">
            TOKEN / COIN LISTING
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            harum temporibus voluptates ipsa consequuntur fuga eum libero nobis
            iure deserunt dicta possimus, quam nam id reiciendis. Cupiditate
            ipsam recusandae et.
          </p>
        </div>
        <div className=" text-center   ml-20 w-80 max-h-screen  border bg-gradient-to-t to-pink-900/50 border-none rounded-md from-pink-900">
          <FcCandleSticks className="  mx-auto text-3xl items-center" />
          <h1 className="  p-5 m-5 text-center font-bold items-center">
            MARKET MAKING
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            harum temporibus voluptates ipsa consequuntur fuga eum libero nobis
            iure deserunt dicta possimus, quam nam id reiciendis. Cupiditate
            ipsam recusandae et.
          </p>
        </div>
        <div className=" text-center m-9  ml-20 w-80 max-h-screen  border bg-gradient-to-t to-pink-900/50 border-none rounded-md from-pink-900">
          <TfiDesktop className="mx-auto text-3xl items-center" />
          <h1 className="  p-5 m-5 text-center font-bold items-center">
            PROJECT DEVELOPMENT
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            harum temporibus voluptates ipsa consequuntur fuga eum libero nobis
            iure deserunt dicta possimus, quam nam id reiciendis. Cupiditate
            ipsam recusandae et.
          </p>
        </div>
        <div className=" text-center m-9  ml-20 w-80 max-h-screen  border bg-gradient-to-t to-pink-900/50 border-none rounded-md from-pink-900">
          <GrAnnounce className="mx-auto text-3xl items-center" />
          <h1 className="  p-5 m-5 text-center font-bold items-center">
            CRYPTO MARKETING
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            harum temporibus voluptates ipsa consequuntur fuga eum libero nobis
            iure deserunt dicta possimus, quam nam id reiciendis. Cupiditate
            ipsam recusandae et.
          </p>
        </div>
      </section>
    </>
  );
};

export default Marketing;

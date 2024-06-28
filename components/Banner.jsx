import React from "react";
import Image from "next/image";
import BannerCraneImage from "@/public/images/bannerCrane.png";
import { MdAnchor } from "react-icons/md";

const Banner = () => {
  return (
    /*Write out tailwind css from mobile standard then build it up*/
    <div className="banner-parent flex justify-center flex-col sm:flex-col-reverse items-center sm:justify-around md:flex-row w-full">
      <div className="w-full sm:w-1/2 relative" id="container-image">
        <div className="clippathtri w-full h-full absolute top-0 bg-secondary "></div>
        <Image
          className="banner-child1 relative ml-5 sm:ml-10 w-full h-auto max-w-[250px] sm:max-w-[350px] mt-4 md:max-w-[450px]"
          src={BannerCraneImage}
          alt="banner"
        />
      </div>
      <div className="banner-child2 text-content flex flex-col px-5 w-10/12 md:w-1/3 lg:w-1/2 justify-around items-center  md:space-y-5 text-center md:text-left">
        <p className="text-[3rem] leading-[3rem] mt-1 md:leading-[4.5rem] md:text-[3.5rem] md:text-center font-msans text-primary font-bold">
          Welcome to Entrust Shipping
        </p>

        <p className="text-[1.5rem] md:text-[2rem] w-full font-msans text-primary font-semibold md:text-center">
          Sailing on Trust
        </p>
        <div className="w-full flex justify-center md:justify-center items-center my-2 md:my-1">
          <button className="bg-secondary text-[#fff] flex justify-around font-msans flex-row p-5 rounded-lg items-center text-2xl">
            <p className="text-2xl font-bold">Get in touch</p>
            <MdAnchor className="text-2xl font-bold font-msans" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import HeroBG from "@/assets/png/hero-bg.png";
import { GoArrowDown } from "react-icons/go";

const Hero = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex gap-[19px] mx-28 py-[70px]">
        <div className="flex flex-col gap-6 mt-4 ">
          <h1 className="text-[40px] text-[#262C40] font-bold text-balance">
            Transforming Travel with Peer-to-Peer Parcel Delivery
          </h1>
          <p className="text-xl">
            ODIN offers unmatched cost-effectiveness, allowing you to save on
            shipping fees while ensuring swift and reliable delivery. Our
            verification systems ensure reliable exchanges between senders and
            travellers.
          </p>

          <div className="btn bg-[#262C40] text-white flex gap-3 w-fit px-8 py-[17px] rounded-md cursor-pointer mt-2">
            <p className="text-base font-bold">Explore more</p>
            <GoArrowDown size={24} />
          </div>
        </div>

        <img
          src={HeroBG}
          alt="parcel give away"
          className="h-[351px] w-full flex-1"
        />
      </div>
    </div>
  );
};

export default Hero;

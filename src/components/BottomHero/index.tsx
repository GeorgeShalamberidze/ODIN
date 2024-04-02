import React from "react";
import DoubleEye from "@/assets/png/double-eye.png";

const BottomHero = () => {
  return (
    <div className="w-full mb-[103px]">
      <img
        src={DoubleEye}
        alt="two parcels on brown background"
        className="w-full max-h-[830px] object-cover"
      />
    </div>
  );
};

export default BottomHero;

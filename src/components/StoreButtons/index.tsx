import React from "react";

type StoreButtonPropTypes = {
  upperText: string;
  mainText: string;
  imgUrl: string;
};

const StoreButtons = ({
  imgUrl,
  mainText,
  upperText,
}: StoreButtonPropTypes) => {
  return (
    <div className="bg-black h-[60px] w-[203px] rounded-md flex items-center justify-center gap-3 cursor-pointer">
      <img src={imgUrl} alt={`${mainText} logo`} className="h-9" />
      <div className="text-white">
        <p className="text-sm">{upperText}</p>
        <p className="text-xl font-bold">{mainText}</p>
      </div>
    </div>
  );
};

export default StoreButtons;

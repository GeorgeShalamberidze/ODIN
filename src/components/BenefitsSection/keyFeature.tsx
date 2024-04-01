import React from "react";
import { KeyFeatures } from "@/types/keyFeatures.type";
import { useTranslation } from "react-i18next";

const KeyFeature = ({ imgUrl, text, title }: KeyFeatures) => {
  return (
    <div className=" bg-white rounded-3xl relative flex-1">
      <img
        src={imgUrl}
        className="w-12 h-12 absolute left-1/2 -translate-x-1/2 -top-5"
      />

      <h1 className="text-base font-bold text-[#021228] pt-12 px-7 mb-12">
        {title}
      </h1>
      <p className="text-base mx-8 mb-8 text-[#636B77]">{text}</p>
    </div>
  );
};

export default KeyFeature;

import React from "react";
import { KeyFeatures } from "@/types/keyFeatures.type";
import { useTranslation } from "react-i18next";

const KeyFeature = ({ imgUrl, text, title }: KeyFeatures) => {
  const { t } = useTranslation();
  return (
    <div className=" bg-white rounded-2xl relative flex-1">
      <img
        src={imgUrl}
        className="w-12 h-12 absolute left-1/2 -translate-x-1/2 -top-5"
      />

      <h1 className="text-lg font-bold text-[#021228] pt-12 px-7 mb-6 md:mb-12">
        {t(title)}
      </h1>
      <p className="text-sm md:text-base mx-8 mb-8 text-[#636B77]">{t(text)}</p>
    </div>
  );
};

export default KeyFeature;

//F9kT_niB+5AM++V

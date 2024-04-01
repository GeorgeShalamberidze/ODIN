import React from "react";
import { useTranslation } from "react-i18next";
import StoreButtons from "../StoreButtons";

const MapSection = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-32 mt-0 md:mt-[50px] mx-8 md:mx-14 lg:mx-28">
      <div className="flex bg-white rounded-3xl flex-col md:flex-row">
        <div className="relative w-auto lg:w-1/2">
          <img
            src="./src/assets/png/map.png"
            alt="google map"
            className="max-w-full md:max-w-full sm w-full h-full object-fill md:object-cover rounded-3xl md:rounded-t-3xl"
          />
          <img
            src="./src/assets/png/iphoneX.png"
            alt="Iphone X"
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 xl:left-[600px] xl:w-[179px] w-16 xs:w-24 z-20 overflow-hidden sm:w-48 md:w-48 lg:w-28"
          />
        </div>
        <div className="flex flex-col justify-center flex-1 gap-8 p-8 xl:pl-36 text-center lg:text-start">
          <p className="text-[40px] text-black tracking-[-1px] leading-10  ">
            {t("mapSectionMainText")}
          </p>
          <p className="text-base">{t("mapSectionSecondaryText")}</p>
        </div>
      </div>
    </div>
  );
};

export default MapSection;

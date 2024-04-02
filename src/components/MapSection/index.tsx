import React from "react";
import { useTranslation } from "react-i18next";
import Map from "@/assets/png/map.png";
import Iphone from "@/assets/png/iphoneX.png";

const MapSection = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-20 mt-0 md:mt-[50px] mx-4 md:mx-14 lg:mx-28">
      <div className="flex bg-white rounded-3xl flex-col md:flex-row">
        <div className="relative w-auto lg:w-1/2 flex-1">
          <img
            src={Map}
            alt="google map"
            className="max-w-full md:max-w-full sm w-full h-full object-fill md:object-cover rounded-3xl md:rounded-t-3xl"
          />
          <img
            src={Iphone}
            alt="Iphone X"
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 xl:left-[600px] xl:w-[179px] w-20 xs:w-28 z-20 overflow-hidden sm:w-48 md:w-24 lg:w-28"
          />
        </div>
        <div className="flex flex-col justify-center gap-8 p-8 xl:pl-36 text-center lg:text-start flex-1">
          <p className="text-2xl text-[#262C40] tracking-[-1px] font-bold">
            {t("mapSectionMainText")}
          </p>
          <p className="text-sm md:text-base">{t("mapSectionSecondaryText")}</p>
        </div>
      </div>
    </div>
  );
};

export default MapSection;

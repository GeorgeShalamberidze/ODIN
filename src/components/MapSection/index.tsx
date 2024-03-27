import React from "react";
import { useTranslation } from "react-i18next";
import StoreButtons from "../StoreButtons";

const MapSection = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-32 mt-[50px] mx-[110px]">
      <div className="flex">
        <div className="relative">
          <img
            src="./src/assets/png/map.png"
            alt="google map"
            className="max-w-[532px] w-full h-full"
          />
          <img
            src="./src/assets/png/iphoneX.png"
            alt="Iphone X"
            className="absolute top-11 -right-24 w-[279px] z-50"
          />
        </div>
        <div className="flex flex-col justify-center flex-1 pl-44 gap-8">
          <p className="text-[40px] text-black tracking-[-1px] leading-10">
            {t("mapSectionMainText")}
          </p>
          <p className="text-base">{t("mapSectionSecondaryText")}</p>
          <div className="flex justify-start items-start w-fit gap-5">
            <StoreButtons
              imgUrl="./src/assets/png/google-logo.png"
              upperText="Get It On"
              mainText="Google Play"
            />
            <StoreButtons
              imgUrl="./src/assets/png/apple-logo.png"
              upperText="Download on the"
              mainText="App Store"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;

import React from "react";
import HeroBG from "@/assets/png/hero-bg.png";
import { GoArrowDown } from "react-icons/go";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex gap-[19px] mx-28 py-[70px]">
        <div className="flex flex-col gap-6 mt-4 ">
          <h1 className="text-[40px] text-[#262C40] font-bold text-balance">
            {t("heroMainText")}
          </h1>
          <p className="text-xl">{t("heroSecondaryText")}</p>

          <div className="btn bg-[#262C40] text-white flex gap-3 w-fit px-8 py-[17px] rounded-md cursor-pointer mt-2">
            <p className="text-base font-bold">{t("exploreMore")}</p>
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

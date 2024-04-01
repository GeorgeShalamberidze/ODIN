import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex flex-col gap-2 mx-4 md:mx-14 lg:mx-28 py-10 md:py-[70px] text-center md:text-start">
        <div className="flex justify-center md:justify-between gap-6 mt-4 w-full ">
          <div className="flex flex-col gap-4 max-w-[600px] w-full md:pr-6">
            <h1 className="text-3xl md:text-5xl text-[#262C40] font-bold">
              {t("heroMainText")}
            </h1>
            <p className="text-sm md:text-base">{t("heroSecondaryText")}</p>
          </div>
          <div className="h-fit w-full hidden justify-end md:flex">
            <div className="relative w-fit">
              <img
                src="./src/assets/png/parcels/img1.png "
                alt="gift wrap up"
                className="w-[395px] h-[222px] object-cover"
              />
              <img
                src="./src/assets/png/arrow-ltr.png "
                alt="connector arrow"
                className="hidden xl:block absolute bottom-0 -left-28 h-9"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-between items-center">
          <div className="bg-[#262C40] h-fit text-white flex gap-3 w-fit px-8 py-[17px] rounded-md cursor-pointer mt-2">
            <img
              src="./src/assets/png/get-updates.png"
              alt="light blub"
              className="w-6 h-6"
            />
            <p className="text-base font-bold">{t("getUpdates")}</p>
          </div>

          <div className="hidden md:flex gap-3">
            <div className="flex justify-end">
              <img
                src="./src/assets/png/parcels/img2.png"
                alt="gift wrap up"
                className="w-full h-44"
              />
            </div>
            <div className="hidden lg:flex gap-4 justify-end">
              <img
                src="./src/assets/png/parcels/img3.png"
                alt="gift wrap up"
                className="w-full h-44"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { useTranslation } from "react-i18next";
import ImgOne from "@/assets/png/parcels/img1.svg";
import LeftArrow from "@/assets/png//arrow-ltr.png";
import GetUpdates from "@/assets/png/get-updates.png";
import ImgTwo from "@/assets/png/parcels/img2.svg";
import ImgThree from "@/assets/png/parcels/img3.svg";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#F5F5F5]">
      <Fade triggerOnce className="w-full" duration={800}>
        <div className="flex flex-col gap-2 mx-4 md:mx-14 lg:mx-28 py-10 md:py-[70px] ">
          <div className="flex justify-center md:justify-between gap-6 mt-4 w-full ">
            <div className="flex flex-col gap-4 max-w-[600px] w-full md:pr-6 ">
              <h1 className="text-3xl md:text-5xl text-[#021228] font-bold text-center md:text-start">
                {t("heroMainText")}
              </h1>
              <p className="text-sm md:text-base">{t("heroSecondaryText")}</p>
            </div>
            <div className="h-fit w-full hidden justify-end md:flex">
              <div className="relative w-fit">
                <img
                  src={ImgOne}
                  alt="gift wrap up"
                  className="w-[395px] h-[222px] object-cover"
                />
                <img
                  src={LeftArrow}
                  alt="connector arrow"
                  className="hidden xl:block absolute bottom-0 -left-28 h-9"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-between items-center">
            <a
              href="#emailSection"
              className="no-underline text-inherit mb-5 md:mb-0 w-full 3xs:w-auto mx-7 3xs:mx-0"
            >
              <div className="bg-[#262C40] h-fit text-white flex gap-3 w-full px-8 py-[17px] rounded-md cursor-pointer mt-2 justify-center items-center 3xs:w-fit">
                <img src={GetUpdates} alt="light blub" className="w-6 h-6" />
                <p className="text-base font-bold">{t("getUpdates")}</p>
              </div>
            </a>
            <div className="hidden md:flex gap-3">
              <div className="flex justify-end">
                <img src={ImgTwo} alt="gift wrap up" className="w-full h-44" />
              </div>
              <div className="hidden lg:flex gap-4 justify-end">
                <img
                  src={ImgThree}
                  alt="gift wrap up"
                  className="w-full h-44"
                />
              </div>
            </div>
          </div>

          <div className="h-fit w-full flex justify-end gap-4 md:hidden">
            <div className="flex items-end w-1/4">
              <img
                src={LeftArrow}
                alt="connector arrow"
                className="h-[55px] w-full object-contain"
              />
            </div>
            <div className="relative w-fit">
              <img
                src={ImgOne}
                alt="gift wrap up"
                className="w-full h-full object-cover max-h-[150px]"
              />
            </div>
          </div>

          <div className="h-fit w-full flex gap-4 md:hidden justify-between">
            <div className="flex justify-end">
              <img src={ImgTwo} alt="gift wrap up" className="w-full h-44" />
            </div>
            <div className="gap-4 justify-end hidden 3xs:flex">
              <img src={ImgThree} alt="gift wrap up" className="w-full h-44" />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Hero;

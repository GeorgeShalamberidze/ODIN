import React from "react";
import { OdinWorkContent } from "@/types/odinWorkContent.type";
import { useTranslation } from "react-i18next";

type HowOdinWorksContentPropType = {
  content: OdinWorkContent[];
  isSender: boolean;
};

const HowOdinWorksContent = ({
  content,
  isSender,
}: HowOdinWorksContentPropType) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex gap-4 flex-col">
      {content.map((data) => (
        <div
          key={data.id}
          className={`${isSender ? "flex-row-reverse" : ""} ${
            i18n.language === "en" ? "md:max-h-[260px]" : "md:max-h-[330px]"
          } flex items-center justify-center gap-4 h-fit flex-col md:flex-row`}
        >
          <div
            className={`${
              i18n.language === "en" ? "md:h-[260px]" : "md:h-[330px]"
            } w-full flex flex-col gap-3 bg-white rounded-2xl h-fit md:h-[260px] justify-center py-8`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl xl:text-2xl text-[#021228] px-8 text-center md:text-start">
              {t(data.title)}
            </h1>
            <p className="sm:text-2xl md:text-sm lg:text-base text-[#636B77] px-8">
              {t(data.info)}
            </p>
          </div>
          <div className="w-full">
            <img
              className={`${
                i18n.language === "en"
                  ? "h-[180px] lg:h-[260px] md:h-[260px]"
                  : "h-[260px] lg:h-[330px] md:h-[330px]"
              } h-[180px] lg:h-[260px] md:h-[260px] w-full object-cover rounded-3xl`}
              src={data.imgUrl}
              alt={data.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowOdinWorksContent;

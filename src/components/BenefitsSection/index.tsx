import React from "react";
import { useTranslation } from "react-i18next";
import { keyFeaturesData } from "@/constants/keyFeatures";
import KeyFeature from "./keyFeature";
import { Fade } from "react-awesome-reveal";

const KeyFeaturesSection = () => {
  const { t } = useTranslation();
  return (
    <div
      className="mx-4 md:mx-14 lg:mx-28 items-center text-center mb-20"
      id="keyFeatures"
    >
      <Fade className="w-full" triggerOnce duration={800}>
        <div className="flex flex-col gap-3 mb-14">
          <h1 className="text-[#212121] text-2xl md:text-5xl font-bold">
            {t("keyFeatures")}
          </h1>
        </div>

        <div className="flex gap-[30px] justify-center flex-col md:flex-row">
          {keyFeaturesData.map((item) => (
            <KeyFeature
              imgUrl={item.imgUrl}
              id={item.id}
              key={item.id}
              text={item.text}
              title={item.title}
            />
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default KeyFeaturesSection;

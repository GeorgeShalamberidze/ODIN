import React from "react";
import { useTranslation } from "react-i18next";
import Benefit from "./components/Benefit";

const benefitsData = [
  {
    id: 1,
    title: "costEffective",
    text: "benefitsTextOne",
  },
  {
    id: 2,
    title: "environmentallyFriendly",
    text: "benefitsTextTwo",
  },
  {
    id: 3,
    title: "convenience",
    text: "benefitsTextThree",
  },
];

const BenefitsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-16 items-center text-center mb-36">
      <div className="px-24 flex flex-col gap-3 mb-[83px]">
        <h1 className="text-[#212121] text-5xl font-bold">{t("benefits")}</h1>
        <p className="text-2xl">{t("benefitsMainText")}</p>
      </div>

      <div className="flex gap-[30px] justify-center">
        {benefitsData.map((item) => (
          <Benefit
            id={item.id}
            key={item.id}
            text={item.text}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;

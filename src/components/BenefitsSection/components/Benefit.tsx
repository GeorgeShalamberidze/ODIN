import React from "react";
import { useTranslation } from "react-i18next";

type BenefitPropType = {
  id: number;
  title: string;
  text: string;
};

const Benefit = ({ id, text, title }: BenefitPropType) => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#F8F8F8] text-[#262C40] rounded-2xl relative w-[418px] h-[264px] flex flex-col justify-center items-center gap-[12px] px-8">
      <div className="flex justify-center items-center rounded-full w-[105px] h-[105px] bg-white absolute -top-0 -translate-y-1/2">
        <div className="flex justify-center items-center rounded-full w-[85px] h-[85px] bg-[#1B2A41] text-white text-[50px]">
          {id}
        </div>
      </div>
      <h1 className="text-2xl font-bold text-[#262C40]">{t(title)}</h1>
      <p className="text-base">{t(text)}</p>
    </div>
  );
};

export default Benefit;

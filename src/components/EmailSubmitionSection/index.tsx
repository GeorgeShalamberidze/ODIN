import React from "react";
import FormikForm from "../Formik";
import Parcel from "@/assets/png/parcel101.svg";
import "./style.css";
import { useTranslation } from "react-i18next";

const EmailSubmitionSection = () => {
  const { t } = useTranslation();
  return (
    <div
      className="bg-[#F5F5F5] mx-4 md:mx-14 lg:mx-28 flex justify-between gap-5 mb-16"
      id="emailSection"
    >
      <div className="flex items-center justify-between flex-1">
        <div className="max-w-[800px]">
          <div className="flex flex-col gap-3 md:gap-6">
            <p className="text-2xl md:text-[32px] font-bold text-[#262C40] text-center md:text-start">
              {t("joinCommunity")}
            </p>
            <p className="text-sm md:text-xl text-[#262C40]">
              {t("joinCommunityInfo")}
            </p>
          </div>
          <FormikForm />
        </div>
      </div>

      <div className="flex-1 justify-end hidden md:flex">
        <img
          src={Parcel}
          alt="handout parcel"
          className="h-[431px] my-[31px] object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default EmailSubmitionSection;

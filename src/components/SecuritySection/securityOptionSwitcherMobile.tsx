import React, { useState } from "react";
import { securityItems } from "@/constants/securityItems";
import CheckWhite from "@/assets/png/check-white.png";
import CheckBlue from "@/assets/png/check-blue.png";
import { useTranslation } from "react-i18next";

const SecurityOptionSwitcherMobile = () => {
  const [selectedItem, setSelectedItem] = useState<number | undefined>(
    undefined
  );
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <div className="flex w-full gap-8 2md:gap-5 flex-col-reverse 2md:flex-row">
      <div className="flex-1 flex justify-center items-center flex-col gap-4">
        {securityItems.map((item, i) => (
          <div key={i} className="w-full">
            <div
              className={`${
                selectedItem == i ? "bg-[#2171EC]" : "bg-white"
              } w-full mx-auto py-5 lg:py-11 pl-6 pr-4 xl:pl-12 xl:pr-5 flex items-center text-center  bg-[#2171EC] rounded-3xl gap-6 cursor-pointer max-h-[120px] justify-center 3xs:justify-start`}
              onClick={() => setSelectedItem(i)}
              onMouseEnter={() => {
                if (selectedItem === i) return;
                setSelectedItem(i);
              }}
            >
              <div className="flex gap-6">
                {selectedItem === i ? (
                  <img
                    src={CheckWhite}
                    alt="checkmark"
                    className="w-8 h-8 hidden 3xs:flex"
                  />
                ) : (
                  <img
                    src={CheckBlue}
                    alt="checkmark"
                    className="w-8 h-8 hidden 3xs:flex"
                  />
                )}
                <p
                  className={`${
                    selectedItem == i ? "text-white" : "text-[#021228]"
                  } text-2xl  font-bold`}
                >
                  {t(item.title)}
                </p>
              </div>
            </div>

            <div className="flex-1 flex justify-center items-center mt-5 h-fit">
              {selectedItem === i ? (
                <div className="flex items-center justify-center w-11/12">
                  <img
                    src={
                      language == "en"
                        ? securityItems?.[i].imgUrlEn
                        : securityItems?.[i].imgUrlGeo
                    }
                    alt="parcel photos"
                    className="object-contain max-w-[300px] w-full"
                  />
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityOptionSwitcherMobile;

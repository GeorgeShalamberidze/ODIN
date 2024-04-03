import React from "react";
import OdinWhiteLogo from "@/assets/svg/odin-white.svg";
import { headerItems } from "@/constants/headerItems";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div
      className="w-full bg-[#021228] text-[#9FA7B6] text-base px-4 md:px-14 lg:px-28"
      id="contacts"
    >
      <Fade triggerOnce duration={800} className="w-full">
        <footer>
          <div className="w-full flex items-center justify-center pt-5 3xs:hidden">
            <img src={OdinWhiteLogo} alt="company logo" className="w-40" />
          </div>
          <div className="flex justify-between w-full pb-9 pt-9 3xs:pb-14 3xs:pt-14 gap-8">
            <div className="flex-col gap-8 flex-1 max-w-[470px] hidden 3xs:flex">
              <img src={OdinWhiteLogo} alt="company logo" className="w-40" />
              <p className="hidden md:flex">
                ODIN is an innovative platform transforming international parcel
                delivery. By leveraging the unused luggage space of travellers,
                we offer a cost-effective, reliable, and secure way to send
                parcels across borders. Whether you're looking to save on
                shipping costs or earn while you travel, ODIN connects the world
                in a more meaningful way
              </p>
            </div>

            <div className="flex flex-col gap-3 flex-1 md:flex-none font-bold items-end 3xs:items-start">
              {headerItems.map((item, i) =>
                item.id !== 3 ? (
                  <a
                    href={`#${item.name}`}
                    className="no-underline text-inherit"
                    key={item.id}
                  >
                    <div className="cursor-pointer hover:opacity-65">
                      <p>{t(item.name)}</p>
                    </div>
                  </a>
                ) : null
              )}
            </div>
            <div className="flex flex-col gap-4 flex-1 md:flex-none font-bold">
              <div className="font-normal">{t("contacts")}</div>
              <a
                href="mailto:info@odin.ge"
                className="no-underline text-inherit"
              >
                <p className="hover:opacity-65 cursor-pointer">info@odin.ge</p>
              </a>
            </div>
          </div>
          <div className="h-[1px] w-full bg-[#9FA7B6] mb-6"></div>
          <div className="flex w-full justify-end pb-6">
            Copyright © 2024 ODIN. All rights reserved.
          </div>
        </footer>
      </Fade>
    </div>
  );
};

export default Footer;

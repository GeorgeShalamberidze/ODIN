import React from "react";
import OdinLogo from "@/assets/svg/odin-bg-white.svg";
import LanguageSwitcher from "../languageSwitcher";
import { useTranslation } from "react-i18next";

const headerItems = [
  { id: 0, name: "about" },
  { id: 1, name: "features" },
  { id: 2, name: "ourApproach" },
  { id: 3, name: "contacts" },
];

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between items-center w-full fixed left-0 top-0 bg-white z-50">
      <img
        src={OdinLogo}
        alt="company logo"
        className="w-40 h-[124px] pl-5 cursor-pointer"
      />
      <div className="flex pr-[126px] gap-8">
        {headerItems.map((item) => (
          <p key={item.id} className="cursor-pointer text-[#181818] text-base">
            {t(item.name)}
          </p>
        ))}
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Header;

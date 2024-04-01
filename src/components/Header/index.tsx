import React from "react";
import OdinLogo from "@/assets/svg/odin-bg-white.svg";
import LanguageSwitcher from "../languageSwitcher";
import { useTranslation } from "react-i18next";
import useIsMobile from "../hooks/useIsMobile";
import { GiHamburgerMenu } from "react-icons/gi";
import useSideMenu from "../hooks/useSideMenu";
import SideMenu from "../sideMenu";
import { headerItems } from "@/constants/headerItems";
import SideMenuContent from "../sideMenuContent";

const Header = () => {
  const { t } = useTranslation();
  const { isMobile } = useIsMobile(780);
  const { isModalOpen, hideModal, showModal } = useSideMenu();

  return (
    <div className="flex justify-between items-center w-full fixed left-0 top-0 bg-white z-50 shadow-md h-32">
      {isModalOpen ? (
        <SideMenu hideModal={hideModal}>
          <SideMenuContent items={headerItems} hideModal={hideModal} />
        </SideMenu>
      ) : null}
      <a href="#">
        <img
          src="./src/assets/png/odin-full.png"
          alt="company logo"
          className="w-40 pl-5 cursor-pointer"
        />
      </a>
      {!isMobile ? (
        <div className="flex pr-6 md:pr-10 lg:pr-[126px] gap-8 items-center justify-center">
          {headerItems.map((item) => (
            <p
              key={item.id}
              className="cursor-pointer text-[#181818] text-base"
            >
              {t(item.name)}
            </p>
          ))}
          <LanguageSwitcher />
        </div>
      ) : (
        <div className="flex mr-5 cursor-pointer" onClick={() => showModal()}>
          <GiHamburgerMenu size={35} />
        </div>
      )}
    </div>
  );
};

export default Header;

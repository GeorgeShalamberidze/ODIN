import React from "react";
import LanguageSwitcher from "../languageSwitcher";
import useIsMobile from "../hooks/useIsMobile";
import useSideMenu from "../hooks/useSideMenu";
import SideMenu from "../sideMenu";
import SideMenuContent from "../sideMenuContent";
import OdinLogo from "@/assets/svg/odin.svg";
import { headerItems } from "@/constants/headerItems";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const { t } = useTranslation();
  const { isMobile } = useIsMobile(800);
  const { isModalOpen, hideModal, showModal } = useSideMenu();

  return (
    <div className="flex justify-between items-center w-full fixed left-0 top-0 bg-white z-50 shadow-md h-24 rounded-b-lg ">
      {isModalOpen ? (
        <SideMenu hideModal={hideModal}>
          <SideMenuContent items={headerItems} hideModal={hideModal} />
        </SideMenu>
      ) : null}
      <a href="#">
        <img
          src={OdinLogo}
          alt="company logo"
          className="w-40 pl-5 cursor-pointer"
        />
      </a>
      {!isMobile ? (
        <div className="flex pr-6 md:pr-10 lg:pr-[126px] gap-8 items-center justify-center">
          {headerItems.map((item) => (
            <p
              key={item.id}
              className="cursor-pointer text-[#181818] text-base font-bold hover:text-[#2171EC]"
            >
              <a href={`/#${item.name}`} className="no-underline text-inherit">
                {t(item.name)}
              </a>
            </p>
          ))}
          <LanguageSwitcher />
        </div>
      ) : (
        <div className="flex mr-5 cursor-pointer gap-5 items-center justify-center">
          <LanguageSwitcher />
          <GiHamburgerMenu size={35} onClick={() => showModal()} />
        </div>
      )}
    </div>
  );
};

export default Header;

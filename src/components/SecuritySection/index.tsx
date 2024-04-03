import React from "react";
import SecurityOptionSwitcher from "./securityOptionSwitcher";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import SecurityOptionSwitcherMobile from "./securityOptionSwitcherMobile";
import useIsMobile from "../hooks/useIsMobile";

const SecuritySection = () => {
  const { isMobile } = useIsMobile(768);
  const { t } = useTranslation();
  return (
    <div className="mb-12 mx-4 md:mx-14 lg:mx-28" id="trustAndSecurity">
      <Fade className="w-full" triggerOnce duration={800}>
        <div className="flex items-center justify-center mb-12">
          <h1 className="text-[#212121] text-4xl md:text-5xl font-bold">
            {t("trustAndSecurity")}
          </h1>
        </div>

        {isMobile ? (
          <SecurityOptionSwitcherMobile />
        ) : (
          <SecurityOptionSwitcher />
        )}
      </Fade>
    </div>
  );
};

export default SecuritySection;

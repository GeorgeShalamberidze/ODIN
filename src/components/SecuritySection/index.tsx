import React from "react";
import SecurityOptionSwitcher from "./securityOptionSwitcher";

const SecuritySection = () => {
  return (
    <div className="mb-12 mx-4 md:mx-14 lg:mx-28" id="trustAndSecurity">
      <div className="flex items-center justify-center mb-12">
        <h1 className="text-[#212121] text-4xl md:text-5xl font-bold">
          Trust & Security
        </h1>
      </div>

      <SecurityOptionSwitcher />
    </div>
  );
};

export default SecuritySection;

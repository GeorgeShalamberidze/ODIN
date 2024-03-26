import React from "react";
import OdinLogo from "@/assets/svg/odin-bg-white.svg";
import { GoGlobe } from "react-icons/go";

const headerItems = [
  { id: 0, name: "About" },
  { id: 1, name: "Features" },
  { id: 2, name: "Out approach" },
  { id: 3, name: "Contacts" },
];

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-full">
      <img src={OdinLogo} alt="company logo" className="w-40 h-[124px] pl-5" />
      <div className="flex pr-[126px] gap-8">
        {headerItems.map((item) => (
          <p key={item.id} className="cursor-pointer text-[#181818] text-base">
            {item.name}
          </p>
        ))}
        <GoGlobe size={25} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;

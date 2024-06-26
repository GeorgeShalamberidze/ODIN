import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { GoGlobe } from "react-icons/go";
import { useTranslation } from "react-i18next";
import GeoFlag from "@/assets/svg/geo.svg";
import EngFlag from "@/assets/svg/eng.svg";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageSwitch = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Menu as="div" className="relative">
      <div className="flex items-center justify-center">
        <Menu.Button className="cursor-pointer outline-none border-none bg-white">
          <GoGlobe size={25} aria-hidden="true" className="text-black" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -left-4 z-10 mt-2 w-16  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <img
                  className="w-full object-contain cursor-pointer h-10"
                  src={GeoFlag}
                  alt="georgian flag"
                  onClick={() => handleLanguageSwitch("ka")}
                />
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <img
                  className="w-full object-contain cursor-pointer h-10"
                  src={EngFlag}
                  alt="English flag"
                  onClick={() => handleLanguageSwitch("en")}
                />
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageSwitcher;

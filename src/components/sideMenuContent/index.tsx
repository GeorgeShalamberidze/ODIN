import React from "react";
import { HeaderItem } from "@/types/headerItems.type";
import { useTranslation } from "react-i18next";

type SideMenuContentPropType = {
  items: HeaderItem[];
  hideModal: () => void;
};

const SideMenuContent = ({ items, hideModal }: SideMenuContentPropType) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col py-5 px-3 gap-4">
      {items.map((item) => (
        <a
          href={`#${item.name}`}
          className="no-underline text-inherit"
          key={item.id}
        >
          <div
            className="cursor-pointer hover:opacity-75  rounded-lg"
            onClick={() => hideModal()}
          >
            <div className="flex gap-3 items-center text-center text-white p-3">
              {<item.icon size={25} />}
              <p>{t(item.name)}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SideMenuContent;

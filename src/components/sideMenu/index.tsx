import React, { ReactNode } from "react";
import { MdClose } from "react-icons/md";

type ModalPropTypes = {
  children: ReactNode | JSX.Element | React.ReactElement;
  hideModal: () => void;
};

const SideMenu = ({ children, hideModal }: ModalPropTypes) => {
  return (
    <>
      <div
        className="fixed w-full h-full bg-black/20 top-0 left-0 z-40"
        onClick={() => hideModal()}
      ></div>
      <div className="fixed right-0 top-0 max-w-[400px] w-full h-screen bg-[#1B2A41] z-50 animate-slide overflow-y-auto">
        <div className="p-4 flex justify-end">
          <div
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white cursor-pointer"
            onClick={() => hideModal()}
          >
            <MdClose />
          </div>
        </div>

        {children}
      </div>
    </>
  );
};

export default SideMenu;

import React, { useState } from "react";

const useSideMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => setIsModalOpen(true);
  const hideModal = () => setIsModalOpen(false);

  return {
    isModalOpen,
    showModal,
    hideModal,
  };
};

export default useSideMenu;

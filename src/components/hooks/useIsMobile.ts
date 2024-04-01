import React, { useEffect, useState } from "react";

const useIsMobile = (breakPoint: number) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  const resize = (): void => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", resize);
      window.addEventListener("orientationchange", resize);
      setIsMobile(windowSize <= breakPoint);
    }
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("orientationchange", resize);
    };
  }, [windowSize]);

  return {
    isMobile,
  };
};

export default useIsMobile;

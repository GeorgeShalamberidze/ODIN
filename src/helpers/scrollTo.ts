import { MutableRefObject } from "react";

export const scrollToSection = (elementRef: MutableRefObject<any>) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};

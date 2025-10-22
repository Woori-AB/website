import { useEffect } from "react";

export const useStyle = (keyframes: string) => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = keyframes;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [keyframes]);
};

import { useEffect } from "react";

/**
 * React hook for dynamically injecting CSS into the document.
 *
 * Creates a <style> element containing the provided CSS string and appends
 * it to the document <head>. The style is automatically cleaned up when
 * the component unmounts or when the CSS string changes.
 *
 * @param css - A string containing CSS rules to be injected.
 */
export const useStyle = (css: string) => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [css]);
};

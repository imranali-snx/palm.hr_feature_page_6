import  { useState, useEffect } from "react";

export default function useWindowDimensions() {
  function getWindowDimensions() {
    if (typeof window !== "undefined") {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    }
    else{
      return;
    }
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    setWindowDimensions(getWindowDimensions());
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowDimensions || [991];
}

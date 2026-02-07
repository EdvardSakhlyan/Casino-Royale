import { useEffect, useState } from "react";

const useGetWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    windowSize,
    is1200: windowSize.width <= 1200,
    is1440: windowSize.width <= 1440,
  };
};

export default useGetWindowSize;

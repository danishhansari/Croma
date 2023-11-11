import { carouselImages } from "../data/data";
import { useEffect, useState } from "react";
const Home = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (current < carouselImages.length -1) {
        setCurrent(current + 1);
      } else {
        setCurrent(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [current, carouselImages]);
  return (
    <>
      <img
        className="transition-all h-[25vh] md:h-[650px] w-full"
        src={carouselImages[current].url}
      />
    </>
  );
};

export default Home;

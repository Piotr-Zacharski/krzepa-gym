import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const CustomCarousel = () => {
  const images = [
    { path: "img/1.png" },
    { path: "img/2.png" },
    { path: "img/3.png" },
    { path: "img/4.png" },
    { path: "img/5.png" },
    { path: "img/6.png" },
    { path: "img/7.png" },
    { path: "img/8.png" },
    { path: "img/9.png" },
    { path: "img/10.png" },
    { path: "img/11.png" },
    { path: "img/15.png" },
  ].map(img => ({ src: img.path }));

  return (
    <div>
      <Carousel images={images} style={{ height: 900, width: 1400 }} />
    </div>
  );
};

export default CustomCarousel;

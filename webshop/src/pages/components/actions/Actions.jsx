import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Actions() {
  const slides = [
    {
      url: "https://github.com/SzigetvariMark/pcweb/blob/main/SQLIMG/3060(1).jpg?raw=true",
    },
    {
      url: "https://github.com/SzigetvariMark/pcweb/blob/main/SQLIMG/7800XT(1).jpg?raw=true",
    },
    {
      url: "https://github.com/SzigetvariMark/pcweb/blob/main/SQLIMG/GX750.jpg?raw=true",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div>
        <img
          src={slides[currentIndex].url}
          alt="kep"
          className="w-full h-full rounded-2xl bg-cover bg-center duration-700 border-8 border-black"
        />
        <div>
          <BsChevronCompactLeft
            size={50}
            onClick={prevSlide}
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          />
        </div>
        <div>
          <BsChevronCompactRight
            size={50}
            onClick={nextSlide}
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2x1 rounded-full p-2 bg-black/20 text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Actions;

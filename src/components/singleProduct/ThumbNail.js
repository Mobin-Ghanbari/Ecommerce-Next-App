import React, { useState } from "react";

const ThumbNail = () => {
  const Images = [
    { id: 0, value: "/assets/single-product/product-details-1.png" },
    { id: 1, value: "/assets/single-product/product-details-2.png" },
    { id: 2, value: "/assets/single-product/product-details-3.png" },
    { id: 3, value: "/assets/single-product/product-details-4.png" },
    { id: 4, value: "/assets/single-product/product-details-5.png" },
  ];
  const [heroImg, setHeroImg] = useState(Images[0]);
  function changePicture(i) {
    const wordSlider = Images[i];
    setHeroImg(wordSlider);
  }

  return (
    <div className="w-full">
      <div className="w-full h-[600px] border border-gray-200 flex justify-center items-center overflow-hidden mb-3 relative">
        <img id="hero-img" src={heroImg.value} />
        <div className="h-[80px] w-[80px] rounded-full  bg-yellow-400 text-black text-xl font-medium flex items-center justify-center absolute  top-[30px] left-[30px]">
          <span>-50%</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {Images.map((img, i) => (
          <div
            key={i}
            onClick={() => changePicture(i)}
            className="item h-[110p] w-[110px] p-[15px]  border border-gray-200  cursor-pointer"
          >
            <img
              src={img.value}
              className={`w-full h-full object-contain ${
                heroImg.id !== i ? "opacity-50" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThumbNail;

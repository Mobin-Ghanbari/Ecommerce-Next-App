import Image from "next/image";
import React from "react";
import { newProducts } from "../newArrival/newProducts";

export const col1 = () => {
  const col1 = [];
  for (let i = 0; i < 4; i++) {
    const element = newProducts[i];
    col1.push(
      <div data-aos="fade-up" className="w-full">
        <div className="w-full h-[105px] bg-white border border-gray-100 px-5 ">
          <div className="flex justify-center items-center space-x-5 w-full h-full">
            <div className="w-[75px] h-full relative">
              <Image layout="fill" objectFit="contain" src={element.image} />
            </div>
            <div className="flex-1 flex-col justify-center  flex h-full">
              <a href="#control-game">
                <p className="mb-2 sm:text-base text-sm font-semibold text-black leading-6 hover:text-blue-600 line-clamp-1">
                  {element.content}
                </p>
              </a>
              <p className="price">
                <span className="text-gray-500 font-semibold text-xl line-through">
                  {element.price}
                </span>
                <span className="text-red-500 ml-3 font-semibold text-xl">
                  $18.27
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return col1;
};

export const col2 = () => {
  const col1 = [];
  for (let i = 4; i < 8; i++) {
    const element = newProducts[i];
    col1.push(
      <div data-aos="fade-up" className="w-full">
        <div className="w-full h-[105px] bg-white border border-gray-100 px-5 ">
          <div className="flex justify-center items-center space-x-5 w-full h-full">
            <div className="w-[75px] h-full relative">
              <Image layout="fill" objectFit="contain" src={element.image} />
            </div>
            <div className="flex-1 flex-col justify-center  flex h-full">
              <a href="#control-game">
                <p className="mb-2 sm:text-base text-sm font-semibold text-black leading-6 hover:text-blue-600 line-clamp-1">
                  {element.content}
                </p>
              </a>
              <p className="price">
                <span className="text-gray-500 font-semibold text-xl line-through">
                  {element.price}
                </span>
                <span className="text-red-500 ml-3 font-semibold text-xl">
                  $18.27
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return col1;
};

export const col3 = () => {
  const col1 = [];
  for (let i = 8; i < 12; i++) {
    const element = newProducts[i];
    col1.push(
      <div data-aos="fade-up" className="w-full">
        <div className="w-full h-[105px] bg-white border border-gray-100 px-5 ">
          <div className="flex justify-center items-center space-x-5 w-full h-full">
            <div className="w-[75px] h-full relative">
              <Image layout="fill" objectFit="contain" src={element.image} />
            </div>
            <div className="flex-1 flex-col justify-center  flex h-full">
              <a href="#control-game">
                <p className="mb-2 sm:text-base text-sm font-semibold text-black leading-6 hover:text-blue-600 line-clamp-1">
                  {element.content}
                </p>
              </a>
              <p className="price">
                <span className="text-gray-500 font-semibold text-xl line-through">
                  {element.price}
                </span>
                <span className="text-red-500 ml-3 font-semibold text-xl">
                  $18.27
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return col1;
};

import React, { useState } from "react";

const ProductDetail = () => {
  const [size, setSize] = useState(true);
  return (
    <div className="product-detail w-full mt-10 lg:mt-0">
      <span
        data-aos="fade-up"
        className="text-xs text-gray-600 font-normal tracking-wider uppercase mb-2 inline-block"
      >
        Mobile Phones
      </span>
      <p data-aos="fade-up" className="text-xl font-medium text-black mb-4">
        Samsung Galaxy Z Fold3 5G 3 colors in 512GB
      </p>
      <div data-aos="fade-up" className="flex space-x-[10px] items-center mb-6">
        <div className="flex">
          <span className="material-icons text-yellow-500 text-xl">star</span>
          <span className="material-icons text-yellow-500 text-xl">star</span>
          <span className="material-icons text-yellow-500 text-xl">star</span>
          <span className="material-icons text-yellow-500 text-xl">star</span>
          <span className="material-icons text-yellow-500 text-xl">star</span>
        </div>
        <span className="text-[13px] font-normal text-black ">6 Reviews</span>
      </div>
      <div data-aos="fade-up" className="flex space-x-2 items-center mb-7">
        <span className="text-sm font-medium text-gray-600 line-through mt-2">
          $99.9
        </span>
        <span className="text-2xl font-medium text-red-600">$69.9</span>
      </div>
      <p className="text-sm text-gray-600 leading-7 mb-[30px] font-normal">
        It is a long established fact that a reader will be distracted by the
        readable there content of a page when looking at its layout.
      </p>
      <div data-aos="fade-up" className="colors mb-[30px]">
        <span className="text-sm font-normal uppercase text-gray-600 mb-[14px] inline-block">
          COLOR
        </span>
        <div className="flex space-x-4 items-center">
          <div>
            <button
              type="button"
              className="w-[20px] h-[20px] rounded-full focus:ring-2 ring-offset-2 flex justify-center items-center product-color-ring"
            >
              <span className="w-[20px] h-[20px] block rounded-full border bg-yellow-400"></span>
            </button>
          </div>
          <div>
            <button
              type="button"
              className="w-[20px] h-[20px] rounded-full focus:ring-2 ring-offset-2 flex justify-center items-center ring-blue-400"
            >
              <span
                className="w-[20px] h-[20px] block rounded-full border"
                style={{ background: "rgb(100, 158, 255)" }}
              ></span>
            </button>
          </div>
          <div>
            <button
              type="button"
              className="w-[20px] h-[20px] rounded-full focus:ring-2 ring-offset-2 flex justify-center items-center ring-white"
            >
              <span
                className="w-[20px] h-[20px] block rounded-full border"
                style={{ background: "rgb(255, 255, 255)" }}
              ></span>
            </button>
          </div>
          <div>
            <button
              type="button"
              className="w-[20px] h-[20px] rounded-full focus:ring-2 ring-offset-2 flex justify-center items-center ring-pink-400"
            >
              <span
                className="w-[20px] h-[20px] block rounded-full border"
                style={{ background: "rgb(255, 113, 115)" }}
              ></span>
            </button>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="sizes mb-[30px]">
        <span className="text-sm font-normal text-gray-600 uppercase mb-[14px] inline-block">
          SIZE
        </span>
        <div className="w-full">
          <div className="border border-gray-200 h-[50px] flex justify-between items-center px-6 cursor-pointer">
            <div className="relative w-full font-[14px] ">
              <button
                type="button"
                className="w-full flex justify-between"
                onClick={() => setSize((prev) => !prev)}
              >
                <div>
                  <span className="text-[13px] text-black">Medium</span>
                </div>
                <div className="flex space-x-10 items-center">
                  <span className="text-[13px] text-black">
                    3”W x 3”D x 7”H
                  </span>
                  <span className="material-icons text-2xl">expand_more</span>
                </div>
              </button>
              <div
                className={size ? "product-size-open" : "product-size-close"}
              >
                <ul>
                  <li>Small</li>
                  <li>Medium</li>
                  <li>Large</li>
                  <li>Extra Large</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

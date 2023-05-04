import React, { useState } from "react";
import AddToCard from "./addToCard/AddToCard";
import Quantity from "./addToCard/Quantity";
import WishList from "./addToCard/WishList";
import SizeDropDown from "./SizeDropDown";

const ProductDetail = () => {
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
        <SizeDropDown />
      </div>

      <div
        data-aos="fade-up"
        className="quantity-card w-full flex items-center h-[50px] space-x-[10px] mb-[30px]"
      >
        <Quantity />
        <WishList />
        <AddToCard />
      </div>

      <div data-aos="fade-up" className="mb-[20px]">
        <p className="text-[13px] text-gray-400 leading-7">
          <span className="text-black ">Category : </span>
          Technology
        </p>
        <p className="text-[13px] text-gray-400 leading-7">
          <span className="text-black ">Tags : </span>
          Samsung
        </p>
        <p className="text-[13px] text-gray-400 leading-7">
          <span className="text-black ">SKU : </span>
          KE-91039
        </p>
      </div>

      <div data-aos="fade-up" className="flex items-center space-x-2 mb-[20px]">
        <span className="material-icons text-red-500 text-[20px]">flag</span>
        <button
          type="button"
          className="text-red-500 font-semibold text-[13px]"
        >
          Report This Item
        </button>
      </div>

      <div
        data-aos="fade-up"
        className="social-sharing flex items-center w-full"
      >
        <span className="text-black text-[13px] mr-[17px] inline-block">
          Share This
        </span>
        <div className="flex space-x-5 items-center">
          <a href="/facebook">
            <img
              className="w-[20px]"
              src="/assets/social-sharing/facebook.png"
            />
          </a>
          <a href="/twitter">
            <img
              className="w-[20px]"
              src="/assets/social-sharing/pinterest.png"
            />
          </a>
          <a href="/twitter">
            <img
              className="w-[18px]"
              src="/assets/social-sharing/twitter.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

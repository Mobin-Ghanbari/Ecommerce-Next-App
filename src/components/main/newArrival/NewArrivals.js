import Image from "next/image";
import React from "react";

import { newProducts } from "./newProducts";

const NewArrivals = () => {
  const arrivals = newProducts.map((p) => {
    return (
      <div data-aos="fade-up" className="item" key={p.id}>
        <div className="w-full h-full bg-white relative shadow-xl overflow-hidden group">
          <div
            className="w-full h-[300px] controlGames"
            style={{
              backgroundImage: `url(${p.image})`,
            }}
          ></div>
          <div className="product-detail px-[30px] pb-[30px] relative">
            <div className="absolute top-40 left-0 group-hover:top-[95px] h-10 w-full px-[30px] transition-all duration-300 ease-in-out">
              <button className="bg-yellow-500 w-full h-full flex justify-center items-center font-semibold text-xs">
                <div className="flex items-center space-x-3">
                  <span class="material-icons">shopping_cart</span>
                  <span>Add To Cart</span>
                </div>
              </button>
            </div>
            <div className="star flex space-x-[1px] mb-3">
              <span className="material-icons text-yellow-500 text-xl">
                star
              </span>
              <span className="material-icons text-yellow-500 text-xl">
                star
              </span>
              <span className="material-icons text-yellow-500 text-xl">
                star
              </span>
            </div>
            <a href="#control-game">
              <p className="mb-2 text-base font-semibold text-black leading-6 hover:text-blue-600 line-clamp-2">
                {p.content}
              </p>
            </a>
            <p className="price">
              <span className="text-gray-500 font-semibold text-xl">
                {p.price}
              </span>
            </p>
          </div>
          <div className="quick-access absolute top-24 group-hover:right-4  -right-10 flex flex-col space-y-3 transition-all ease-in-out duration-300">
            <a href="exact-product">
              <span className=" bg-gray-100 w-9 h-9 flex items-center justify-center rounded-md">
                <span className="material-icons">zoom_out_map</span>
              </span>
            </a>
            <a href="wish-list">
              <span className=" bg-gray-100 w-9 h-9 flex items-center justify-center rounded-md">
                <span className="material-icons">favorite_border</span>
              </span>
            </a>
            <a href="add-product">
              <span className=" bg-gray-100 w-9 h-9 flex items-center justify-center rounded-md">
                <span className="material-icons">shopping_cart</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="new-arrival-section mb-[60px]">
      <div className="w-full">
        <div className="container-x mx-auto">
          <div className="newArrival-title flex items-center justify-between mb-5">
            <div>
              <h1 className="text-black text-3xl font-semibold leading-none">
                New Arrivals
              </h1>
            </div>
            <div>
              <a href="#new-arrivals">
                <div className="flex items-center space-x-2">
                  <p className="text-black text-base font-semibold">
                    View More
                  </p>
                  <span className="material-icons animate-bounce-right ">
                    east
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="newArrival-content">
            <div className="w-full">
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                {arrivals}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;

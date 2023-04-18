import Image from "next/image";
import React from "react";
import Laptop from "../../../../public/assets/topSelling/product-img-4.jpg";
import mobile from "../../../../public/assets/topSelling/product-img-5.jpg";
import pankeh from "../../../../public/assets/topSelling/product-img-6.jpg";
import bokhar from "../../../../public/assets/topSelling/product-img-7.jpg";
const TopSelling = () => {
  return (
    <div className="w-full top-Selling mb-[60px]">
      <div className="container-x mx-auto">
        <div className="topSelling-title flex items-center justify-between mb-5">
          <div>
            <h1 className="text-black text-3xl font-semibold leading-none">
              Top Selling Products
            </h1>
          </div>
          <div>
            <a href="#all-products">
              <div className="flex items-center space-x-2">
                <p className="text-black text-base font-semibold">View More</p>
                <span className="material-icons animate-bounce-right ">
                  east
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="topSelling-content">
          <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-5 xl:gap-[30px]">
            <div className="item w-full">
              <div
                data-aos="fade-left"
                className="w-full h-[250px] bg-white group relative overflow-hidden"
              >
                <div className="flex items-center space-x-5 w-full h-full lg:p-[30px] sm:p-5 p-2">
                  <div className="h-full lg:w-1/2 w-1/3">
                    <Image
                      src={Laptop}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex-1 flex justify-center flex-col h-full">
                    <div>
                      <div className="star flex space-x-1 mb-3">
                        <span className="material-icons text-yellow-400 text-xl">
                          star
                        </span>
                        <span className="material-icons text-yellow-400 text-xl">
                          star
                        </span>
                        <span className="material-icons text-yellow-400 text-xl">
                          star
                        </span>
                        <span className="material-icons text-yellow-400 text-xl">
                          star
                        </span>
                      </div>
                      <a href="#top-selling">
                        <p className="mb-2 sm:text-base text-[13px] font-semibold text-black leading-6 hover:text-blue-600 line-clamp-2">
                          Xoggle aute et pariatur adipisicing nostrud et
                          excepteur
                        </p>
                      </a>
                      <p className="price mb-[26px]">
                        <span className="text-gray-500 font-semibold text-xl line-through">
                          $27.27
                        </span>
                        <span className="text-red-500 ml-3 font-semibold text-xl">
                          $18.27
                        </span>
                      </p>
                      <button className="w-[110px] h-[30px]">
                        <span className="text-[13px] flex bg-yellow-400 items-center h-full font-semibold w-full justify-center ">
                          Add To Cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="quick-access absolute top-8 group-hover:right-4  -right-10 flex flex-col space-y-2 transition-all ease-in-out duration-300">
                  <a href="exact-product">
                    <span className=" bg-gray-100 w-10 h-10 flex items-center justify-center rounded-md">
                      <span className="material-icons">zoom_out_map</span>
                    </span>
                  </a>
                  <a href="wish-list">
                    <span className=" bg-gray-100 w-10 h-10 flex items-center justify-center rounded-md">
                      <span className="material-icons">favorite_border</span>
                    </span>
                  </a>
                  <a href="add-product">
                    <span className=" bg-gray-100 w-10 h-10 flex items-center justify-center rounded-md">
                      <span className="material-icons">shopping_cart</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="item w-full">
              <div
                data-aos="fade-left"
                className="w-full h-[250px] bg-white group relative overflow-hidden"
              >
                <div className="flex items-center space-x-5 w-full h-full lg:p-[30px] sm:p-5 p-2">
                  <div className="h-full lg:w-1/2 w-1/3">
                    <Image
                      src={mobile}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex-1 flex justify-center flex-col h-full">
                    <div>
                      <div className="star flex space-x-1 mb-3">
                        <span className="material-icons text-yellow-400 text-xl">
                          star
                        </span>
                        <span className="material-icons text-yellow-400 text-xl">
                          star
                        </span>
                        <span className="material-icons text-yellow-400 text-xl">
                          star
                        </span>
                        <span className="material-icons text-yellow-400 text-xl">
                          star
                        </span>
                      </div>
                      <a href="#top-selling">
                        <p className="mb-2 sm:text-base text-[13px] font-semibold text-black leading-6 hover:text-blue-600 line-clamp-2">
                          Xoggle aute et pariatur adipisicing nostrud et
                          excepteur
                        </p>
                      </a>
                      <p className="price mb-[26px]">
                        <span className="text-gray-500 font-semibold text-xl line-through">
                          $27.27
                        </span>
                        <span className="text-red-500 ml-3 font-semibold text-xl">
                          $18.27
                        </span>
                      </p>
                      <button className="w-[110px] h-[30px]">
                        <span className="text-[13px] flex bg-yellow-400 items-center h-full font-semibold w-full justify-center ">
                          Add To Cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="quick-access absolute top-8 group-hover:right-4  -right-10 flex flex-col space-y-2 transition-all ease-in-out duration-300">
                  <a href="exact-product">
                    <span className=" bg-gray-100 w-10 h-10 flex items-center justify-center rounded-md">
                      <span className="material-icons">zoom_out_map</span>
                    </span>
                  </a>
                  <a href="wish-list">
                    <span className=" bg-gray-100 w-10 h-10 flex items-center justify-center rounded-md">
                      <span className="material-icons">favorite_border</span>
                    </span>
                  </a>
                  <a href="add-product">
                    <span className=" bg-gray-100 w-10 h-10 flex items-center justify-center rounded-md">
                      <span className="material-icons">shopping_cart</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="item w-full">
              <div
                data-aos="fade-left"
                className="w-full h-[250px] bg-white group relative overflow-hidden"
              >
                <div className="flex items-center space-x-5 w-full h-full lg:p-[30px] sm:p-5 p-2">
                  <div className="h-full lg:w-1/2 w-1/3">
                    <Image
                      src={pankeh}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex-1 flex justify-center flex-col h-full">
                    <div>
                      <div className="star flex space-x-1 mb-3">
                        <span className="material-icons text-yellow-400 text-xl">
                          star
                        </span>
                        <span className="material-icons text-yellow-400 text-xl">
                          star
                        </span>
                        <span className="material-icons text-yellow-400 text-xl">
                          star
                        </span>
                        <span className="material-icons text-yellow-400 text-xl">
                          star
                        </span>
                      </div>
                      <a href="#top-selling">
                        <p className="mb-2 sm:text-base text-[13px] font-semibold text-black leading-6 hover:text-blue-600 line-clamp-2">
                          Xoggle aute et pariatur adipisicing nostrud et
                          excepteur
                        </p>
                      </a>
                      <p className="price mb-[26px]">
                        <span className="text-gray-500 font-semibold text-xl line-through">
                          $27.27
                        </span>
                        <span className="text-red-500 ml-3 font-semibold text-xl">
                          $18.27
                        </span>
                      </p>
                      <button className="w-[110px] h-[30px]">
                        <span className="text-[13px] flex bg-yellow-400 items-center h-full font-semibold w-full justify-center ">
                          Add To Cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="quick-access absolute top-8 group-hover:right-4  -right-10 flex flex-col space-y-2 transition-all ease-in-out duration-300">
                  <a href="exact-product">
                    <span className=" bg-gray-100 w-10 h-10 flex items-center justify-center rounded-md">
                      <span className="material-icons">zoom_out_map</span>
                    </span>
                  </a>
                  <a href="wish-list">
                    <span className=" bg-gray-100 w-10 h-10 flex items-center justify-center rounded-md">
                      <span className="material-icons">favorite_border</span>
                    </span>
                  </a>
                  <a href="add-product">
                    <span className=" bg-gray-100 w-10 h-10 flex items-center justify-center rounded-md">
                      <span className="material-icons">shopping_cart</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="item w-full">
              <div
                data-aos="fade-left"
                className="w-full h-[250px] bg-white group relative overflow-hidden"
              >
                <div className="flex items-center space-x-5 w-full h-full lg:p-[30px] sm:p-5 p-2">
                  <div className="h-full lg:w-1/2 w-1/3">
                    <Image
                      src={bokhar}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex-1 flex justify-center flex-col h-full">
                    <div>
                      <div className="star flex space-x-1 mb-3">
                        <span className="material-icons text-yellow-400 text-xl">
                          star
                        </span>
                        <span className="material-icons text-yellow-400 text-xl">
                          star
                        </span>
                        <span className="material-icons text-yellow-400 text-xl">
                          star
                        </span>
                        <span className="material-icons text-yellow-400 text-xl">
                          star
                        </span>
                      </div>
                      <a href="#top-selling">
                        <p className="mb-2 sm:text-base text-[13px] font-semibold text-black leading-6 hover:text-blue-600 line-clamp-2">
                          Xoggle aute et pariatur adipisicing nostrud et
                          excepteur
                        </p>
                      </a>
                      <p className="price mb-[26px]">
                        <span className="text-gray-500 font-semibold text-xl line-through">
                          $27.27
                        </span>
                        <span className="text-red-500 ml-3 font-semibold text-xl">
                          $18.27
                        </span>
                      </p>
                      <button className="w-[110px] h-[30px]">
                        <span className="text-[13px] flex bg-yellow-400 items-center h-full font-semibold w-full justify-center ">
                          Add To Cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="quick-access absolute top-8 group-hover:right-4  -right-10 flex flex-col space-y-2 transition-all ease-in-out duration-300">
                  <a href="exact-product">
                    <span className=" bg-gray-100 w-10 h-10 flex items-center justify-center rounded-md">
                      <span className="material-icons">zoom_out_map</span>
                    </span>
                  </a>
                  <a href="wish-list">
                    <span className=" bg-gray-100 w-10 h-10 flex items-center justify-center rounded-md">
                      <span className="material-icons">favorite_border</span>
                    </span>
                  </a>
                  <a href="add-product">
                    <span className=" bg-gray-100 w-10 h-10 flex items-center justify-center rounded-md">
                      <span className="material-icons">shopping_cart</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSelling;

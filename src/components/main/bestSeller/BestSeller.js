import Image from "next/image";
import React from "react";
import ShopnoDb from "../../../../public/assets/bestSeller/saller-1.png";
import EecomsShop from "../../../../public/assets/bestSeller/saller-2.png";
import FusionX from "../../../../public/assets/bestSeller/saller-3.png";
import RikayiRox from "../../../../public/assets/bestSeller/saller-4.png";
import Habbriyi from "../../../../public/assets/bestSeller/saller-5.png";
import Rayhans from "../../../../public/assets/bestSeller/saller-6.png";
const BestSeller = () => {
  return (
    <div className="bestSeller-section w-full mb-[60px]">
      <div className="container-x mx-auto">
        <div className="bestSeller-title flex items-center justify-between mb-5">
          <div>
            <h1 className="text-black text-3xl font-semibold leading-none">
              Best Seller
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
        <div className="bestSeller-content">
          <div className="w-full">
            <div className="grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 xl:space-x-[30px] gap-5">
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                className="item w-full flex flex-col items-center"
              >
                <div className="h-[170px] w-[170px] bg-white rounded-full flex justify-center items-center overflow-hidden mb-2">
                  <Image src={ShopnoDb} />
                </div>
                <a href="#best-seller">
                  <p className="text-base text-center">Shopno Bd</p>
                </a>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="400"
                className="item w-full flex flex-col items-center"
              >
                <div className="h-[170px] w-[170px] bg-white rounded-full flex justify-center items-center overflow-hidden mb-2">
                  <Image src={EecomsShop} />
                </div>
                <a href="#best-seller">
                  <p className="text-base text-center">Eecoms Shop</p>
                </a>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="300"
                className="item w-full flex flex-col items-center"
              >
                <div className="h-[170px] w-[170px] bg-white rounded-full flex justify-center items-center overflow-hidden mb-2">
                  <Image src={FusionX} />
                </div>
                <a href="#best-seller">
                  <p className="text-base text-center">Fusion X</p>
                </a>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="200"
                className="item w-full flex flex-col items-center"
              >
                <div className="h-[170px] w-[170px] bg-white rounded-full flex justify-center items-center overflow-hidden mb-2">
                  <Image src={RikayiRox} />
                </div>
                <a href="#best-seller">
                  <p className="text-base text-center">Rikayi Rox</p>
                </a>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="100"
                className="item w-full flex flex-col items-center"
              >
                <div className="h-[170px] w-[170px] bg-white rounded-full flex justify-center items-center overflow-hidden mb-2">
                  <Image src={Habbriyi} />
                </div>
                <a href="#best-seller">
                  <p className="text-base text-center">Habbriyi</p>
                </a>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="100"
                className="item w-full flex flex-col items-center"
              >
                <div className="h-[170px] w-[170px] bg-white rounded-full flex justify-center items-center overflow-hidden mb-2">
                  <Image src={Rayhans} />
                </div>
                <a href="#best-seller">
                  <p className="text-base text-center">Rayhans</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;

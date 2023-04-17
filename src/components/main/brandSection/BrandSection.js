import Image from "next/image";
import React from "react";
import Xhiaomi from "../../../../public/assets/brands/xiaomi.png";
import Apple from "../../../../public/assets/brands/apple.png";
import Huawei from "../../../../public/assets/brands/huawei.png";
import Lg from "../../../../public/assets/brands/lg.jpg";
import Microsoft from "../../../../public/assets/brands/microsoft.png";
import Samsung from "../../../../public/assets/brands/samsung.jpg";
import Google from "../../../../public/assets/brands/google.png";
import Lenovo from "../../../../public/assets/brands/lenovo.png";
import OnePlus from "../../../../public/assets/brands/one+.png";
import Tesla from "../../../../public/assets/brands/tesla.png";
const BrandSection = () => {
  return (
    <div data-aos="fade-up" className="w-full mb-[60px]">
      <div className="container-x mx-auto">
        <div className="section-title flex items-center justify-between mb-5">
          <div>
            <h1 className="text-black text-3xl font-semibold  ">
              Shop by Brand
            </h1>
          </div>
        </div>
        <div className="section-detaile grid grid-cols-6">
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-gray-100 flex justify-center items-center">
              <Image src={Xhiaomi} />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-gray-100 flex justify-center items-center">
              <Image src={Apple} />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-gray-100 flex justify-center items-center">
              <Image src={Samsung} />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-gray-100 flex justify-center items-center">
              <Image src={Huawei} />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-gray-100 flex justify-center items-center">
              <Image src={Microsoft} />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-gray-100 flex justify-center items-center">
              <Image src={Lg} className="h-[130px]" />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-gray-100 flex justify-center items-center">
              <Image src={Tesla} />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-gray-100 flex justify-center items-center">
              <Image src={Samsung} />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-gray-100 flex justify-center items-center">
              <Image src={OnePlus} />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-gray-100 flex justify-center items-center">
              <Image src={Google} />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-gray-100 flex justify-center items-center">
              <Image src={Samsung} />
            </div>
          </div>
          <div className="item">
            <div className="w-full h-[130px] bg-white border border-gray-100 flex justify-center items-center">
              <Image src={Lenovo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;

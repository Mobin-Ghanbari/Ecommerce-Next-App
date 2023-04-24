import ThumbNail from "@/components/singleProduct/ThumbNail";
import Image from "next/image";
import React from "react";

const p = () => {
  return (
    <div className="w-full py-0">
      <div className="product-wrapper w-full">
        <div className="product-view bg-white pt-[30px] w-full">
          <div className="product-name w-full">
            <div className="container-x mx-auto">
              <div className="font-[13px] text-black mb-[23px]">
                <span>
                  <a href="/home">
                    <span className="mx-1 capitalize">Home</span>
                  </a>
                  <span>/</span>
                </span>
                <span>
                  <a href="/product">
                    <span className="mx-1 capitalize">product</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="product-view w-full bg-white pb-[60px]">
            <div className="container-x mx-auto">
              <div className="w-full lg:flex justify-between">
                <div
                  data-aos="fade-right"
                  className="lg:w-1/2 xl:mr-[70px] lg:mr-[50px] "
                >
                  <ThumbNail />
                </div>
                <div className="flex-1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-description"></div>
        <div className="related-product"></div>
      </div>
    </div>
  );
};

export default p;

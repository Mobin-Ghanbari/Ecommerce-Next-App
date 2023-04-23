import Image from "next/image";
import React from "react";
import Product1 from "../../public/assets/single-product/product-details-1.png";
import Product2 from "../../public/assets/single-product/product-details-2.png";
import Product3 from "../../public/assets/single-product/product-details-3.png";
import Product4 from "../../public/assets/single-product/product-details-4.png";
import Product5 from "../../public/assets/single-product/product-details-5.png";
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
                  <div className="w-full">
                    <div className="w-full h-[600px] border border-gray-200 flex justify-center items-center overflow-hidden mb-3 relative">
                      <Image
                        layout="fixed"
                        objectFit="contain"
                        src={Product1}
                      />
                      <div className="h-[80px] w-[80px] rounded-full  bg-yellow-400 text-black text-xl font-medium flex items-center justify-center absolute  top-[30px] left-[30px]">
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="item h-[110p] w-[110px] p-[15px]  border border-gray-200 cursor-pointer">
                        <Image
                          layout="fixed"
                          objectFit="contain"
                          src={Product1}
                        />
                      </div>
                      <div className="item h-[110p] w-[110px] p-[15px]  border border-gray-200 cursor-pointer">
                        <Image
                          layout="fixed"
                          objectFit="contain"
                          src={Product2}
                        />
                      </div>
                      <div className="item h-[110p] w-[110px] p-[15px]  border border-gray-200 cursor-pointer">
                        <Image
                          layout="fixed"
                          objectFit="contain"
                          src={Product3}
                        />
                      </div>
                      <div className="item h-[110p] w-[110px] p-[15px]  border border-gray-200 cursor-pointer">
                        <Image
                          layout="fixed"
                          objectFit="contain"
                          src={Product4}
                        />
                      </div>
                      <div
                        onClick={(e) => console.log(e)}
                        className="item h-[110p] w-[110px] p-[15px]  border border-gray-200 cursor-pointer"
                      >
                        <Image
                          layout="fixed"
                          objectFit="contain"
                          src={Product5}
                        />
                      </div>
                    </div>
                  </div>
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

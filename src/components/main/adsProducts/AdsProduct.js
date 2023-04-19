import Image from "next/image";
import React from "react";
import Ads1 from "../../../../public/assets/Ads/ads-1.png";
import Ads2 from "../../../../public/assets/Ads/ads-2.png";
const AdsProduct = () => {
  return (
    <div className="Ads-section w-full mb-[60px]">
      <div className="container-x mx-auto">
        <div className="sm:h-[295px] h-full sm:flex xl:space-x-[30px] sm:space-x-5 items-center overflow-hidden w-full">
          <div
            data-aos="fade-right"
            className="h-full w-full sm:mb-0 mb-5 sm:w-1/2"
          >
            <a href="#ads">
              <Image src={Ads1} className="sm:h-full h-auto w-full" />
            </a>
          </div>
          <div data-aos="fade-left" className="flex-1 h-full">
            <a href="#ads2">
              <Image src={Ads2} className="w-full h-full" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsProduct;

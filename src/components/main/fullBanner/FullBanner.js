import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Samsung from "../../../../public/assets/fullBanner/banner-1.png";
import AppleWatch from "../../../../public/assets/fullBanner/apple-whatch.png";
import Xbox from "../../../../public/assets/fullBanner/xbox5.png";
import Services from "./Services";

const FullBanner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full mb-[60px]">
      <div className="container-x mx-auto">
        <div className="wrapper">
          <div className="full-banner h-[600px] flex justify-between mb-8">
            <div data-aos="fade-right" className="left-banner w-[740px] h-full">
              <a href="#samsung">
                <picture>
                  <Image src={Samsung} />
                </picture>
              </a>
            </div>
            <div
              data-aos="fade-left"
              className="right-banner flex flex-col space-y-[30px] h-full"
            >
              <div className="w-full h-1/2">
                <a>
                  <Image src={AppleWatch} />
                </a>
              </div>
              <div className="w-full h-1/2">
                <a>
                  <Image src={Xbox} />
                </a>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="services bg-white flex  flex-row px-10 h-[110px] items-center justify-between w-full"
          >
            <Services />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBanner;

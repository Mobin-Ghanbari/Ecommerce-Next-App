import Image from "next/image";
import React from "react";
import watch from "../../../../public/assets/Ads/ads-watch.png";
const AdsProduct2 = () => {
  return (
    <div className="watch-ads w-full mb-[60px]">
      <div className="container-x mx-auto">
        <div className="w-full overflow-hidden">
          <div data-aos="fade-right" className="w-full h-full sm:mb-0 mb-5">
            <a href="#watch-ad">
              <Image src={watch} className="h-auto sm:h-full w-full" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsProduct2;

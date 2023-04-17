import Image from "next/image";
import React from "react";
import CountDownTimer from "./CountDownTimer";
import GooglePlay from "../../../../public/assets/countDown-sale/google-play.png";
import AppleStore from "../../../../public/assets/countDown-sale/apple-store.png";
import AppScreen from "../../../../public/assets/countDown-sale/app-screen.png";
const CountDownSale = () => {
  return (
    <div>
      <div className="w-full h-[460px] mb-[60px]">
        <div className="container-x mx-auto h-full">
          <div className="flex space-x-[30px] justify-between h-full">
            <div
              data-aos="fade-right"
              className="countDown w-1/2 h-full countDown-background"
            >
              <a href="#countDown">
                <div className="w-full xl:p-12 p-5">
                  <CountDownTimer />
                  <div className="countDown-title mb-4">
                    <h1 className="font-semibold text-[44px] text-black">
                      WOO! Flash Sale
                    </h1>
                  </div>
                  <div className="shop-now inline-flex items-center space-x-1 border-b border-b-yellow-500">
                    <span className="text-sm font-semibold tracking-wide leading-7">
                      Shop Now
                    </span>
                    <span className="material-icons text-xl ">
                      chevron_right
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div
              data-aos="fade-left"
              className="flex-1 download-app lg:h-full h-[430px] xl:p-12 p-5 download-app-background"
            >
              <div className="flex flex-col h-full justify-between">
                <div className="get-app">
                  <p className="text-[13px] font-semibold text-black mb-3">
                    MOBILE APP VERSION
                  </p>
                  <h1 className="font-semibold text-[30px] text-black leading-10 mb-8">
                    Get Our
                    <span className="text-red-600 border-b-2 border-b-red-600 mx-2">
                      Mobile App
                    </span>
                    <br />
                    It’s Make easy for you life !
                  </h1>
                  <div className="flex space-x-5 items-center">
                    <div>
                      <a href="#google-play">
                        <Image src={GooglePlay} width="170" height="69" />
                      </a>
                    </div>
                    <div>
                      <a href="#app-store">
                        <Image src={AppleStore} width="170" height="69" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="app-screen">
                  <Image src={AppScreen} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownSale;

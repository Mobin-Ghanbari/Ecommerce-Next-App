import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/logo.svg";
import instagram from "../../../public/assets/footer/icons8-instagram-32.png";
import telegram from "../../../public/assets/footer/icons8-telegram-50.png";
import whatsApp from "../../../public/assets/footer/icons8-whatsapp-30.png";
import payment from "../../../public/assets/footer/payment-getways.png";
const Footer = () => {
  return (
    <footer className="footer-section w-full print:hidden">
      <div className="container-x mx-auto block pt-[56px]">
        <div className="w-full flex flex-col items-center mb-[50px]">
          <div className="mb-[40px]">
            <a href="/">
              <Image height="36" width="152" src={logo} alt="logo" />
            </a>
          </div>
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
        <div className="lg:flex justify-between mb-[50px]">
          <div className="lg:w-[424px] ml-0 mb-10 w-full lg:mb-0 ">
            <h1 className="text-[16px] font-medium text-neutral-700 mb-5">
              Aboute Us
            </h1>
            <p className="text-[15px] w-[247px] leading-[28px] text-gray-500">
              We know there are a lot of threa developers our but we pride into
              a firm in the industry.
            </p>
          </div>
          <div className="flex-1 lg:flex">
            <div className="lg:w-1/3 w-full mb-10 lg:mb-0">
              <div className="mb-5">
                <h6 className="text-[16px] font-medium text-neutral-700">
                  Feature
                </h6>
              </div>
              <div>
                <ul className="flex flex-col space-y-4">
                  <li>
                    <a href="/about">
                      <span className="text-[15px] text-gray-500 hover:text-black border-b border-transparent  hover:border-black capitalize cursor-pointer ">
                        About Us
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/terms">
                      <span className="text-[15px] text-gray-500 hover:text-black border-b border-transparent  hover:border-black capitalize cursor-pointer ">
                        Terms Condition
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/bestProduct">
                      <span className="text-[15px] text-gray-500 hover:text-black border-b border-transparent  hover:border-black capitalize cursor-pointer ">
                        Best Products
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/3 w-full mb-10 lg:flex lg:flex-col lg:mb-0 items-center">
              <div>
                <div className="mb-5">
                  <h6 className="text-[16px] font-medium text-neutral-700">
                    General Links
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4">
                    <li>
                      <a href="/about">
                        <span className="text-[15px] text-gray-500 hover:text-black border-b border-transparent  hover:border-black capitalize cursor-pointer ">
                          Blog
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/terms">
                        <span className="text-[15px] text-gray-500 hover:text-black border-b border-transparent  hover:border-black capitalize cursor-pointer ">
                          Tracking Order
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/bestProduct">
                        <span className="text-[15px] text-gray-500 hover:text-black border-b border-transparent  hover:border-black capitalize cursor-pointer ">
                          Become Seller
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full mb-10 lg:flex lg:flex-col lg:mb-0 items-center">
              <div>
                <div className="mb-5">
                  <h6 className="text-[16px] font-medium text-neutral-700">
                    Helpful
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4">
                    <li>
                      <a href="/about">
                        <span className="text-[15px] text-gray-500 hover:text-black border-b border-transparent  hover:border-black capitalize cursor-pointer ">
                          Flash Sale
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/terms">
                        <span className="text-[15px] text-gray-500 hover:text-black border-b border-transparent  hover:border-black capitalize cursor-pointer ">
                          FAQ
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/bestProduct">
                        <span className="text-[15px] text-gray-500 hover:text-black border-b border-transparent  hover:border-black capitalize cursor-pointer ">
                          Support
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 lg:h-[82px] lg:flex justify-between items-center">
          <div className="flex lg:space-x-5 justify-between items-center mb-3">
            <div className="flex space-x-5 items-center">
              <a href="#insta">
                <Image width="24" height="24" src={instagram} />
              </a>
              <a href="#telegram">
                <Image width="20" height="20" src={telegram} />
              </a>
              <a href="#whatsApp">
                <Image width="20" height="20" src={whatsApp} />
              </a>
            </div>
            <span className="sm:text-base text-[10px] text-gray-800 font-light">
              ©2022
              <a href="/" className="mx-1 text-black font-normal">
                mobin._.gh
              </a>
              All rights reserved
            </span>
          </div>
          <div>
            <a href="#payment">
              <Image width="318" height="28" src={payment} alt="payment" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

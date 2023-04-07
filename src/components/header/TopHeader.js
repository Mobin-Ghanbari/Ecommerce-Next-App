import React, { useState } from "react";
import Image from "Next/image";
import Iran from "../../../public/assets/flags/iran.png";
import English from "../../../public/assets/flags/united-states.png";
const TopHeader = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  return (
    <div className="w-full text-xs font-medium h-10 border-b">
      <div className=" container-x items-center mx-auto h-full ">
        <div className="flex justify-between items-center h-full">
          <div className="topBar-nav">
            <ul className="flex space-x-6">
              <li>
                <a>
                  <span>Account</span>
                </a>
              </li>
              <li>
                <a>
                  <span>Track Order</span>
                </a>
              </li>
              <li>
                <a>
                  <span>Support</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-6 ">
            <div>
              <div className="relative  text-left flex items-center pl-1 hover:bg-slate-100  hover:rounded-lg transition-all duration-700">
                <i className="material-icons text-base mr-1 text-slate-700">
                  language
                </i>
                <button
                  className="w-full text-xs  font-medium   "
                  onClick={() => setLanguageDropdown((prev) => !prev)}
                >
                  Language
                </button>
                <i className="material-icons text-base">expand_more</i>
              </div>
              {languageDropdown ? (
                <div className="absolute  right-72 z-10 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                  <div className="py-1 hover:bg-gray-50 ">
                    <div className=" flex justify-around items-center ">
                      <Image
                        src={English}
                        alt="England flag"
                        className="w-4 h-5 ml-1"
                      />

                      <a
                        href="#"
                        className="text-gray-700  px-4 py-2 text-xs"
                        role="menuitem"
                      >
                        English
                      </a>
                    </div>
                  </div>
                  <div className="py-1 flex justify-around hover:bg-gray-50">
                    <Image src={Iran} width={28} height={28} alt="Iran flag" />
                    <a
                      href="#"
                      className="text-gray-700  px-4 py-2 text-xs"
                      role="menuitem"
                    >
                      Persian
                    </a>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div>
              <div
                className={`relative px-1  text-left flex items-center hover:bg-slate-100  hover:rounded-lg transition-all duration-700 `}
              >
                <button
                  className="w-full text-xs  font-medium "
                  onClick={() => setLanguageDropdown((prev) => !prev)}
                >
                  Theme
                </button>
                <i className="material-icons text-base">expand_more</i>
              </div>

              <div
                className={`absolute ${
                  !languageDropdown ? "hidden" : "visible"
                } transition-all ease-in-out duration-700 right-36 z-10 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              >
                <div className="py-1 hover:bg-gray-50 ">
                  <div className=" flex justify-around items-center">
                    <a
                      href="#"
                      className="text-gray-700  px-4 py-2 text-xs"
                      role="menuitem"
                    >
                      English
                    </a>
                  </div>
                </div>
                <div className="py-1 flex justify-around hover:bg-gray-50">
                  <a
                    href="#"
                    className="text-gray-700  px-4 py-2 text-xs"
                    role="menuitem"
                  >
                    Persian
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

export default TopHeader;

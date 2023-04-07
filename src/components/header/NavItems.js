import React from "react";

const NavItems = () => {
  return (
    <div className="nav">
      <ul className="flex space-x-10 items-center">
        <li className="relative group">
          <span className="flex items-center font-semibold text-sm text-black cursor-pointer">
            <span>Homepage</span>
            <span className="material-icons text-base ml-1.5">expand_more</span>
          </span>
          <div className="absolute  h-[50px] w-[220px] top-[43px] opacity-0 invisible pointer-events-auto transition-all duration-500 ease-in-out  group-hover:visible group-hover:opacity-100 group-hover:pointer-events-none:">
            <div className="w-full justify-between bg-white items-center shadow-2xl ">
              <div className="category-wrapper w-full h-full p-5">
                <div>
                  <div className="items">
                    <ul className="flex flex-col space-y-2">
                      <li>
                        <a href="#samsung">
                          <span className="text-gray-800 font-normal text-sm border-b border-transparent hover:border-b-yellow-500 hover:text-yellow-500 ">
                            samsung
                          </span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span className="text-gray-800 font-normal text-sm border-b border-transparent hover:border-b-yellow-500 hover:text-yellow-500 ">
                            samsung
                          </span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span className="text-gray-800 font-normal text-sm border-b border-transparent hover:border-b-yellow-500 hover:text-yellow-500 ">
                            samsung
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="relative">
          <span className="flex items-center font-semibold text-sm text-black cursor-pointer">
            <span>Pages</span>
            <span className="material-icons text-base ml-1.5">expand_more</span>
          </span>
        </li>
        <li className="relative">
          <span className="flex items-center font-semibold text-sm text-black cursor-pointer">
            <span>Shop</span>
            <span className="material-icons text-base ml-1.5">expand_more</span>
          </span>
        </li>
        <li>
          <a href="#Aboute">
            <span className="flex items-center font-semibold text-sm text-black cursor-pointer">
              About
            </span>
          </a>
        </li>
        <li>
          <a href="#Contact">
            <span className="flex items-center font-semibold text-sm text-black cursor-pointer">
              Contact
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;

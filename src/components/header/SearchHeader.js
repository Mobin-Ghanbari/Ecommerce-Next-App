import React from "react";
import SearchBox from "./SearchBox";

const SearchHeader = () => {
  return (
    <div className="w-full h-[86px]">
      <div className="container-x mx-auto h-full">
        <div className="flex justify-between h-full items-center">
          <div>logo</div>
          <div className="w-[517px] h-[44px]">
            <SearchBox />
          </div>
          <div className="icons flex space-x-6 items-center pr-0.5">
            <div className="wishList relative">
              <a href="#wishList">
                <span class="material-icons">favorite_border</span>
              </a>
              <span className="w-[18px] h-[18px] rounded-full bg-yellow-500 absolute flex text-[9px] justify-center items-center -top-2 left-4">
                2
              </span>
            </div>
            <div className="basket relative">
              <a href="#basket">
                <span class="material-icons">shopping_cart</span>
              </a>
              <span className="w-[18px] h-[18px] rounded-full bg-yellow-500 absolute flex text-[9px] justify-center items-center -top-2 left-4 ">
                2
              </span>
            </div>
            <div className="user">
              <a href="#user">
                <span class="material-icons">person_outline</span>
              </a>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;

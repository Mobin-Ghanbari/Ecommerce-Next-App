import React from "react";
import AllCategories from "./AllCategories";
import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <div className="w-full relative h-[60px] z-30 bg-yellow-500">
      <div className="container-x h-full mx-auto">
        <div className="h-full w-full relative">
          <div className="w-full h-full flex justify-between items-center">
            <div className="category-and-nave flex items-center space-x-7 ">
              <AllCategories />
              <NavItems />
            </div>
            <div className="become-seller">
              <a href="#become-seller">
                <div className="bg-black text-white h-[40px] w-[161px] flex justify-center items-center">
                  <div className="flex space-x-2 text-sm font-semibold items-center">
                    <span className="text-sm ">Become a Seller</span>
                    <span className="material-icons text-base pt-1">
                      navigate_next
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

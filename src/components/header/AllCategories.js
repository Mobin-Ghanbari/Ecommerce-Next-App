import React, { useState } from "react";

const AllCategories = () => {
  const [allCategorybtn, setAllCategorybtn] = useState(false);
  return (
    <div className="category w-[270px] h-[53px] bg-white mt-[6px] px-5 relative rounded-t-md flex ">
      <button
        type="button"
        className="flex justify-between items-center w-full h-ful"
        onClick={() => setAllCategorybtn((prev) => !prev)}
      >
        <div className="flex space-x-3 items-center">
          <span className="material-icons text-sm">sort</span>
          <span className="font-semibold text-sm text-black">
            All Categories
          </span>
        </div>
        <div>
          <span className="material-icons text-base">expand_more</span>
        </div>
      </button>

      <div
        className={`category-dropdown transition-all duration-500 ease-in-out absolute bg-white overflow-hidden w-full ${
          allCategorybtn ? "h-[200px] shadow-sm" : "h-0"
        } left-0 top-[53px]`}
      >
        <ul className="divide-y">
          <li className="border-t">
            <a>
              <div className="flex justify-between items-center px-5 h-10  transition-all duration-300 ease-in-out text-black cursor-pointer  hover:bg-yellow-500">
                <div className="flex items-center space-x-6 ">
                  <span className="material-icons text-base text-gray-700">
                    sports_soccer
                  </span>
                  <span className="text-sm text-gray-700">Sport</span>
                </div>
                <div>
                  <span className="material-icons text-base">
                    chevron_right
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a>
              <div className="flex justify-between items-center px-5 h-10  transition-all duration-300 ease-in-out text-black cursor-pointer  hover:bg-yellow-500">
                <div className="flex items-center space-x-6 ">
                  <span className="material-icons text-base text-gray-700">
                    sports_soccer
                  </span>
                  <span className="text-sm text-gray-700">Sport</span>
                </div>
                <div>
                  <span className="material-icons text-base">
                    chevron_right
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a>
              <div className="flex justify-between items-center px-5 h-10  transition-all duration-300 ease-in-out text-black cursor-pointer  hover:bg-yellow-500">
                <div className="flex items-center space-x-6 ">
                  <span className="material-icons text-base text-gray-700">
                    sports_soccer
                  </span>
                  <span className="text-sm text-gray-700">Sport</span>
                </div>
                <div>
                  <span className="material-icons text-base">
                    chevron_right
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a>
              <div className="flex justify-between items-center px-5 h-10  transition-all duration-300 ease-in-out text-black cursor-pointer  hover:bg-yellow-500">
                <div className="flex items-center space-x-6 ">
                  <span className="material-icons text-base text-gray-700">
                    sports_soccer
                  </span>
                  <span className="text-sm text-gray-700">Sport</span>
                </div>
                <div>
                  <span className="material-icons text-base">
                    chevron_right
                  </span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AllCategories;

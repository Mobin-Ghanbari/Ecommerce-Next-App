import React from "react";

const SearchBox = () => {
  return (
    <div className="w-full h-full flex items-center border divide-x">
      <div className="search-product h-full flex-1">
        <form className="h-full">
          <input
            type="text"
            placeholder="Search in milions Product..."
            className="h-full font-medium text-xs text-center w-full  leading-4 focus:outline-0"
          />
        </form>
      </div>
      <button className="w-[93px] text-sm h-full font-semibold bg-yellow-500">
        Search
      </button>
    </div>
  );
};

export default SearchBox;

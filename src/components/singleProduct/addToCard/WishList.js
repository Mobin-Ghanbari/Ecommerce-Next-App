import React from "react";

const WishList = () => {
  return (
    <div className="w-[60px] h-full flex justify-center items-center border border-gray-300">
      <button type="button">
        <span className="material-icons text-gray-200 text-3xl">
          favorite_border
        </span>
      </button>
    </div>
  );
};

export default WishList;

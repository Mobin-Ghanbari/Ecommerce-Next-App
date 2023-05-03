import React, { useEffect, useState } from "react";

const SizeDropDown = () => {
  const options = ["Small", "Medium", "Large", "Extra Large"];

  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  useEffect(() => {
    const handlerClose = () => setShowDropDown(false);
    window.addEventListener("click", handlerClose);

    return () => {
      window.removeEventListener("click", handlerClose);
    };
  });

  const handleClick = (e) => {
    e.stopPropagation();
    setShowDropDown((prev) => !prev);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue;
    }
    return "Small";
  };

  const onItemClick = (option) => {
    setSelectedValue(option);
  };

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue === option;
  };
  return (
    <div className="w-full">
      <div className="border border-gray-200 h-[50px] flex justify-between items-center px-6 cursor-pointer">
        <div className="relative w-full font-[14px] ">
          <button
            type="button"
            className="w-full flex justify-between"
            onClick={handleClick}
          >
            <div>
              <span className="text-[13px] text-black">{getDisplay()}</span>
            </div>
            <div className="flex space-x-10 items-center">
              <span className="text-[13px] text-black">3”W x 3”D x 7”H</span>
              <span className="material-icons text-2xl">expand_more</span>
            </div>
          </button>
          <div
            className={`product-size-close ${
              showDropDown && "product-size-open"
            }`}
          >
            <ul className="size-list">
              {options.map((option, idx) => (
                <div
                  onClick={() => onItemClick(option)}
                  className={`${
                    isSelected(option) && "bg-gray-300 font-bold "
                  }`}
                  key={idx}
                >
                  {option}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeDropDown;

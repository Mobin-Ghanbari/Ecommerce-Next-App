import React, { useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="w-[120px] px-[26px] flex  items-center h-full border border-gray-200">
      <div className="w-full flex justify-between items-center">
        <button type="button" className="text-base text-gray-600">
          -
        </button>
        <span className="text-black">{quantity}</span>
        <button type="button" className="text-base text-gray-500">
          +
        </button>
      </div>
    </div>
  );
};

export default Quantity;

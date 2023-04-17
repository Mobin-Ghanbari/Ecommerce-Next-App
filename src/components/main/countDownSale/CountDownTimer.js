import React from "react";

const CountDownTimer = () => {
  return (
    <div className="countDown-time w-full flex justify-between mb-10">
      <div className="item-day">
        <div className="sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
          <span className="font-bold sm:text-[30px] text-[14px] text-red-500">
            0
          </span>
        </div>
        <p className="sm:text-[18px] text-[12px] text-center leading-8 font-medium">
          Days
        </p>
      </div>
      <div className="item-houre">
        <div className="sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
          <span className="font-bold sm:text-[30px] text-[14px] text-blue-600">
            0
          </span>
        </div>
        <p className="sm:text-[18px] text-[12px] text-center leading-8 font-medium">
          Houres
        </p>
      </div>
      <div className="item-minute">
        <div className="sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
          <span className="font-bold sm:text-[30px] text-[14px] text-green-600">
            0
          </span>
        </div>
        <p className="sm:text-[18px] text-[12px] text-center leading-8 font-medium">
          Minutes
        </p>
      </div>
      <div className="item-second">
        <div className="sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
          <span className="font-bold sm:text-[30px] text-[14px] text-pink-500">
            0
          </span>
        </div>
        <p className="sm:text-[18px] text-[12px] text-center leading-8 font-medium">
          Seconds
        </p>
      </div>
    </div>
  );
};

export default CountDownTimer;

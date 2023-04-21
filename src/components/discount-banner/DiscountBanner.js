import React from "react";

const DiscountBanner = () => {
  return (
    <div className="discount-banner w-full h-[307px] flex justify-center items-center">
      <div>
        <div data-aos="fade-up" className="discount-title">
          <h1 className="sm:text-3xl text-xl font-bold text-center text-black mb-2">
            Get<span className="mx-1 text-yellow-500">20%</span>Off Discount
            Coupon
          </h1>
          <p className="text-center sm:text-[18px] text-sm">
            by Subscribe our Newsletter
          </p>
        </div>
        <div
          data-aos="fade-right"
          className="flex sm:w-[543px] w-[300px] h-[54px] mt-8"
        >
          <div className="flex-1 pl-4 space-x-2 flex items-center bg-white h-full focus-within:text-yellow-400 text-black">
            <span className="material-icons text-xl">mail_outline</span>

            <input
              type="email"
              name="email"
              className="h-full w-full text-sm focus:outline-none placeholder:text-xs placeholder:text-black tracking-wider "
              placeholder="EMAIL ADDRESS"
            />
          </div>
          <button
            type="button"
            className="sm:w-[158px] w-[80px] h-full  bg-yellow-500 text-sm font-semibold"
          >
            Get the Coupon
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;

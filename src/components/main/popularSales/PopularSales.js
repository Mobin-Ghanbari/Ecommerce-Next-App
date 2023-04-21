import Image from "next/image";
import React from "react";
import { col1, col2, col3 } from "./Product";

const PopularSales = () => {
  const Col1 = col1();
  const Col2 = col2();
  const Col3 = col3();
  return (
    <div className="popular-Sales-section w-full mb-[60px]">
      <div className="wrapper w-full">
        <div className="container-x mx-auto">
          <div className="popularSales-title flex items-center justify-between mb-5">
            <div>
              <h1 className="text-black text-3xl font-semibold leading-none">
                Popular Sales
              </h1>
            </div>
            <div>
              <a href="#new-arrivals">
                <div className="flex items-center space-x-2">
                  <p className="text-black text-base font-semibold">
                    View More
                  </p>
                  <span className="material-icons animate-bounce-right ">
                    east
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="popularSales-content">
            <div className="w-full">
              <div className="grid lg:grid-cols-3 grid-cols-1 xl:gap-[30px] lg:gap-5">
                <div className="items">{Col1}</div>
                <div className="items">{Col2}</div>
                <div className="items">{Col3}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSales;

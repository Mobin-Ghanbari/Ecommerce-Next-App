import React from "react";
import BrandSection from "../main/brandSection/BrandSection";
import GamerProduct from "../main/categoryProduct/GamerProduct";
import CountDownSale from "../main/countDownSale/CountDownSale";
import FullBanner from "../main/fullBanner/FullBanner";
import TopSelling from "../main/topSelling/TopSelling";

const mainContent = () => {
  return (
    <div className="w-full pt-8 pb-16 bg-slate-50">
      <FullBanner />
      <GamerProduct />
      <BrandSection />
      <CountDownSale />
      <TopSelling />
    </div>
  );
};

export default mainContent;

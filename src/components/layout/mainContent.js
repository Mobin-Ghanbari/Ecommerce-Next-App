import React from "react";
import AdsProduct from "../main/adsProducts/AdsProduct";
import BestSeller from "../main/bestSeller/BestSeller";
import BrandSection from "../main/brandSection/BrandSection";
import GamerProduct from "../main/gameProduct/GamerProduct";
import CountDownSale from "../main/countDownSale/CountDownSale";
import FullBanner from "../main/fullBanner/FullBanner";
import NewArrivals from "../main/newArrival/NewArrivals";
import TopSelling from "../main/topSelling/TopSelling";
import AdsProduct2 from "../main/adsProducts/AdsProduct2";
import PopularSales from "../main/popularSales/PopularSales";

const mainContent = () => {
  return (
    <div className="w-full pt-8 pb-16 bg-slate-50">
      <FullBanner />
      <GamerProduct />
      <BrandSection />
      <CountDownSale />
      <TopSelling />
      <BestSeller />
      <AdsProduct />
      <NewArrivals />
      <AdsProduct2 />
      <PopularSales />
    </div>
  );
};

export default mainContent;

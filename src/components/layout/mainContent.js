import React from "react";
import GamerProduct from "../main/categoryProduct/GamerProduct";
import FullBanner from "../main/fullBanner/FullBanner";

const mainContent = () => {
  return (
    <div className="w-full pt-8 pb-16 bg-slate-50">
      <FullBanner />
      <GamerProduct />
    </div>
  );
};

export default mainContent;

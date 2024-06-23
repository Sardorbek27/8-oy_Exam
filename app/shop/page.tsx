
import HeroProduct from "@/components/HeroCarusel/HeroProduct";
import React from "react";

const Shop = () => {
  return(
    <div className="container">
      <div>
      <p className="font-bold text-[17px] mt-[100px] leading-[16px] text-[#46A358]">Releted Products</p>
      <div className="w-[1200px] bg-[#46A358] opacity-30 h-[1px] mt-[12px]"></div>
        <HeroProduct/>
      
    </div>
      </div>
  ) 
};

export default Shop;

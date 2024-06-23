"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./HeroProduct.css";

import { Pagination, Autoplay } from "swiper/modules";
import { CustomImage } from "../CustomImage";

interface HeroProductType {
  id: number;
  text: string;
  price: string;
  id2: number;
  text2: string;
  price2: string;
  id3: number;
  text3: string;
  price3: string;
  id4: number;
  text4: string;
  price4: string;
  id5: number;
  text5: string;
  price5: string;
}

export default function HeroProduct() {
  const heroData = [
    {
      id: 1,
      text: "Beach Spider Lily",
      price:"$129.00",
    
    
      id2: 2,
      text2: "Blushing Bromeliad",
      price2:"$139.00",
    
    
      id3: 3,
      text3: "Aluminum Plant",
      price3:"$179.00",
    
    
      id4: 4,
        text4: "Bird's Nest Fern",
        price4:"$99.00",
      
      
        id5: 5,
        text5: "Chinese Evergreen",
        price5:"$39.00",
    },
    {
        id: 6,
        text: "Beach Spider Lily",
        price:"$129.00",
      
      
        id2: 7,
        text2: "Blushing Bromeliad",
        price2:"$139.00",
      
      
        id3: 8,
        text3: "Aluminum Plant",
        price3:"$179.00",
      
      
        id4: 9,
          text4: "Bird's Nest Fern",
          price4:"$99.00",
        
        
          id5: 10,
          text5: "Chinese Evergreen",
          price5:"$39.00",
      },
      {
        id: 11,
        text: "Beach Spider Lily",
        price:"$129.00",
      
      
        id2: 12,
        text2: "Blushing Bromeliad",
        price2:"$139.00",
      
      
        id3: 13,
        text3: "Aluminum Plant",
        price3:"$179.00",
      
      
        id4: 14,
          text4: "Bird's Nest Fern",
          price4:"$99.00",
        
        
          id5: 15,
          text5: "Chinese Evergreen",
          price5:"$39.00",
      },
  ];

  return (
    <>
      <div className="hidden md:block">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {heroData.map((item: HeroProductType) => (
            <SwiperSlide key={item.id} className="pt-[68px] pb-[85px] Swipper">
              <div className="flex justify-center items-center gap-[30px]">
                    <div className="bg-[#FBFBFB] w-[219px] h-[255px] pt-3">
                    <CustomImage alt="" height={243} width={190} src={"/image 6.png"}/>
                    <p className="mt-[12px] font-normal text-[15px] leading-[16px]">
                    {item.text}
                    </p>
                    <p className="text-[#46A358] text-[16px] leading-[16px] font-bold mt-[5px]">
                    {item.price}
                    </p>
                    </div>
                    <div className="bg-[#FBFBFB] w-[219px] h-[255px] pt-3">
                    <CustomImage alt="" height={243} width={190} src={"/image 7.png"}/>
                    <p className="mt-[12px] font-normal text-[15px] leading-[16px]">
                    {item.text2}
                    </p>
                    <p className="text-[#46A358] text-[16px] leading-[16px] font-bold mt-[5px]">
                    {item.price2}
                    </p>
                    </div>
                    <div className="bg-[#FBFBFB] w-[219px] h-[255px] pt-3">
                    <CustomImage alt="" height={243} width={190} src={"/image 8.png"}/>
                    <p className="mt-[12px] font-normal text-[15px] leading-[16px]">
                    {item.text3}
                    </p>
                    <p className="text-[#46A358] text-[16px] leading-[16px] font-bold mt-[5px]">
                    {item.price3}
                    </p>
                    </div>
                    <div className="bg-[#FBFBFB] w-[219px] h-[255px] pt-3">
                    <CustomImage alt="" height={243} width={190} src={"/image 9.png"}/>
                    <p className="mt-[12px] font-normal text-[15px] leading-[16px]">
                    {item.text4}
                    </p>
                    <p className="text-[#46A358] text-[16px] leading-[16px] font-bold mt-[5px]">
                    {item.price4}
                    </p>
                    </div>
                    <div className="bg-[#FBFBFB] w-[219px] h-[255px] pt-3">
                    <CustomImage alt="" height={243} width={190} src={"/image 10.png"}/>
                    <p className="mt-[12px] font-normal text-[15px] leading-[16px]">
                    {item.text5}
                    </p>
                    <p className="text-[#46A358] text-[16px] leading-[16px] font-bold mt-[5px]">
                    {item.price5}
                    </p>
                    </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

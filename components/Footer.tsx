
import Image from "next/image";
import React from "react";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-white pl-[px] container hidden md:block">
      <div className="flex items-center justify-between gap-x-[60px] mt-[100px] bg-[#FBFBFB]">
        <div className="text-center md:text-left border-r-[1px] border-[#46a3594e] pl-[23px] pt-[25px]">
          <Image src="/garden.svg" alt="icon" width={64} height={64} />
          <h4 className="font-bold text-lg mt-4">Garden Care</h4>
          <p className="text-sm text-gray-600 mt-2 w-[230px] pr-[26px] pb-[24px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="text-center md:text-left border-r-[1px] border-[#46a3594e]  pt-[25px]">
          <Image src="/plant.svg" alt="icon" width={64} height={64} />
          <h4 className="font-bold text-lg mt-4">Plant Renovation</h4>
          <p className="text-sm text-gray-600 mt-2 w-[230px] pr-[26px] pb-[24px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="text-center md:text-left  pt-[25px]">
          <Image src="/watering.svg" alt="icon" width={64} height={64} />
          <h4 className="font-bold text-lg mt-4">Watering Garden</h4>
          <p className="text-sm text-gray-600 mt-2 w-[204px] pb-[24px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg mt-4 whitespace-nowrap">
            Would you like to join newsletters?
          </h4>
          <div className="flex mt-4 shadow rounded-[6px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-2 rounded-[6px] outline-none"
            />
            <button className="bg-[#4EA75F] cursor-pointer text-white p-2 rounded-r-md w-[85px] hover:opacity-75">
              Join
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-2 pb-[24px]">
            We usually post offers and challenges in newsletters. We’re your
            online houseplant destination.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-start space-x-4 bg-[#46a3592d] p-4">
        <Image
          src="/logo-icon.svg"
          alt="greenshop logo"
          width={64}
          height={64}
          />
        <div className="flex flex-col md:flex-row md:space-x-4">
          <p className="flex items-center text-sm text-gray-600">
            <EnvironmentOutlined className="mr-2" />
            70 West Buckingham Ave., Farmingdale, NY 11735
          </p>
          <p className="flex items-center text-sm text-gray-600">
            <MailOutlined className="mr-2" />
            contact@greenshop.com
          </p>
          <p className="flex items-center text-sm text-gray-600">
            <PhoneOutlined className="mr-2" />
            +88 01911 717 490
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8  bg-[#FBFBFB]  ">
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg pl-[23px] pt-[33px]">My Account</h4>
          <ul className="mt-4 space-y-2">
            <li className="text-sm text-gray-600 pl-[23px]">My Account</li>
            <li className="text-sm text-gray-600 pl-[23px]">Our stores</li>
            <li className="text-sm text-gray-600 pl-[23px]">Contact us</li>
            <li className="text-sm text-gray-600 pl-[23px]">Career</li>
            <li className="text-sm text-gray-600 pl-[23px]">Specials</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg pt-[33px]">Help & Guide</h4>
          <ul className="mt-4 space-y-2">
            <li className="text-sm text-gray-600 ">Help Center</li>
            <li className="text-sm text-gray-600">How to Buy</li>
            <li className="text-sm text-gray-600">Shipping & Delivery</li>
            <li className="text-sm text-gray-600">Product Policy</li>
            <li className="text-sm text-gray-600">How to Return</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg pt-[33px]">Categories</h4>
          <ul className="mt-4 space-y-2">
            <li className="text-sm text-gray-600">House Plants</li>
            <li className="text-sm text-gray-600">Potter Plants</li>
            <li className="text-sm text-gray-600">Seeds</li>
            <li className="text-sm text-gray-600">Small Plants</li>
            <li className="text-sm text-gray-600 pb-[29px]">Accessories</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-bold text-lg pt-[33px]">Social Media</h4>
          <div className="flex mt-4 space-x-4 justify-center md:justify-start">
            <button className="hover:bg-green-200 cursor-pointer">
              <Image className="" src="/facebok.svg" alt="facebook" width={32} height={32} />
            </button>
            <button className="hover:bg-green-200 cursor-pointer">
              <Image className="" src="/insta.svg" alt="instagram" width={32} height={32} />
            </button>
            <button className="hover:bg-green-200 cursor-pointer">
              <Image className="" src="/twitter.svg" alt="twitter" width={32} height={32} />
            </button>
            <button className="hover:bg-green-200 cursor-pointer">
              <Image className="" src="/ln.svg" alt="linkedin" width={32} height={32} />
            </button>
            <button className="hover:bg-green-200 cursor-pointer">
              <Image className="" src="/union.svg" alt="youtube" width={32} height={32} />
            </button>
          </div>
          <h4 className="font-bold text-lg mt-6">We accept</h4>
          <div className="flex mt-4 space-x-4 justify-center md:justify-start">
            <Image src="/paypal.png" alt="paypal" width={50} height={32} />
            <Image
              src="/masterCard.png"
              alt="mastercard"
              width={50}
              height={32}
              />
            <Image src="/visa.png" alt="visa" width={50} height={32} />
            <Image
              src="/american.svg"
              alt="americanexpress"
              width={50}
              height={32}
              />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 my-8 mt-[-0.1px]"></div>
      <div className="text-center text-sm text-gray-600 mt-[-20px]">
        © 2021 GreenShop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
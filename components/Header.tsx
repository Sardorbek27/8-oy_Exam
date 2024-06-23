"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEventHandler, useEffect, useState, useContext } from "react";
import { Navbar } from "./Navbar";
import Modal from "./Modal/Modal";
import {
  SearchIcon,
  OrderBasket,
  LoginIcon,
  HamburgerButtonIcon,
  GoogleIcon,
  FacebookIcon,
} from "@/assets/icon";
import { Button } from "./Button";
import { usePathname } from "next/navigation";
import { InputCustom } from "./Input";
import { Badge, Input } from "antd";
import axios from "axios";
import { URL } from "@/service/resquest";
import { Toaster, toast } from "react-hot-toast";
import { Context } from "@/context/context";


interface LinkType {
  id: number;
  title: string;
  path: string;
  isActive: boolean;
}
const Header = () => {
  const token = window.localStorage.getItem("token")
  const pathname = usePathname();
  const {basketContextList} = useContext(Context)

  

  const navList = [
    {
      id: 1,
      title: "Home",
      path: "/",
      isActive: pathname == "/" ? true : false,
    },
    {
      id: 2,
      title: "Shop",
      path: "/shop",
      isActive: pathname == "/shop" ? true : false,
    },
    {
      id: 3,
      title: "Plant Care",
      path: "/plant",
      isActive: pathname == "/plant" ? true : false,
    },
    {
      id: 4,
      title: "Blogs",
      path: "/blogs",
      isActive: pathname == "/blogs" ? true : false,
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const modalClose = () => setIsModalOpen(false);
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleSearchChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value == "") {
      setTimeout(() => {
        setShowSearchInput(false);
      }, 2000);
    }
  };

  const closeModal = (e:React.MouseEvent) => {
    if((e.target as HTMLButtonElement).id == "modal-wrapper")
    setOpenModal(false)
  }


const [isModal, setIsModal] = useState<string>("Login")


//============= LOGIN MODAL START ====================//

const [loginEmail, setLoginEmail] = useState<string>("")
const [loginPassword, setLoginPassword] = useState<string>("")
const loginModalClick = () => {
  const data = {
    password: loginPassword,
    usernameoremail: loginEmail
  }
  try{
    axios.post(`${URL}/login`, data).then(res => {
      window.localStorage.setItem("token", res.data.access_token)
      toast.success("Login Successful " + res.data.first_name)
      setIsModalOpen(false)
      setLoginEmail("")
      setLoginPassword("")
    })
  }
  catch(err) {
    console.log(err)
  }
}

//============= LOGIN MODAL END ====================//


//============= REGISTER MODAL START ====================//

const [registerEmail, setRegisterEmail] = useState<string>("")
const [registerFirstName, setRegisterFirstName] = useState<string>("")
const [registerLastName, setRegisterLastName] = useState<string>("")
const [registerPassword, setRegisterPassword] = useState<string>("")
const registerModalClick = () => {
  const data = {
    email:registerEmail,
    firstName:registerFirstName,
    lastName:registerLastName,
    password:registerPassword
  }
  try{
    axios.post(`${URL}/register`, data).then(res => {
      setIsModal("registerVerify")
      setLoginEmail(registerEmail)
    })
  }
  catch(err) {
    console.log(err)
  }
}

//============= REGISTER MODAL END ====================//



//============= FORGOT LOGIN START ====================//

const [forgotLoginEmail, setForgotLoginEmail] = useState<string>("")
const forgotBtnClick = () => {
  axios.post(`${URL}/forgot/${forgotLoginEmail}`).then(res =>{
    setIsModal("forgotVerify");
  }) 
}

//============= FORGOT LOGIN END ====================//



//============= FORGOT OTP START ====================//

const [forgotOTPCode, setForgotOTPCode] = useState<string>("")
const forgotOTPBtnClick = () => {
  axios.post(`${URL}/verify`, {}, {
    params: {
      email:forgotLoginEmail,
      otp:forgotOTPCode
    }
  }).then(res =>{
    setLoginEmail(forgotLoginEmail);
    setIsModal("newLoginCreate")
  }) 
}

//============= FORGOT OTP END ====================//
 



//============= RESET PASSWORD START ====================//

const [resetPassword,setResetPassword] = useState<string>("")
const resetButtonClick = () => {
  const data = {
    email:forgotLoginEmail,
    new_password:resetPassword,
    otp:forgotOTPCode
  }
  axios.put(`${URL}/reset-password`, data).then(res =>{
    setLoginEmail(forgotLoginEmail);
    setIsModal("Login")
  }) 
}


//============= RESET PASSWORD END ====================//




//============= REGISTER VERIFY START ====================//


const [registerOTPCode, setRegisterOTPCode] = useState<string>("")
const registerVerifyBtnClick = () => {
  const data = {
    email:registerEmail,
    code:registerOTPCode
  }
  try{
    axios.post(`${URL}/users/verify`, {}, {
      params:data
    }).then(res => {
      setIsModal("Login")
      setRegisterEmail("")
      setRegisterFirstName("")
      setRegisterLastName("")
      setRegisterPassword("")
    })
  }
  catch(err) {
    console.log(err)
  }
}

//============= REGISTER VERIFY END ====================//




  return (
    <header className="pt-[42px] fixed top-0 w-full bg-white z-[2] md:pt-[25px]">
    <Toaster position='top-center' reverseOrder={false} />
      <div className="container md:border-b-[1px] gap-[8px] md:gap-0 border-[#A2D0AB] px-[24px] md:px-0 flex items-center justify-between">
        <Link className="hidden md:block pb-[17px]" href={"/"}>
          <Image
            src={"/site-logo.svg"}
            width={150}
            height={34}
            alt="site-logo"
            priority={true}
          />
        </Link>
        <Navbar />
        <div className="hidden md:flex items-center space-x-[30px] pb-[11px]">
          <button
            className="flex items-center"
            onClick={() => setShowSearchInput(true)}
          >
            {!showSearchInput && <SearchIcon />}
            <input
              onChange={handleSearchChangeInput}
              className={`${
                showSearchInput ? "py-[14px] pl-[41px] w-[300px]" : "w-[0px]"
              } search-input duration-300 outline-none focus:shadow text-[14px] font-normal leading-[16px] bg-[#F8F8F8] rounded-[10px] `}
              type="text"
              placeholder="Find your plants"
              autoComplete="off"
              aria-label="Find your plants"
              name="plants-search"
            />
          </button>
          <Badge style={{color:"white", backgroundColor:"#46A358"}} size='small' count={basketContextList?.length}>
              <Link href={`/shop/order`}>
                <OrderBasket />
              </Link>
          </Badge>
          <Button
            onClick={() => setIsModalOpen(true)}
            bgBtn={false}
            title="Login"
            iconPosition="prev"
            icon={<LoginIcon />}
            buttonWidth={100}
          />
        </div>
        <input
          className="block md:hidden  py-[14px] pl-[41px] w-[90%]
         search-input duration-300 outline-none focus:shadow text-[14px] font-normal leading-[16px] bg-[#F8F8F8] rounded-[10px]"
          type="text"
          placeholder="Find your plants"
          autoComplete="off"
          aria-label="Find your plants"
          name="plants-search"
        />
        <button onClick={() => setOpenModal(true)} className="md:hidden w-[45px] h-[45px] bg-[#46A258] rounded-[14px] shadow flex items-center justify-center opacity-90">
          <HamburgerButtonIcon />
        </button>
      </div>
      <div onClick={closeModal} id="modal-wrapper" className={` ${openModal ? "left-0" : "left-[-100%]"} modal duration-500 fixed top-0 z-[2] backdrop-blur-md  h-[100vh] w-full `}>   
      <div className={` md:hidden absolute w-[80%] h-[100vh]  bg-[#46A258] opacity-90 duration-500  ${openModal ? "right-0" : "right-[-200%]"} p-10 flex flex-col space-y-5`}>
          {navList.map((item:LinkType) => (
            <Link
            onClick={() => setOpenModal(false)}
            className={`font-normal
            pb-[31px] text-[16px] leading-[20px] text-white`}
            key={item.id}
            href={item.path}
          >
            {item.title}
          </Link>
          ))}
        </div>
      </div>
        <div className="pt-5 pb-5 ">
          <Modal isOpen={isModalOpen} onClose={modalClose}>
            <div className=" Modal-scroll ">
            <div>
              <ul className="flex cursor-pointer items-center space-x-3 justify-center text-[22px] font-semibold">
                <li className={`${isModal == "Login" ? "text-[#46A358]" : ""} mt-[-30px]`} onClick={() => setIsModal("Login")}>
                  Login
                </li>
                <li className=" mt-[-30px] w-[2px] h-[30px] bg-black"></li>
                <li className={`${isModal == "Register" ? "text-[#46A358]" : ""} mt-[-30px]`} onClick={() => setIsModal("Register")}>
                  Register
                </li>
              </ul>
            </div>
            {isModal == "Login" &&
            <div className="text-center">
              <p className=" text-[#3D3D3D] mt-[53px] font-normal text-[13px] leading-[16px] items-center flex justify-center">Enter your username and password to login.</p>
              <InputCustom value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="almamun_uxui@outlook.com"  type="email" />
              <InputCustom value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="***********" type="password"/>
              <div className="flex justify-end items-end pr-[40px]">
                <Button onClick={() => setIsModal("forgotEmail")} bgBtn={true} title="Forgot Password?" buttonWidth={236}/>
              </div>
              <div className="mt-[27px] items-center flex justify-center">
              <Button onClick={loginModalClick} bgBtn={false} title="Login" buttonWidth ={300} />
              </div>
              <div className="flex justify-between gap-[10px] ">
              <div className="w-[101px] h-[2px]  bg-[#EAEAEA] mt-[55px] ml-[90px]"></div>
              <p className="mt-[46px] text-[12px] ">Or login with</p>
              <div className="w-[101px] h-[2px] bg-[#EAEAEA] mt-[55px] mr-[90px] "></div>
              </div>
              <div className="mt-[40px] flex justify-center items-center"> 
              <Button bgBtn={false} title="Login with Google" buttonWidth={300} icon={<GoogleIcon/>} iconPosition="prev"/>
              </div>
              <div className="mt-[30px] flex justify-center ite">
              <Button bgBtn={false} title="Login with Facebook" buttonWidth={300} icon={<FacebookIcon/>} iconPosition="prev"/>
              </div>
              
            </div>
            }

            {isModal == "Register" &&
            <div className="text-center">
              <p className=" text-[#3D3D3D] mt-[40px] font-normal text-[13px] leading-[16px] items-center flex justify-center">Enter your email and password to register.</p>
              <InputCustom value={registerFirstName} onChange={(e) => setRegisterFirstName(e.target.value)} placeholder="First Name" type="text"/>
              <InputCustom value={registerLastName} onChange={(e) => setRegisterLastName(e.target.value)} placeholder="Last Name" type="text"/>
              <InputCustom value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} placeholder="Enter your email address" type="email"/>
              <InputCustom value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} placeholder="Password" type="password"/>
              <InputCustom placeholder="Confirm Password" type="confirm password"/>
              <div className="mt-[41px] items-center flex justify-center">
              <Button onClick={registerModalClick} bgBtn={false} title="Register" buttonWidth ={300} />
              </div>
              <div className="flex justify-between gap-[10px] ">
              <div className="w-[101px] h-[2px]  bg-[#EAEAEA] mt-[55px] ml-[90px]"></div>
              <p className="mt-[46px] text-[12px] ">Or login with</p>
              <div className="w-[101px] h-[2px] bg-[#EAEAEA] mt-[55px] mr-[90px] "></div>
              </div>
              <div className="mt-[40px] flex justify-center items-center"> 
              <Button bgBtn={false} title="Login with Google" buttonWidth={300} icon={<GoogleIcon/>} iconPosition="prev"/>
              </div>
              <div className="mt-[30px] flex justify-center ite">
              <Button bgBtn={false} title="Login with Facebook" buttonWidth={300} icon={<FacebookIcon/>} iconPosition="prev"/>
              </div>
            </div>
            }

            {isModal == "forgotEmail" &&
            <div className="flex flex-col items-center space-y-5 mt-[30px]">
              <InputCustom value={forgotLoginEmail} onChange={(e) => setForgotLoginEmail(e.target.value)} placeholder="Enter your email address" type="email"/>
              <Button onClick={forgotBtnClick} bgBtn={false} title="Send Code" buttonWidth ={300} />
            </div>
            }

            {isModal == "forgotVerify" &&
             <div className="flex flex-col items-center space-y-5 mt-[30px]">
                <Input.OTP value={forgotOTPCode} onChange={(e) => setForgotOTPCode(e)} length={6} size="large"/>
                <Button onClick={forgotOTPBtnClick} bgBtn={false} title="Enter Code" buttonWidth ={300} />
             </div>
            }

            {isModal == "newLoginCreate" &&
              <div className="flex flex-col items-center space-y-5 mt-[30px]">
              <Input value={resetPassword} onChange={(e) => setResetPassword(e.target.value)} placeholder="New Password" size="large"/>
              <Button onClick={resetButtonClick} bgBtn={false} title="Get New Password" buttonWidth ={300} />
           </div>
            }

            {isModal == "registerVerify" && 
            <div className="flex flex-col items-center space-y-5 mt-[30px]">
            <Input.OTP value={registerOTPCode} onChange={(e) => setRegisterOTPCode(e)} length={6} size="large"/>
            <Button onClick={registerVerifyBtnClick} bgBtn={false} title="Enter Code" buttonWidth ={300} />
          </div>
            }

            </div>
          </Modal>
        </div>
    </header>
  );
};

export default Header;





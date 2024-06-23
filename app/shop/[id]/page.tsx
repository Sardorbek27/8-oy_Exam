"use client"

import HeroProduct from '@/components/HeroCarusel/HeroProduct'
import { URL } from '@/service/resquest'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import LikeHeart from "../../../public/LikeHeart.svg";



const SinglePage = ({params}:any) => {
 const id = params.id
 const [singleData, setSingleData] = useState<any>([])
 const [mainImage, setMainImage] = useState<string>("")
 const [count, setCount] = useState<number>(1)

 useEffect(() => {
  axios.get(`${URL}/product/${id}`).then(res => {
    setSingleData(res.data);
    setMainImage(res.data.image_url[0])
    console.log(res.data)
  })
 },[])
 
  const handleChangePlus = () => {
      setCount(count + 1)
  }

  const handleChangeMinus = () => {
    if(count > 1) {
      setCount(count - 1)
    }
  }

  return (
      <div className="container">
      <div className='mt-[43px] flex gap-[52px]'>
        <div className='h-[444px] w-[573px] overflow-hidden flex justify-between'>
          <div className='w-[20%] h-[444px] overflow-y-auto cursor-pointer'>
            {singleData?.image_url?.map((item:any, index:number) => (
                <Image className='border-[1px] border-slate-400' onClick={() => setMainImage(item)} key={index} alt='Product Img' height={100} width={100} src={item} property='true'/> 
            ))}
          </div>
          <div className='w-[80%]'>
              <Image className='border-[1px] border-slate-400' alt='Product Img' height={444} width={444} src={mainImage} property="true"/> 
          </div>
    </div>
    <div>
       <p className='font-bold text-[28px] leading-[16px] text-[#3D3D3D]'>{singleData?.product_name}</p> 
       <p className='mt-[21px] text-[#46A358] font-bold text-[22px] leading-[16px]'>${singleData?.cost}</p>
       <div className="w-[573px] rounded-[0.3px] bg-[#46A358] opacity-30 h-[1px] mt-[13px]"></div>
        <h1 className='font-semibold text-[15px] mt-[15px] leading-[16px] text-[#3D3D3D]'>Short Description:</h1>
       <p className='mt-[10px] font-normal text-[14px] leading-[24px] text-[#727272] w-[573px]'>{singleData?.short_description}</p>
       <p className='mt-[24px] font-semibold text-[15px] leading-[16px] text-[#3D3D3D]'>Size:</p>
        <div className="border-[#46A358] flex items-center justify-center cursor-pointer w-[50px] h-[50px] rounded-[50%]  border-[2px] mt-[11px]"><p className='flex font-bold text-[14px] leading-[16px] text-[#46A358] p-5 mt-[5px] justify-center'>{singleData?.size}</p></div>
       <div className='flex items-center justify-start'>
        <div className="">
        <button onClick={handleChangeMinus} className='mt-[35px] w-[33px] h-[38px] bg-[#46A358] rounded-[29px] text-white text-center hover:opacity-75'>-</button>
        <span className='pl-[23px] font-normal text-[20px] leading-[10px] text-[#3D3D3D]'>{count}</span>
        <button onClick={handleChangePlus} className=' ml-[23px] w-[33px] h-[38px] bg-[#46A358] rounded-[29px] text-white text-center hover:opacity-75'>+</button>
        </div>
        <div className="flex items-center justify-center gap-[30px] ml-[50px]">
       
        <Link href="/shop/checkout"
        className='w-[150px] bg-gradient-to-t from-[#4EA75F] to-[#95cda0] py-3 px-4 rounded-md text-white font-bold text-center hover:opacity-75'>
          BUY NOW
      </Link> 

      <Link href="/shop/checkout"
 className='w-[150px] border-[2px] py-3 px-4 text-[#46a358] border-solid border-[#46a358] font-semibold rounded-md hover:opacity-75'>
          ADD TO CART
   
      </Link> 
              <button className=' hover:opacity-75'>
                <Image alt='Like Heart Btn' src={LikeHeart} width={50} height={50} />
              </button>
           
        </div>
       </div>
        </div>
        </div>
      <p className="font-bold text-[17px] mt-[100px] leading-[16px] text-[#46A358]">Releted Products</p>
      <div className="w-[1200px] bg-[#46A358] opacity-30 h-[1px] mt-[12px]"></div>
        <HeroProduct/>
      </div>
  )
}

export default SinglePage
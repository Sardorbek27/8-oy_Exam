"use client"
import React, { useState, useContext } from 'react'
import { CustomImage } from '../CustomImage'
import { LikeIcon, OrderBasket, SearchIcon } from '@/assets/icon';
import Link from 'next/link'
import axios from 'axios';
import { URL } from '@/service/resquest';
import { Toaster, toast } from 'react-hot-toast';
import { Context } from '@/context/context';


interface PlantProductsType{
    item:any;
    setRefresh:(value:boolean) => void;
    refresh:boolean;
  }
 export const Product:React.FC<PlantProductsType> = ({item, setRefresh, refresh}) => {
  const {refreshContext, setRefreshContext} = useContext(Context)

  // console.log(item.likedId)
  const handleLikedIdClick = (id:string) => {
    axios.post(`${URL}/like/${id}`, {}, {
      headers: {
        "Authorization" : "Bearer " + window.localStorage.getItem("token")
      }
    }).then(res => {
      console.log(res);
      
      setRefresh(!refresh)
      toast.success("Saved")
    })
  }

  const handleBasketIdClick = (id:string) => {
    axios.post(`${URL}/basket`,{
      productId: id,
    },{
      headers: {
        "Authorization" : "Bearer " + window.localStorage.getItem("token")
      }
    }).then(res => {
      setRefresh(!refresh)
      toast.success("Saved")
      setRefreshContext(!refreshContext)
      
    })
  }


  return (
    <div>     
    <li className='w-[258px] inline-block '>
      <Toaster position='top-center' reverseOrder={false} />
        <div className='bg-[#FBFBFB] overflow-hidden product-img-wrapper pt-[31px] pb-[19px] pl-[4px] pr-[4px] relative'>
        <Link href={`/shop/${item?.product_id}`}>
            <CustomImage src={item?.image_url[0]} alt='Product Image' width={250} height={250}/>
        </Link>
              <ul className='flex space-x-[10px] duration-300 absolute product-img-icons justify-center left-0 right-0 -bottom-[40px] mx-auto'>
                <li onClick={() => handleBasketIdClick(item.product_id)}  className={`w-[35px] h-[35px] bg-[#FFFFFF] rounded-md flex items-center justify-center cursor-pointer ${item.basket ? "text-[#46A358]" : ""}`}>
                  <OrderBasket/>
                </li>
                <li onClick={() => handleLikedIdClick(item.product_id)} className={`w-[35px] h-[35px] cursor-pointer   bg-[#FFFFFF] rounded-md flex items-center justify-center text-red-500 ${item.liked ? "text-red-500" : "text-slate-600"} `}>
                  <LikeIcon/>
                </li>
                <li className='w-[35px] h-[35px] bg-[#FFFFFF] rounded-md cursor-pointer flex items-center justify-center'>
                  <SearchIcon/>
                </li>
              </ul>
        </div>
    </li>
            <h2 className='text-[16px] leading-[16px] text-[#3D3D3D] mt-[12px] mb-[6px]'>{item.product_name}</h2>
            <p className='text-[#46A358] font-bold text-[18px] leading-[16px]'>$ {item.cost}</p>
    </div>
  )
}





// import React, { useState, useContext } from 'react';
// import { CustomImage } from '../CustomImage';
// import { LikeIcon, OrderBasket, SearchIcon } from '@/assets/icon';
// import Link from 'next/link';
// import axios from 'axios';
// import { URL } from '@/service/resquest';
// import { Toaster, toast } from 'react-hot-toast';
// import { Context } from '@/context/context';

// interface PlantProductsType {
//     item: any;
//     setRefresh: (value: boolean) => void;
//     refresh: boolean;
// }

// export const Product: React.FC<PlantProductsType> = ({ item, setRefresh, refresh }) => {
//     const { refreshContext, setRefreshContext } = useContext(Context);

//     const handleLikedIdClick = async (id: string) => {
//         const token = window.localStorage.getItem("token");
//         if (!token) {
//             toast.error("Unauthorized: No token found");
//             return;
//         }

//         try {
//             const res = await axios.post(`${URL}/like/${id}`, {}, {
//                 headers: {
//                     "Authorization": `Bearer ${token}`
//                 }
//             });
//             setRefresh(!refresh);
//             toast.success("Saved");
//         } catch (error) {
//             toast.error("Error liking the item");
//             console.error(error);
//         }
//     }

//     const handleBasketIdClick = async (id: string) => {
//         const token = window.localStorage.getItem("token");
//         if (!token) {
//             toast.error("Unauthorized: No token found");
//             return;
//         }

//         try {
//             const res = await axios.post(`${URL}/basket`, {
//                 productId: id,
//             }, {
//                 headers: {
//                     "Authorization": `Bearer ${token}`
//                 }
//             });
//             setRefresh(!refresh);
//             toast.success("Saved");
//             setRefreshContext(!refreshContext);
//         } catch (error) {
//             toast.error("Error adding to basket");
//             console.error(error);
//         }
//     }

//     return (
//         <div>
//             <li className='w-[258px] inline-block '>
//                 <Toaster position='top-center' reverseOrder={false} />
//                 <div className='bg-[#FBFBFB] overflow-hidden product-img-wrapper pt-[31px] pb-[19px] pl-[4px] pr-[4px] relative'>
//                     <Link href={`/shop/${item?.product_id}`}>
//                         <CustomImage src={item?.image_url[0]} alt='Product Image' width={250} height={250} />
//                     </Link>
//                     <ul className='flex space-x-[10px] duration-300 absolute product-img-icons justify-center left-0 right-0 -bottom-[40px] mx-auto'>
//                         <li onClick={() => handleBasketIdClick(item.product_id)} className={`w-[35px] h-[35px] bg-[#FFFFFF] rounded-md flex items-center justify-center cursor-pointer ${item.basket ? "text-[#46A358]" : ""}`}>
//                             <OrderBasket />
//                         </li>
//                         <li onClick={() => handleLikedIdClick(item.product_id)} className={`w-[35px] h-[35px] cursor-pointer bg-[#FFFFFF] rounded-md flex items-center justify-center text-red-500 ${item.liked ? "text-red-500" : "text-slate-600"}`}>
//                             <LikeIcon />
//                         </li>
//                         <li className='w-[35px] h-[35px] bg-[#FFFFFF] rounded-md cursor-pointer flex items-center justify-center'>
//                             <SearchIcon />
//                         </li>
//                     </ul>
//                 </div>
//             </li>
//             <h2 className='text-[16px] leading-[16px] text-[#3D3D3D] mt-[12px] mb-[6px]'>{item.product_name}</h2>
//             <p className='text-[#46A358] font-bold text-[18px] leading-[16px]'>$ {item.cost}</p>
//         </div>
//     );
// }

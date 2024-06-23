"use client"
import { usePathname } from 'next/navigation';
import React from 'react'

 const layout = ({children, params}:any) => {
  const pathname = usePathname();
  const id = params.id
  return (
    <div className='container'> 
      <p className="font-bold text-[15px]">Home / <span className="font-normal"> Shop {pathname.includes("order") ? "/ Shopping Cart" : ""} {pathname.includes("checkout") ? "/ Checkout" : ""}</span></p>
      {children}
    </div>
  )
}

export default layout


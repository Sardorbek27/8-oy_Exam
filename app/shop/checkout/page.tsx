
import React, { useState } from 'react';


const CheckOutPage = () => {
  return (
   <section className="section">
    <div className="container">
      <div className="">
        <form  className='flex items-start'>

        
        <div className="w-[35%] flex items-start justify-start flex-col">
            <label className="flex flex-col items-start justify-start w-[350px]" >
            First Name * 
            <input className=' mt-[7px] mb-[10px] w-[350px] py-[10px] px-4 border-[1px] border-solid border-gray-300 rounded-md' type="text" />
            </label>

            <label className="flex flex-col items-start justify-start w-[350px]" >
              Country / Region * 
              <select className=' mt-[7px] mb-[10px] w-[350px] py-[10px] px-4 border-[1px] border-solid border-gray-300 rounded-md' name="" id="">
                <option value="">Uzbekistan</option>
                <option value="">USA</option>
                <option value="">Russia</option>
                <option value="">Other Country ✔❔</option>
              </select>
            </label>

            <label className='flex flex-col items-start justify-start w-[350px]'>
                Adress * 
                <input className=' mt-[7px] mb-[10px] w-[350px] py-[10px] px-4 border-[1px] border-solid border-gray-300 rounded-md' type="text" />
            </label>

            <label className="flex flex-col items-start justify-start w-[350px]" >
              State * 
              <select className=' mt-[7px] mb-[10px] w-[350px] py-[10px] px-4 border-[1px] border-solid border-gray-300 rounded-md' name="" id="">
                  <option value="">Tashkent</option>
                  <option value="">Moscow</option>
                  <option value="">Almata</option>
                  <option value="">Other State ✔❔</option>
              </select>
            </label>

            <label className="flex flex-col items-start justify-start w-[350px]">
                Email address * 
                <input className=' mt-[7px] mb-[10px] w-[350px] py-[10px] px-4 border-[1px] border-solid border-gray-300 rounded-md' type="email" />
            </label>
          </div>








<div className="w-[35%] flex items-start justify-start flex-col">

          <label className="flex flex-col items-start justify-start w-[350px]">
          Last Name *
                <input className=' mt-[7px] mb-[14px] w-[350px] py-[10px] px-4 border-[1px] border-solid border-gray-300 rounded-md' type="text"  />
            </label>


            <label className="flex flex-col items-start justify-start w-[350px]">
            Town / City * 
                <input className=' mt-[7px] mb-[14px] w-[350px] py-[10px] px-4 border-[1px] border-solid border-gray-300 rounded-md' type="text"  />
            </label>


            <label className="flex flex-col items-start justify-start w-[350px]">
                Phone number * 
                <input className=' mt-[7px] mb-[14px] w-[350px] py-[10px] px-4 border-[1px] border-solid border-gray-300 rounded-md' type="text" placeholder='Appartment, suite, unit, etc. (optional)' />
            </label>


<label className="flex flex-col items-start justify-start w-[350px]">
      Zip * 
      <div className="relative mt-[7px] mb-[10px] w-[350px]">
        <input 
          type="file" 
          id="file" 
          className="hidden" 
        />
        <label 
          htmlFor="file" 
          className="bg-none py-[10px] px-4 border-[1px] border-solid border-gray-300 rounded-md cursor-pointer flex items-center justify-between w-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0l4 4m0 0l4-4m-4 4v12m4 0H7" />
          </svg>
        </label>
      </div>
    </label>

         

            <label className="flex flex-col items-start justify-start w-[350px]">
                Phone number * 
                <input className=' mt-[7px] mb-[14px] w-[350px] py-[10px] px-4 border-[1px] border-solid border-gray-300 rounded-md' type="number" />
            </label>


            </div>




          
        </form>
      </div>
      </div>
   </section>
  )
  
}

export default CheckOutPage


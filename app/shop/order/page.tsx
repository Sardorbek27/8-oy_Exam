"use client"
import HeroProduct from '@/components/HeroCarusel/HeroProduct'
import { URL } from '@/service/resquest'
import axios from 'axios'
import React,{useEffect, useState} from 'react'

const OrderPage = () => {
    const [basketOrder, setBasketOreder] = useState<any>([])
    useEffect(() => {
        axios.get(`${URL}/basket`, {
            params:{
                page:1,
                limit:100
            },
            headers:{
                "Authorization" : "Bearer " + window.localStorage.getItem("token")
        }}).then(response => {
            setBasketOreder(response.data.ProductId)
        })
    },[])
    console.log(basketOrder)
  return (
    <div> 
        Order page
        <HeroProduct/>
    </div>
  )
}

export default OrderPage
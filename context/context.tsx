"use client";
import { URL } from "@/service/resquest";
import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const Context = createContext<any>(null);

export const BasketContext = ({ children }: any) => {
  const token = window.localStorage.getItem("token")
  const [basketContextList, setBasketContextList] = useState<any>([]);
  const [refreshContext, setRefreshContext] = useState<boolean>(false)

  useEffect(() => {
    if(token){
      axios.get(`${URL}/basket`, {
        params: {
          page:1,
          limit:100
        },
        headers:{
          "Authorization" : "Bearer " + token
        }
      }).then(res => setBasketContextList(res.data.ProductId))
    }
  }, [refreshContext])
  return (
    <Context.Provider value={{ basketContextList, setBasketContextList, refreshContext, setRefreshContext }}>
      {children}
    </Context.Provider>
  );
};

import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

const ProductContext=createContext();



const ProductProvider=({children})=>{
    const[data,setData]=useState([])
    console.log("state",data)

    useEffect(()=>{
    const fetch=async()=>{
    const result= await axios("/api/products");
    console.log("result",result)
    setData(result.data.products)

     }
    fetch()},[])
    return(
        <ProductContext.Provider value={{data}}>
            {children}
        </ProductContext.Provider>
    )
}

const useProduct=()=>{
    return useContext(ProductContext)
}

export{useProduct,ProductProvider}
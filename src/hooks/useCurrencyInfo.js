import { useState, useEffect } from "react";

const api_key = "23743646b255e7cb5fdb784b"

 function useCurrencyInfo(currency) {
    const [data,setData]=useState({})
  
    useEffect(()=>{

      fetch(`https://v6.exchangerate-api.com/v6/23743646b255e7cb5fdb784b/latest/${currency}`)
    .then((res)=> res.json())
    .then((res)=>setData(res["conversion_rates"]))
    // console.log(data)
    },[currency])
  
  return data

}

export default useCurrencyInfo;

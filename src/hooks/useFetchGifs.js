import { useState,useEffect } from "react"
import { getgifs } from "../helpers/getgifs";
export const useFetchGifs=(category)=>{
    const [state, setstate] = useState({
        data:[],
        loading:true
    });
    useEffect(()=>{
        getgifs(category)
        .then(imgs=>{
            setTimeout(()=>{
                setstate({
                    data:imgs,
                    loading:false
                })
            },3000)
            
        })

    },[category])
   
    return state;
}
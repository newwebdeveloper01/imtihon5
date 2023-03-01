import React from 'react'
import { useState, useEffect } from 'react';
import { instanse } from '../api/instanse';
const useFetchData = (ENDPOINT) => {
    const [data , setData]= useState([]);
    const [isLoding, setIsLoding] =useState(false);
    useEffect( ()=>{
      
        setIsLoding(true);
        instanse.get(ENDPOINT)
        .then(response => {
            setData(response.data);
            setIsLoding(false);
        })
        .catch(err => {
            console.log(err);
            setIsLoding(false);
        }
            )
      }
       
    ,[])

    return [data, isLoding];
}

export default useFetchData
//example of useRef() function

import React, { useEffect,useState,useRef } from 'react'

export default function Some() {
    const count=useRef(0)
    const [data,setdata]=useState(0);
    useEffect(()=>{
            
        console.log(data);
        },[])
    function change(){
        setdata(data+1);
        console.log(count);
        count.current=count.current+1
    }

  return (
    <div >
        <button onClick={change}></button>Number of count={data}</div>
    
    )
}

import React from 'react';
import { useState,useContext } from "react";
import Axios from "axios";
import { AppContext } from "../App";
import{useQuery} from "@tanstack/react-query";
import {useMyHook} from './useMyHook';
export const Home=()=>{
    const [isVisible,myHook]=useMyHook();
    const [isVisible2,myHook2]=useMyHook();
    const {data,isLoading,isError,refetch}=useQuery(["cat"],()=>{
        return(Axios.get("https://catfact.ninja/fact").then((res)=>res.data));            
    });
    const {username} =useContext(AppContext);
    if(isLoading){return (<h1>Loading...</h1>);}
    if(isError){return(<h1>Error...</h1>);}

    
    return ( 
        <div>
            <h1>HomePage user: {username}</h1>
            <h3>{data?.fact}</h3>
            <button onClick={refetch}>Update</button>
            <hr/>
            <div>
                <button onClick={myHook}>{isVisible?'Hide':'Show'}</button>
                {isVisible&&<h1>Hidden Text1 is hire</h1>}
            </div>
            <div>
                <button onClick={myHook2}>{isVisible2?'Hide2':'Show2'}</button>
                {isVisible2&&<h1>Hidden Text2 is hire</h1>}
            </div>
        </div>
    );
}
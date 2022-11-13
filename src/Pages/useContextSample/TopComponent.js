import React, { useState,useContext, useEffect } from 'react';
import {MiddleComponent} from './MiddleComponent';
export const TopComponent=()=>{
    const [username,setUsername]=useState('Fatemeh');
    
    return (
        <MiddleComponent username={username}/>
    );

}
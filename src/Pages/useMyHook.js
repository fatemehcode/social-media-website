import { useState } from 'react';

export const useMyHook=(initialVal=false)=>{
    const [state,setState] =useState(initialVal);
    const myHook=()=>{setState((prev)=>!prev);}
    return([state,myHook]);
}
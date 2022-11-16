import {React,useState} from 'react';

const useCalc = (initval=0) => {
    const [num,setNum]=useState(0);
    const onIncrease=()=>{setNum((prev)=>prev+1)}
    const onDecrease=()=>{setNum((prev)=>prev-1)}
    const onReset=()=>{setNum(0)}
    
    return ({num,onIncrease, onDecrease,onReset});
};

export default useCalc;
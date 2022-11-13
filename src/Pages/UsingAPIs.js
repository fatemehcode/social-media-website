import React, { useState,useEffect} from 'react';
import Axios from 'axios';

export const UsingAPIs=()=>{
    
    
    
    const [name,setName]=useState("Fatemeh");
    const [predicted,setPredicted]=useState(null);    
    const fetchApi2=()=>{        
        Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
            console.log(res.data);
            setPredicted(res.data);            
        });        
    }


    const [list,setList]=useState([]);
    const apiUrl="https://catfact.ninja/fact";  
    const fetchApiData=()=>{        
        Axios.get(apiUrl).then((res)=>{
            console.log(res.data);
            setList([...list,res.data]);
        })
    }
   
    //useEffect(()=>{fetchApiData()},[]);   

    
    const [excuse,setExcuse]=useState("");
    const makeExcuse=(reason)=>{
            Axios.get(`https://excuser.herokuapp.com/v1/excuse/${reason}`)
            .then((res)=>{
            setExcuse(res.data[0].excuse);            
            });}
    return (        
        <div>
            <div>
                <h1>Cat Fact using Api</h1>            
                <button onClick={fetchApiData}>Add Cat Fact From Api</button>            
                {list.map((item)=>{return(<h4 key={item.fact}>{item.fact}--{item.length}</h4>);})}
            </div><hr/>
            
            <div>
                <h1>Prediction</h1>
                <input type="text"
                    placeholder='enter name' 
                    onChange={(event)=>{setName(event.target.value);}}/>
                <button onClick={fetchApi2}>Predict</button>
                <p>name:{predicted?.name}</p>
                <p>age:{predicted?.age}</p> 
                <p>count:{predicted?.count}</p>            
            </div><hr/>
            
            <div className='Generate an Excuse'>
                <h1>Generate an Excuse</h1>               
                <button onClick={()=>makeExcuse('party')}>Party</button>
                <button onClick={()=>makeExcuse('family')}>Family</button>
                <button onClick={()=>makeExcuse('office')}>Office</button>
                <p>{excuse}</p>
            </div>

        </div>
        
    );
 
};
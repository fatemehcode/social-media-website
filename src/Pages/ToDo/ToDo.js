import React, {useState} from 'react';
import {Task} from './Task';
export const ToDo=()=>{
    const [List,setList]=useState([]);
    const [newItem,setNewItem]=useState("");   

    const changeHandler=(event)=>{setNewItem(event.target.value);}
  
    
    const addItem=()=>{  
        const i={
                id:List.length===0?1:List[List.length-1].id+1,
                taskName:newItem,
                status:false                
            };
        setList([...List,i]);
    }

    const onDelete=(id)=>{setList(List.filter((item)=>item.id!==id));};

    const onEdit=(id)=>{       
        const selecteditem=List.filter((item)=>item.id===id);
        console.log(selecteditem);
    };

    const onComplete=(id)=>{   
        setList(List.map((i)=>{if(i.id===id){return({...i,status:true});}else return i;}));    
    };

   
    return ( 
    <div className='todo'>      
        <h1 className='projectName'>ToDo</h1>
        <div className='addTask' >
            <input type="text" placeholder="taskName" onChange={changeHandler}/><br/>
            <button onClick={addItem}>Add</button>        
        </div>
        <div className='Posts'>
            {List.map((item)=>{
                const id=item.id;
                return(
                    <Task 
                    key={id}
                    item={item}                    
                    onEdit={()=>onEdit(id)}
                    onDelete={()=>onDelete(id)}
                    onComplete={()=>onComplete(id)}
                    />                    
                );
            })}            
        </div>        
    </div> 
    );
}

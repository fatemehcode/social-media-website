import React, {useState} from 'react';
import {Post} from './Post';
export const Blog=()=>{
    const [List,setList]=useState([]);
    const [newItem,setNewItem]=useState("");   

    const changeHandler=(event)=>{setNewItem(event.target.value);}
  
    
    const addItem=()=>{  
        const i={
                id:List.length===0?1:List[List.length-1].id+1,
                title:newItem,
                body:'',
                AuthorId:1,
                
            };
        setList([...List,i]);
    }

    const onDelete=(id)=>{setList(List.filter((item)=>item.id!==id));};

    const onEdit=(id)=>{       
        const selecteditem=List.filter((item)=>item.id===id);
        console.log(selecteditem);
    };

   
    return ( 
    <div className='Blog'>      
        <h1 className='projectName'>Blog</h1>
        <div className='addPost' >
            <input type="text" placeholder="Post Title" onChange={changeHandler}/><br/>
            <button onClick={addItem}>Add</button>        
        </div>
        <div className='Posts'>
            {List.map((item)=>{
                const id=item.id;
                return(
                    <Post 
                    key={id}
                    item={item}                    
                    onEdit={()=>onEdit(id)}
                    onDelete={()=>onDelete(id)}
                    />                    
                );
            })}            
        </div>        
    </div> 
    );
}

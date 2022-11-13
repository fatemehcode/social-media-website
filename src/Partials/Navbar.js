import React from 'react';
import{Link} from 'react-router-dom';
export const Navbar=()=>{
    return (
        <div className='nav'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ToDo">ToDo</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/UsingAPIs">UsingAPIs</Link></li>       
                <li><Link to="/TopComponent">Using Context</Link></li>       
                
            </ul>
            <hr/>
           
        </div>
       
            
       
    );
}
import { useContext } from "react";
import {AppContext} from "../../App";
export const BottomComponent=()=>{ 
    const {username}=useContext(AppContext);  
    return (
        <div>
            <h1>hi {username} from bottom Context page</h1>            
        </div>
        
    );

}
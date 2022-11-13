import { useContext } from "react";
import Axios from "axios";
import { AppContext } from "../App";
import{useQuery} from "@tanstack/react-query";
export const Home=()=>{
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
        </div>
    );
}
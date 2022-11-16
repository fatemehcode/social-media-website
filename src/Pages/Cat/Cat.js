import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
export const Cat=()=>{
    const {data:CatData}=useQuery(["cat"],async()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=>res.data);
    });

    return(<h1>{CatData?.fact}</h1>);
}

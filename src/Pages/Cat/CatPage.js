import {Cat} from "./Cat";
import { useGetCatFact } from "./useGetCatFact";
export const CatPage=()=>{
    const {data,refetchData,isLoading,error}=useGetCatFact();
    if(isLoading){return <h1>Loading...!</h1>;}
    if(error){return <h1>Error...!</h1>;}
    return(<div>
        {/* <Cat /> */}
        <button onClick={refetchData}>Refetch</button>
        <h3>{data?.fact}</h3>        
    </div>);
}
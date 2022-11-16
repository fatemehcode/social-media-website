import useLocalStorage from   "./hooks/useLocalStorage";

export const LandingPage=()=>{ 
    const [username,setUsername]=useLocalStorage("username","");   
    const page='';
    //page=({username}!==''?"LandingPage":"Login");
    return(
        <h1>wellcom {username}</h1>
        );    
}


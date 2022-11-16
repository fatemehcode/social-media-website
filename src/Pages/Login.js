import useLocalStorage from "./hooks/useLocalStorage";

export const Login=()=>{
     const [username,setUsername]=useLocalStorage("username","");
     {console.log({username});}
     return(       
        <div>
            <p>Login</p>
            <input type="text"
            placeholder="username"
            value={username}
            onChange={(event)=>{setUsername(event.target.value);}} />
            
        </div>
    );
}
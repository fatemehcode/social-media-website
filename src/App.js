import {useState} from 'react';
import "./App.css";
import {User} from "./User.js";

function App() {
  // const names=["sara","sima","poul"];
  
  const users=[
    {name:"sara" ,age: 10},
    {name:"bita" ,age: 22},
    {name:"sara" ,age: 33},  
  ];
  //let num=0;
  
  const [num,setNum]=useState(0);
  const increaseNum=()=>{
    console.log(num);
    return setNum(num+1);
  };
  const decreaseNum=()=>{
    console.log(num);
    return setNum(num-1);
  };

  const [myText,setMyText]=useState("");
  const handleInputChange=(event)=>{
  setMyText(event.target.value);
  };

  const [showText,setShowText]=useState(true);
  const showhide=()=>{
  setShowText(!showText);
  };

 /*  const Job=(props)=>{
    return(
      <div className='job' style={{background:parseInt(props.salary)>1000?"blue":"green"}}>
        <h1>salary: {props.salary}</h1>
        <h3>position: {props.position}</h3>
        <h3>company: {props.company}</h3>
      </div>
    )
  }
   */
  return (
    <div className="App">
      <div>             
        {/* 
          <User name="Fatemeh" age="40" /> 
          <Job salary="100" position="Junior Developer" company="Home"/>
          {names.map((name,key)=>{return <h1>{name}</h1>})} 
          */}
        {/* //example array mapping
        {users.map((user,key)=>{
          return(
          <User name={user.name} age={user.age}/>
          );
        })} */}
      </div>
      {/*  //example for increase buttun STATE*/}
      <div>
        <button onClick={increaseNum}>Increase</button>
        <h1>{num}</h1>
        <button onClick={decreaseNum}>Decrease</button>
      </div><br/><hr/>
      
      <div>
        <input type="text" onChange={handleInputChange}/>
        <br/>
        {myText}
      </div><br/><hr/>
      
      <div>       
        {showText&&<h1>Hello!</h1>}
        <button onClick={showhide}>{showText?'hide':'show'}</button>
      </div><br/><hr/>
    </div>
  );
}

export default App;

//component
  export const User=(props)=>{
    return(
      <div className='user' style={{background:(props.age<18)?"red":"green"}}>
        <h1>name: {props.name}</h1>
        <h3>age: {props.age}</h3>
      </div>
    )
  }

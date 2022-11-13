export const Task=(props)=>{
    const {id,taskName,status}=props.item;
    return(
        <div className='task' style={{background:status?"green":"red"}}>
            <h2>{id}-{taskName}</h2>
            <button onClick={props.onEdit}>Edit</button>
            <button onClick={props.onDelete}>Delete</button>
            <button onClick={props.onComplete}>Complete</button>
           
        </div>
    );
}
export const Post=(props)=>{
    const {id,title}=props.item;
    return(
        <div className='post'>
            <h2>{id}-{title}</h2>
            <button onClick={props.onEdit}>edit</button>
            <button onClick={props.onDelete}>delete</button>
           
        </div>
    );
}
import {BottomComponent} from './BottomComponent';
import {Home} from '../Home';
export const MiddleComponent=(props)=>{   
    return (
        <div>
            <h5></h5>
            <BottomComponent username={props.username}/>
            
        </div>
       
    );

}
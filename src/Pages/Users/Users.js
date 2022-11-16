import proTypes from 'prop-types';
import Person from "./Person";
const Users = () => {
    let i=0;
    return (
        <div>
            <Person 
            key={'id'}
            name='P1'
            email='p1@example.com'
            age={35}
            famileStand='true'
            freiens={['A','B']}
            />
        </div>
    );
};

export default Users;
Person.prototypes={
    name:proTypes.string,
    email:proTypes.string,
    age:proTypes.number,
    famileStand:proTypes.bool,
    freiens:proTypes.arrayOf(proTypes.string),
}
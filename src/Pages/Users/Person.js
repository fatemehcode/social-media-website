import React from 'react';

const Person = (props) => {
    const {name,email,age,famileStand,freiens}=props;
    return (
        <div>
            <h1>users/Person</h1>
            <p>name:{name}</p>
            <p>email:{email}</p>
            <p>age:{age}</p>
            <p>famileStand:{famileStand}</p>
            <p>freiens:</p>
            {freiens.map((n)=>(<p>{n}</p>))}
        </div>
    );
};

export default Person;
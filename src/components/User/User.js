import React, { useEffect, useState } from 'react';
import UserElement from '../UserElement/UserElement';

const User = () => {
    const [user, setUser] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    },[user.length]);
    return (
        <div className="userData ">
            <div className="container py=5">
                <h1>Users:</h1>
                <div className="row py=5">
                    
                    {
                        user.map(pd => <UserElement singleUser = {pd}></UserElement>)
                    }
                </div>
            </div>
        </div>
    );
};

export default User;
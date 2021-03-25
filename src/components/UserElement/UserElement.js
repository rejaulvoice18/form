import React from 'react';
import './UserElement.css'

const UserElement = (props) => {
    // const {name, username, email, phone, address} = props.singleUser;
    // console.log(props.sin)
    console.log(props)
    return (
        <div className="col-md-6">
            <table class="table">
                <div class="card text-white bg-info mb-3">
                    <div class="card-body">
                        <p class="card-text"><b>Name:</b> {props.singleUser.name} </p>
                        <p class="card-text"><b>Username:</b> {props.singleUser.username} </p>
                        <p class="card-text"><b>Email:</b> {props.singleUser.email} </p>
                        <p class="card-text"><b>Phone: </b> {props.singleUser.phone} </p>
                        <p class="card-text"><b>Address: </b> {props.singleUser.address.city} </p>
                    </div>
                </div>
            </table>
        </div>
    );
};

export default UserElement;
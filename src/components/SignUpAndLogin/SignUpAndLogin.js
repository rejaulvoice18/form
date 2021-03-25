import React, { useState } from 'react';
import Logo from '../../Images/logo.JPG';
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";
import './SignUpAndLogin.css';
import { useAuth } from './useAuth';

const SignUpAndLogin = () => {
    const [returningUser, setReturningUser] = useState(true);
    const { register, handleSubmit, watch, errors } = useForm();

    const auth = useAuth()

    // const handleSignIn = () => {
    //     auth.signIn()
    //         .then(res => {
    //             window.location.pathname = '/user';
    //         })
    //     }

    const handleSignUp = () => {
        auth.signUp()
            .then(res => {
                window.history.back();
            })
    }



    const onSubmit = data => {

        console.log(data);
        if (returningUser) {
            if (data.email && data.password) {
                auth.signIn(data.email, data.password)
                window.location.pathname = '/user';
            }
        } else {
            if (data.name && data.email && data.password && data.confirm_password) {
                auth.signUp(data.email, data.confirm_password, data.name)
            }
        }

    }

    return (
        <div className="sign-up">
            <div className="container">
                <div className="logo text-center pt-5">
                    <img src={Logo} className="w-25" alt="" />
                </div>

                {
                    returningUser ?
                        <form onSubmit={handleSubmit(onSubmit)} className="py-3">
                            <div className="form-group">
                                <input name="email" className="form-control" ref={register({ required: true })}  placeholder="Email address" />
                                {errors.email && <span className="error">Email is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control" ref={register({ required: true })}  placeholder="Password" />
                                {errors.password && <span className="error">Password is required</span>}
                            </div>

                            <div className="form-group">
                                <button className="btn btn-dark btn-block" type="submit">Sign In</button>
                            </div>
                            <div className="option text-center">
                                <label onClick={() => setReturningUser(false)}>Don't have an account?</label>
                            </div>
                        </form>
                        :
                        <form onSubmit={handleSignUp} className="py-3">
                            <div className="form-group">
                                <input name="name" className="form-control" placeholder="Name" />
                                
                            </div>
                            <div className="form-group">
                                <input name="email" className="form-control"  placeholder="Email address" />
                                
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control"  placeholder="Password" />
                                
                            </div>
                            <div className="form-group">
                                <input type="text" name="address" className="form-control"  placeholder="Address" />
                                
                            </div>
                            <div className="form-group">
                                <input type="text" name="website" className="form-control"  placeholder="website" />
                                
                            </div>
                            <div className="form-group">
                                <button className="btn btn-dark btn-block" type="submit">Sign Up</button>
                            </div>
                            <div className="option text-center">
                                <label onClick={() => setReturningUser(true)}>Already Have a account</label>
                            </div>
                        </form>

                }

            </div>

        </div>
    );
};

export default SignUpAndLogin;
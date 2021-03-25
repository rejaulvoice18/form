import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import React, { useState, createContext, useContext, useEffect } from 'react';


firebase.initializeApp(firebaseConfig);


const AuthContext = createContext()
export const AuthProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}> {props.children} </AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext);


const Auth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const currUser = user;
                setUser(currUser);
            }
        });

    }, [])

    const signIn = (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                setUser(res.user);
                // window.history.go = '/user';
                return res.user;
            })
            .catch(err => setUser({ error: err.message }))
    }



    const signUp = (email, password, name) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                firebase.auth().currentUser.updateProfile({
                    displayName: name
                }).then(() => {
                    setUser(res.user);
                    // window.history.back();
                });
            })
            .catch(err => setUser({ error: err.message }))
    }

    
    return {
        user,
        signIn,
        signUp,
    }
}

export default Auth;
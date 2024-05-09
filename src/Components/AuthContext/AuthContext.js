import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth/cordova';

export const AuthProvider = createContext();
const auth = getAuth(app);



const AuthContext = ({ children }) => {
    const [users, setUsers] = useState(null)
    const [loader, setLoader] = useState(true)

    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = (googleProvider) => {
        return signInWithPopup(auth, googleProvider);
    }

    const AuthInfo = {
        users,
        loader,
        userSignUp,
        userLogin,
        googleLogin
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUsers(currentUser);
            setLoader(false)
        });
        return () => {
            return unsubscribe()
        };
    }, [])

    return (
        <AuthProvider.Provider value={AuthInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;
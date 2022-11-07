import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebaseconfig';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const providerSignin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser) {
                setUser(currentUser);
            }
        })
        return () => unSubscribe;
    }, [])

    const authInfo = { user, providerSignin, signInUser };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
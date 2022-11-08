import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebaseconfig';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerSignin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser) {
                setUser(currentUser);
            }
            setLoading(false);
        })
        return () => unSubscribe;
    }, [])

    const authInfo = { user, loading, createUser, updateUserProfile, providerSignin, signInUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
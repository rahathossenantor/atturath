import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged, signOut,
    GoogleAuthProvider, signInWithPopup
} from "firebase/auth";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register new user with email and password
    const emailPassRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login user with email and password
    const emailPassLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // sign in with google
    const googleProvider = new GoogleAuthProvider();
    const signInUserWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // logout user
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        });
        return () => unSubscribe();
    }, []);

    const contextData = {
        user,
        loading,
        emailPassRegister,
        emailPassLogin,
        signInUserWithGoogle,
        logOutUser
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;

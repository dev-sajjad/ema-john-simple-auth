import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/Firebase.config'


export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const UserContext = ({children}) => {
//  const user = {displayName: 'Mamun here!!'}
    const [user, setUser] = useState(null);

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login with user email and password
    const login = (email, password) => {
      return  signInWithEmailAndPassword(auth, email, password)
    }

    // google sign in
    const handleGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
            console.log(user)
            })
            .catch(error => {
            console.error(error)
        })
    }

    // user log out
    const logOut = () => {
        signOut(auth)
            .then(() => {
            console.log('user log out')
            })
            .catch(error => {
            console.error(error)
        })
    }


    // clean up when user change state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
           setUser(currentUser)
        })
        return () => unSubscribe();
    }, [])
    

    const authInfo = {user, createUser, login, handleGoogle, setUser, logOut};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;
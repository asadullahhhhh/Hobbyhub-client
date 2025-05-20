import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    // Email and Password Sign up
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Email and Password Login
    const logIn = (emil, password) => {
        return signInWithEmailAndPassword(auth, emil, password)
    }

    // Google Login
    const gLogIn = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    // LogOut 
    const logOut = () => {
        return signOut(auth)
    }

    // LogIn or LogOut
    useEffect(()=> {
        const unSubscirbe = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
        })

        return () => {
            unSubscirbe()
        }
    }, [])

  const userObj = {
    signUp,
    logIn,
    gLogIn,
    user,
    setUser,
    logOut
  };

  return <AuthContext value={userObj}>{children}</AuthContext>;
  
};

export { AuthContext, AuthProvider };

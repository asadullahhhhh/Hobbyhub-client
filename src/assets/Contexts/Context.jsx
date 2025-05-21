import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    
    const [darkLight, setDarkLight] = useState(false);

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
                // console.log(user)
                fetch("http://localhost:3000/users")
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        const userData = data.find(
                          (u) => u.email === user.email
                        );
                        setUser(userData);
                    })
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
    logOut,
    darkLight,
    setDarkLight,
  };

  return <AuthContext.Provider value={userObj}>{children}</AuthContext.Provider>;
  
};

export { AuthContext, AuthProvider };

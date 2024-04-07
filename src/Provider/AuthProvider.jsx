import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // create user

    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
    // sign in

    const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign Out

    const logOut = () => {
        return signOut (auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('the current user is :', currentUser)
            setUser(currentUser)
        });
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
      user,
      createUser,
      signIn,
      logOut
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
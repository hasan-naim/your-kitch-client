import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext({});
const auth = getAuth(app);
function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (crntuser) => {
      setUser(crntuser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signUp = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const updateUsr = (obj) => {
    return updateProfile(auth.currentUser, obj);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const logIn = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    user,
    loading,
    updateUsr,
    signUp,
    logOut,
    logIn,
    googleLogIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
}

export default AuthProvider;

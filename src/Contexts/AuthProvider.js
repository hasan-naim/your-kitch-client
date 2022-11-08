import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext({});
const auth = getAuth(app);
function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
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

  const authInfo = {
    user,
    updateUsr,
    signUp,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
}

export default AuthProvider;

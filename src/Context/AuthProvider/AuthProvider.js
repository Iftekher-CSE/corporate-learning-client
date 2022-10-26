import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // load user profile data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return unsubscribe();
  }, []);

  // user initial registration with email and pass
  const userRegistration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const userGoogleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  // update user Profile
  const userProfileUpdate = userProfile => {
    return updateProfile(auth.currentUser, userProfile);
  };

  const authInfo = {
    user,
    userRegistration,
    userGoogleLogin,
    userProfileUpdate,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

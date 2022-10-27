import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerGit = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // load user profile data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // user initial registration with email and pass
  const userRegistration = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user sign in with email and pass
  const userSingIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const userGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGoogle);
  };

  // git login
  const userGitLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGit);
  };

  // update user Profile
  const userProfileUpdate = userProfile => {
    setLoading(true);
    return updateProfile(auth.currentUser, userProfile);
  };

  // sign out
  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = {
    user,
    loading,
    userRegistration,
    userSingIn,
    userGoogleLogin,
    userGitLogin,
    userProfileUpdate,
    userSignOut,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

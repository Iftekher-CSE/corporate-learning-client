import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
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
    });
    return unsubscribe();
  }, []);

  // user initial registration with email and pass
  const userRegistration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const userGoogleLogin = () => {
    return signInWithPopup(auth, providerGoogle);
  };

  // git login
  const userGitLogin = () => {
    return signInWithPopup(auth, providerGit);
  };

  // update user Profile
  const userProfileUpdate = userProfile => {
    return updateProfile(auth.currentUser, userProfile);
  };

  // sign out
  const userSignOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    userRegistration,
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

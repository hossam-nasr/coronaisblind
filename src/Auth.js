import React, { useEffect, useState } from "react";
import app from "./firebase.js";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  // Collection to monitor authentication status and current user
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    // hook
    app.auth().onAuthStateChanged(setUpUserListener); // Gets updated from here
  }, []);

  const setUpUserListener = userAuth => {
    if (userAuth) {
      setUserLoading(true);
      app
        .firestore()
        .collection("users")
        .doc(userAuth.uid)
        .onSnapshot(doc => {
          const userData = doc.data();
          if (userData) {
            userData["id"] = userAuth.uid;
            setCurrentUser(userData);
            setUserLoading(false);
          }
        });
    } else {
      setUserLoading(false);
    }
  };

  // Render user profile returned from firebase
  return (
    <UserContext.Provider value={{ currentUser, userLoading, setUserLoading }}>
      {children}
    </UserContext.Provider>
  );
};

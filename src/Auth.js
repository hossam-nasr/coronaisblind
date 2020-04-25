import React, { useEffect, useState } from "react";
import app from "./firebase.js";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  // Collection to monitor authentication status and current user
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // hook
    app.auth().onAuthStateChanged(setUpUserListener); // Gets updated from here
  }, []);

  const setUpUserListener = userAuth => {
    if (userAuth) {
      app
        .firestore()
        .collection("users")
        .doc(userAuth.uid)
        .onSnapshot(doc => {
          const userData = doc.data();
          userData["id"] = userAuth.uid;
          setCurrentUser(userData);
        });
    }
  };

  // Render user profile returned from firebase
  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};

import React, { useEffect, useState } from "react";
import app from "./firebase.js";

export const SessionContext = React.createContext();

export const SessionProvider = ({ children }) => {
  const [currentSession, setCurrentSession] = useState(null);
  const [nextSession, setNextSession] = useState(null);

  useEffect(() => {
    // hook
    app
      .firestore()
      .collection("globalVars")
      .doc("sessionVars")
      .onSnapshot(doc => {
        const globalData = doc.data();
        if (globalData && globalData.activeSession) {
          setUpSessionListener(globalData.activeSession); // Gets updated from here
          setNextSession(globalData.nextSession);
        }
      });
  }, []);

  const setUpSessionListener = sessionID => {
    app
      .firestore()
      .collection("sessions")
      .doc(sessionID)
      .onSnapshot(doc => {
        const {
          id,
          number,
          active,
          activeDay,
          startDate,
          endDate,
          done
        } = doc.data();
        setCurrentSession({
          id,
          number,
          active,
          activeDay,
          startDate,
          endDate,
          done
        });
      });
  };

  // Render children using current session data
  return (
    <SessionContext.Provider value={{ currentSession, nextSession }}>
      {children}
    </SessionContext.Provider>
  );
};

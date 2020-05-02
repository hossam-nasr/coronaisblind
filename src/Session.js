import React, { useEffect, useState } from "react";
import app from "./firebase.js";

export const SessionContext = React.createContext();

export const SessionProvider = ({ children }) => {
  const [currentSession, setCurrentSession] = useState(null);
  const [nextSession, setNextSession] = useState(null);
  const [sessionLoading, setSessionLoading] = useState(true);

  useEffect(() => {
    // hook
    app
      .firestore()
      .collection("globalVars")
      .doc("sessionVars")
      .onSnapshot(doc => {
        const globalData = doc.data();
        if (globalData) {
          if (globalData.activeSession) {
            setUpSessionListener(globalData.activeSession); // Gets updated from here
          }
          if (globalData.nextSession) {
            setNextSession(globalData.nextSession);
          }
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
        setSessionLoading(false);
      });
  };

  // Render children using current session data
  return (
    <SessionContext.Provider
      value={{ currentSession, nextSession, sessionLoading, setSessionLoading }}
    >
      {children}
    </SessionContext.Provider>
  );
};

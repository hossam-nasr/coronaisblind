import app from "./firebase";

export const signUpUser = async ({
  email,
  password,
  firstName,
  lastName,
  venmo,
  gender,
  lookingFor,
  friendEmails,
  session,
}) => {
  // authenticate user and create user ID
  const { user } = await app
    .auth()
    .createUserWithEmailAndPassword(email, password);

  // store user information in data store
  await app.firestore().collection("users").doc(user.uid).set({
    id: user.uid,
    email: user.email,
    firstName,
    lastName,
    venmo,
    gender,
    lookingFor,
    friendEmails,
    session,
    registration_date: new Date(),
  });
};

export const getCallList = async (user) => {
  if (user && user.id && user.calls) {
    try {
      const calls = [];
      const reveals = [];
      await Promise.all(
        user.calls.map(async (callId) => {
          const call = await getCallObj(callId, user.id);
          if (call) {
            calls.push(call);
            if (call.reveal) {
              reveals.push(call);
            }
          }
        })
      );
      return {
        calls: calls.sort((call1, call2) => {
          if (call1.time < call2.time) return -1;
          return 1;
        }),
        reveals: reveals.sort((call1, call2) => {
          if (call1.time < call2.time) return -1;
          return 1;
        }),
      };
    } catch (err) {
      console.error("Encountered error getting calls: ", err.message);
    }
  }
  return { calls: [], reveals: [] };
};

export const getCallObj = async (callId, userId) => {
  const callDoc = await app.firestore().collection("calls").doc(callId).get();

  if (!callDoc.exists) {
    console.error("Couldn't find call with ID: ", callId);
    return;
  }

  const callData = callDoc.data();

  let callerId;
  if (callData && callData.user1Id === userId) {
    // other caller must be user 2
    callerId = callData.user2Id;
  } else if (callData && callData.user2Id === userId) {
    // other caller must be user 1
    callerId = callData.user1Id;
  } else {
    // error
    console.error(
      `User with ID ${userId} not found on call with ID ${callData.id}`
    );
    return;
  }
  const callerDoc = await app
    .firestore()
    .collection("users")
    .doc(callerId)
    .get();

  if (!callerDoc.exists) {
    console.error(
      `Encountered error retrieving call ${callId}: User ${callerId} not found.`
    );
    return;
  }
  const callerData = callerDoc.data();
  callData.name = callerData.firstName;
  callData.otherCallerId = callerId;
  callData.time = new Date(callData.time.seconds * 1000);
  if (callData.reveal) {
    callData.lastName = callerData.lastName;
    callData.email = callerData.email;
  }
  return callData;
};

export const postCallReview = async ({
  callId,
  review,
  showedUp,
  theReviewed,
  theReviewer,
}) => {
  const docRef = app.firestore().collection("callReviews").doc();

  const id = docRef.id;

  return await docRef.set({
    id,
    callId,
    review,
    showedUp,
    theReviewed,
    theReviewer,
  });
};

export const resetFlake = async (uid) => {
  await app.firestore().collection("users").doc(uid).update({
    flake: false,
  });
  return;
};

export const subscribeNextSession = async (uid, nextSession) => {
  await app.firestore().collection("users").doc(uid).update({
    session: nextSession,
    flake: false,
  });
  return;
};

export const alreadyReviewed = async (uid, callId) => {
  const user = await app.firestore().collection("users").doc(uid).get();
  const call = await app.firestore().collection("calls").doc(callId).get();

  if (user.data().callReviewsByMe.includes(call.data().user1Review) ||
    user.data().callReviewsByMe.includes(call.data().user2Review))
    return false;
  return true;
}

export const getUserSessionStatus = async (id) => {
  if(id === "") return true;
  const session = await app.firestore().collection("sessions").doc(id).get();
  if (session.data().done) return true;
  return false;
}

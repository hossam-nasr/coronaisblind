import app from "./firebase";

export const signUpUser = async ({ email, password }) => {
  try {
    // authenticate user and create user ID
    const { user } = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);

    // store user information in data store
    await app
      .firestore()
      .collection("users")
      .doc(user.uid)
      .set({
        email: user.email,
        registration_date: Date.now()
      });
  } catch (error) {
    console.error("Encountered error: " + error.message);
  }
};

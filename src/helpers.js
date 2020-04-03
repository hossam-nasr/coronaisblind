import app from "./firebase";

export const signUpUser = async ({
  email,
  password,
  firstName,
  lastName,
  quarantineLocation,
  times,
  venmo,
  gender,
  lookingFor
}) => {
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
        firstName,
        lastName,
        quarantineLocation,
        times,
        venmo,
        gender,
        lookingFor,
        registration_date: Date.now()
      });
  } catch (error) {
    console.error("Encountered error: " + error.message);
  }
};

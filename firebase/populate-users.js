import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { firebaseConfig } from "./firebase-config";

// Your Firebase project configuration (replace with your actual config)
// const firebaseConfig = {
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Data for the user
const userData = {
  id: "123",
  email: "b@b.com",
  password: "p123", // *Important: In a real app, never store passwords directly like this! Use Firebase Authentication for secure user management.*
  name: "Bob",
};

async function addUserToFirestore() {
  // Create a document reference for the 'users' collection with the specified ID
  const docRef = doc(db, "users", userData.id);

  // Set the data for that document
  await setDoc(docRef, userData)
    .then(() => {
      console.log(`Document for user ID: ${userData.id} successfully written!`);
    })
    .catch((error) => {
      console.error(
        `Error writing document for user ID: ${userData.id}`,
        error,
      );
    });

  console.log("User data added (or attempted to add) to Firestore.");
}

// Call the function to add the user
addUserToFirestore();

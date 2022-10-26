import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import { toastSuccessNotify, toastErrorNotify } from "./toastNotify";

// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    toastSuccessNotify("Registered successfully!");
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");
    console.log(userCredential);
    
  } catch (err) {
    console.log(err);
    toastErrorNotify(err.message);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    toastSuccessNotify("Logged in successfully!");
    console.log(userCredential);
  } catch (err) {
    console.log(err);
    toastErrorNotify(err.message);
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};

export const logOut = () => {
  signOut(auth);
};

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // console.log(result);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const AddBlog = (info) => {
  const db = getDatabase(app);
  const blogRef = ref(db, "blogs/");
  const newBlogRef = push(blogRef);
  set(newBlogRef, {
    title: info.title,
    image: info.image,
    content: info.content,
    comment: info.comment,
    like: info.like,
    author: info.author,
    date: info.date,
  });
};

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [blogList, setBlogList] = useState();

  useEffect(() => {
    const db = getDatabase(app);
    const blogRef = ref(db, "blogs/");
    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      const blogArray = [];

      for (let id in data) {
        blogArray.push({ id, ...data[id] });
      }
      setBlogList(blogArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, blogList };
};

export const DeleteBlog = (id) => {
  const db = getDatabase(app);
  remove(ref(db, "blogs/" + id));
};

export const UpdateBlogCard = (info) => {
  const db = getDatabase(app);
  const updates = {};
  updates["blogs/" + info.id] = info;
  // console.log(info);

  return update(ref(db), updates);
};

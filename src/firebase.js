import * as firebase from "firebase/app";
import "firebase/storage";
import firebaseConfig from "./firebaseConfig";

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

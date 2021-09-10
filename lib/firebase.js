import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import moment from "moment";
// import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDMuCqe20M8JHRPT5xZfih6rGmLElsCxm4",
  authDomain: "larry-traverso-app.firebaseapp.com",
  projectId: "larry-traverso-app",
  storageBucket: "larry-traverso-app.appspot.com",
  messagingSenderId: "1010612340310",
  appId: "1:1010612340310:web:1703dba949d3168d4b9df7",
  measurementId: "G-DPKTMQME8M",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// export const storage = firebase.storage();

export function postToJSON(doc) {
  const data = doc.data();

  var date = new Date(data.date.toMillis());
  var dateString = moment(date).format("MMMM Do");
  var timeString = moment(date, "YYYYMMDD").fromNow();
  var fullDateString = moment(date).format("MMMM Do YYYY, h:mm:ss a");

  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    date: dateString,
    time: timeString,
    fullDate: fullDateString,
  };
}

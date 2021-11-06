let firebaseConfig = {
  apiKey: "AIzaSyCGXqalgSJ0cV63yJplwyGciUBBfaQSzyA",
  authDomain: "diteam-blog.firebaseapp.com",
  projectId: "diteam-blog",
  storageBucket: "diteam-blog.appspot.com",
  messagingSenderId: "1053297662924",
  appId: "1:1053297662924:web:d56dcfb1f4b86315069b69",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
  auth.signOut();
  location.reload();
}
const firebaseConfig = {
    apiKey: "AIzaSyD2fO-wIxin8RauxhjQXjyXMspXXUo_YUc",
    authDomain: "kwitter-8202c.firebaseapp.com",
    databaseURL: "https://kwitter-8202c-default-rtdb.firebaseio.com",
    projectId: "kwitter-8202c",
    storageBucket: "kwitter-8202c.appspot.com",
    messagingSenderId: "345506516979",
    appId: "1:345506516979:web:acd003e534302aaa498c86"
  };
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}
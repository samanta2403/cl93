
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBA9Tx14rra71p2yoh2IwMJQFI1KDsjH0E",
      authDomain: "class93-b66af.firebaseapp.com",
      databaseURL: "https://class93-b66af-default-rtdb.firebaseio.com",
      projectId: "class93-b66af",
      storageBucket: "class93-b66af.appspot.com",
      messagingSenderId: "238640369272",
      appId: "1:238640369272:web:f7410b2a1219e64636278d",
      measurementId: "G-4VG9T5731Z"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

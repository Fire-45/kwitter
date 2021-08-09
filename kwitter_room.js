
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB8QwOB8jBp32UA_2oTA78_dfPR3B0ScbM",
      authDomain: "kwitter-fb577.firebaseapp.com",
      databaseURL: "https://kwitter-fb577-default-rtdb.firebaseio.com",
      projectId: "kwitter-fb577",
      storageBucket: "kwitter-fb577.appspot.com",
      messagingSenderId: "219324947039",
      appId: "1:219324947039:web:8355d49608a55c7bb119ea"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  var G_username = localStorage.getItem("USERNAME");
  document.getElementById("display_greetings").innerHTML = "Hello,"+G_username;
  

function logout(){
window.location = "index.html";
document.getElementById("Input_username").innerHTML = "";

}

function createRoom(){
var room = document.getElementById("add_room").value;
localStorage.setItem("room", room);
firebase.database().ref("/").child(room).update({
      purpose:"addRoomName"
})
window.location = "kwitterPage.html"

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      document.getElementById("output").innerHTML += "<div class = 'room_name' id = '"+Room_names+"' onclick = 'redirect(this.id)'>"+Room_names+"</div><hr>"


      //End code
      });});}
      function redirect(name){
            localStorage.setItem("room" ,name);
            window.location = "kwitter_page.html";
            
      }
getData();



var username = "";

function nextPage(){
    username = document.getElementById("Input_username").value;
    localStorage.setItem("USERNAME", username);
    window.location = "kwitter_room.html";

}
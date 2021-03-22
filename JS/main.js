//To create something
document.getElementById('your id').onclick = function () {document.getElementById('your id').appendChild('<div> <h1> Your element </h1> <div>')}

//To show or not something
var myDiv = document.getElementById("myDiv");
    myDiv.onclick = function () {
    if (myDiv.style.display === "none") {
      myDiv.style.display = "block";
    } else {
      myDiv.style.display = "none";
    }}
//To create something
var txtInput = document.getElementById('txtInput').value
document.getElementById("inputButton").onclick = function () {document.getElementById("tasks").appendChild('<div> <h1> ${txtInput} </h1> </div>')};

/*
//To show or not something
var myDiv = document.getElementById("myDiv");
    myDiv.onclick = function () {
    if (myDiv.style.display === "none") {
      myDiv.style.display = "block";
    } else {
      myDiv.style.display = "none";
    }}
*/

var title = document.querySelector(".tasks .title")

title.addEventListener('click', showDesc)

function showDesc() {
  var description = document.querySelector(".tasks .desc")
  description.classList.toggle('descon');
}
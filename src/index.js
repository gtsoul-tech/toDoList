import createTask  from "./task";
import taskLoad from "./taskLoad";
import initialLoad from "./initialLoad";
import './style.css';


let todo1 =createTask("asd","asd","asd","asd","asd","no");
todo1.title = "titlos";
console.log(todo1.title);
//console.log(taskLoad(todo1));



document.body.appendChild(initialLoad());
document.body.appendChild(taskLoad(todo1));

let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



const add_button = document.querySelector(".add-button");
add_button.addEventListener("click", (e)=> {
    modal.style.display = "block";
});
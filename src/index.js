import createTask  from "./task";
import taskLoad from "./taskLoad";
import initialLoad from "./initialLoad";
import EventListeners from "./EventListeners";
import './style.css';


//let todo1 =createTask("asd","asd","asd","asd","asd","no");
//todo1.title = "titlos";
//console.log(todo1.title);
//console.log(taskLoad(todo1));



document.body.appendChild(initialLoad());
//document.body.appendChild(taskLoad(todo1));
EventListeners();
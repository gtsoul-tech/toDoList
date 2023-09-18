import formLoad from "./formLoad";
import taskForm from './taskForm';
import projectForm from './projectForm';
import noteForm from './noteForm';
import createTask from "./task";
import storageAvailable from "./storageAvailable";
import taskLoad from "./taskLoad";
import createNote from "./note";
import noteLoad from "./noteLoad";
export default function EventListeners(){

    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];
    let modal_content = document.getElementsByClassName("modal-content")[0];
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
        modal_content.querySelectorAll('*').forEach(n => n.remove());
        modal_content.appendChild(formLoad());
        modal.style.display = "block";
    });
/*
    const modalNav = document.querySelectorAll("input[name=\"formKind\"]");
    modalNav.forEach((currentValue, currentIndex, listObj)=> {
        currentValue.addEventListener("click",(e)=>{
            if(e.currentTarget.checked == true){
                const form = document.getElementsByClassName("formPost")[0];
                
                const myModal = document.createElement("div");
                myModal.setAttribute('id',"myModal");
                myModal.classList.add("modal");
                myModal.querySelectorAll('*').forEach(n => n.remove());
                startView.appendChild(myModal);
                
                const myModalContent = document.createElement("div");
                myModalContent.classList.add("modal-content");
                myModal.appendChild(myModalContent);
                const span = document.createElement("span");
                span.classList.add("close");
                span.innerText="X";
                myModalContent.appendChild(span);
                
                switch(e.currentTarget.value) {
                    case "ToDo": 
                        form.replaceWith(taskForm());
                        break;
                    case "Project":
                        form.replaceWith(projectForm());
                        break;
                    case "Note":
                        form.replaceWith(noteForm());
                        break;
                    default:
                        form.replaceWith(taskForm());
                }
            }
        })
    });*/

    const nav = document.querySelectorAll("input[name=\"state\"]");
    nav.forEach((currentValue, currentIndex, listObj)=> {
        currentValue.addEventListener("click",(e)=>{
            if(e.currentTarget.checked == true){
                const todos = document.querySelector(".todos");
                todos.querySelectorAll('*').forEach(n => n.remove());

                switch(e.currentTarget.value) {
                    case "Projects":
                        break;
                    case "Notes":
                        let noteList = JSON.parse(localStorage.getItem('noteList') || "[]");
                        for (let i = 0; i < noteList.length; i++) {
                            let note = createNote(noteList[i].title,noteList[i].details);
                            todos.appendChild(noteLoad(note));
                        }
                        break;
                    default:
                        let taskList = JSON.parse(localStorage.getItem('taskList') || "[]");
                        for (let i = 0; i < taskList.length; i++) {
                            if(e.currentTarget.value == taskList[i].project){
                                let task = createTask(taskList[i].title,taskList[i].details,taskList[i].dueDate,taskList[i].priority,taskList[i].checklist,taskList[i].project);
                                todos.appendChild(taskLoad(task));
                            }
                        }

                }
                
            }
        })
    });


}

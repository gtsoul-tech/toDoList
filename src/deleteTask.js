import './form.css';
import storageAvailable from './storageAvailable';
import initialLoad from './initialLoad';
import taskLoad from './taskLoad';
import createTask from './task';
export default function deleteTask(task){
    if(storageAvailable("localStorage")) {
        let taskList = JSON.parse(localStorage.getItem('taskList') || "[]");
        let index = taskList.map((element, index) => {
            if(element.title == task.title){
                console.log(task);
                taskList.splice(index,1);
                localStorage.setItem('taskList', JSON.stringify(taskList));
            }
            }
        );
        const todos = document.querySelector(".todos");
        todos.querySelectorAll('*').forEach(n => n.remove());
        let selected = document.querySelector('input[name="state"]:checked');
        task.project= selected.value;
        for (let i = 0; i < taskList.length; i++) {
            if(taskList[i].project == selected.value){
                let task = createTask(taskList[i].title,taskList[i].details,taskList[i].dueDate,taskList[i].priority,taskList[i].checklist,taskList[i].project);
                todos.appendChild(taskLoad(task));
            }
        }
    }else {
        console.log("Local storage doesnt work");
    }
}
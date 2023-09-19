import './form.css';
import storageAvailable from './storageAvailable';
import show from './show';
export default function deleteTask(task){
    if(storageAvailable("localStorage")) {
        let taskList = JSON.parse(localStorage.getItem('taskList') || "[]");
        let index = taskList.map((element, index) => {
            if(element.title == task.title){
                taskList.splice(index,1);
                localStorage.setItem('taskList', JSON.stringify(taskList));
            }
            }
        );
        
        let selected = document.querySelector('input[name="state"]:checked');
        task.project= selected.value;
        show(selected.value);
    }else {
        console.log("Local storage doesnt work");
    }
}
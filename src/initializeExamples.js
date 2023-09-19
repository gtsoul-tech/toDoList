import './form.css';
import storageAvailable from './storageAvailable';
import createNote from './note';
import createTask from './task';
export default function initialLizeExamples(){
    

    if(storageAvailable("localStorage")) {

        
        if(localStorage.getItem('init')== null){
            localStorage.setItem('init', 'key');
            let task1 = createTask("Example Task","Details about this task and why i want to complete it","2023-10-19","High","no","Home");
            let task2 = createTask("Example Task1","Details about this task and why i want to complete it","2023-11-19","Low","yes","Home");
            let task3 = createTask("Example Task2","Details about this task and why i want to complete it","2023-09-19","Medium","yes","MyJavascriptProject");
            
            let project={}
            project.title="MyJavascriptProject";
            let projectList = JSON.parse(localStorage.getItem('projectList') || "[]");
            projectList.push(project);
            localStorage.setItem('projectList', JSON.stringify(projectList));

            let note1={};
            note1.title="i can change title";
            note1.description="i can write here";
            let currentdate = new Date();
            note1.id = currentdate.getDay() + "/" + currentdate.getMonth() 
            + "/" + currentdate.getFullYear() + " @ " 
            + currentdate.getHours() + ":" 
            + currentdate.getMinutes() + ":" + currentdate.getSeconds();
            let noteList = JSON.parse(localStorage.getItem('noteList') || "[]");
            noteList.push(note1);

            localStorage.setItem('noteList', JSON.stringify(noteList));

            let taskList = JSON.parse(localStorage.getItem('taskList') || "[]");
            taskList.push(task1);
            taskList.push(task2);
            taskList.push(task3);
            localStorage.setItem('taskList', JSON.stringify(taskList));
        }
    }else {
        console.log("Local storage doesnt work");
    }
}
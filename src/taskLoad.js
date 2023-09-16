import './taskCss.css';

export default function taskLoad(task){
    const taskDOM = document.createElement('div');
    taskDOM.classList.add('task');

    const title = document.createElement('div');
    title.textContent = task.title;
    const description = document.createElement('div');
    description.textContent = task.description;
    const dueDate = document.createElement('div');
    dueDate.textContent = task.dueDate;
    const priority = document.createElement('div');
    priority.textContent = task.priority;
    
    const checklist = document.createElement('div');
    checklist.textContent = task.checklist;
    taskDOM.appendChild(title);
    taskDOM.appendChild(description);
    taskDOM.appendChild(dueDate);
    taskDOM.appendChild(priority);
    taskDOM.appendChild(checklist);
    return taskDOM;
}
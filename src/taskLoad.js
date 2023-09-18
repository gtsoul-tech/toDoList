import './taskCss.css';

export default function taskLoad(task){
    const taskDOM = document.createElement('div');
    taskDOM.classList.add('task');

    const checklist = document.createElement('div');
    let input = document.createElement("input");
    
    input.type = "checkbox";
    input.name = task.name;
    
    input.setAttribute("value",task.checklist);
    //input.classList.add("navbar-button");
    
    checklist.appendChild(input);
    if(task.checklist == "yes"){
        taskDOM.classList.add("complete");
        input.checked = true;
    }

    const title = document.createElement('div');
    title.textContent = task.title;
    title.classList.add('title');


    const details = document.createElement('div');
    details.textContent = task.details;             //details button
    const dueDate = document.createElement('div');
    dueDate.textContent = task.dueDate;             //
    const priority = document.createElement('div');
    priority.textContent = task.priority;           // ena delete button
                                                    //kai ena edit san to taskform
    
    

    taskDOM.appendChild(checklist);
    taskDOM.appendChild(title);
    taskDOM.appendChild(details);
    taskDOM.appendChild(dueDate);
    taskDOM.appendChild(priority);

    
    input.addEventListener("click",(e)=>{
        console.log(task);
        let taskList = JSON.parse(localStorage.getItem('taskList') || "[]");
        let index = taskList.map((element, index) => {
              return index;
            }
          );

        if(input.checked == true){
            taskDOM.classList.add("complete");
            if (index !== -1) {
                task.checklist = "yes";
                taskList[index] = task;
            }
            localStorage.setItem('taskList', JSON.stringify(taskList));
        }else{
            taskDOM.classList.remove("complete");
            if (index !== -1) {
                task.checklist = "no";
                taskList[index] = task;
            }
            localStorage.setItem('taskList', JSON.stringify(taskList));
        }
    });

    return taskDOM;
}
import './form.css';
import taskForm from './taskForm';
import projectForm from './projectForm';
import noteForm from './noteForm';
export default function formLoad(form){
    const content = document.createElement('div');
    content.classList.add("content");
    
    const navbar = document.createElement('div');
    navbar.classList.add("navbar");
    const data = {
        "ToDo": true,
        "Project": false,
        "Note": false,
    }

    for (let key in data) {
        let label = document.createElement("label");
        label.innerText = key;
        label.setAttribute('for',key);
        let input = document.createElement("input");
        if(data[key] == true){
            input.checked=true;
        }
        input.type = "radio";
        input.name = "formKind";
        input.setAttribute("value",key);
        input.setAttribute('id',key);
        input.classList.add("navbar-button");
        
        navbar.appendChild(input);
        navbar.appendChild(label);
    }
    content.appendChild(navbar);
    content.appendChild(taskForm());
    return content;
}
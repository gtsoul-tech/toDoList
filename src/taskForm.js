import './form.css';

export default function taskForm(){

    const form = document.createElement('form');
    form.setAttribute("id", "myFormTask");
    form.classList.add("formPost");
    form.setAttribute("method", "post");
    form.setAttribute("action", "");
    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.required=true;
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title:Make bills");
    const details = document.createElement("input");
    details.setAttribute("type", "text");
    details.setAttribute("name", "details");
    details.setAttribute("placeholder", "Details:e.g power,groceries");
    details.required=true;
    const dueDate = document.createElement("input");
    const labelDueDate = document.createElement("label");
    labelDueDate.setAttribute("for","dueDate");
    labelDueDate.innerText="Due Date";
    
    dueDate.setAttribute("type", "date");
    dueDate.setAttribute("name", "dueDate");
    dueDate.setAttribute("id", "dueDate");
    dueDate.setAttribute("value", "2023-10-02");
    dueDate.setAttribute("min", "2023-09-02");
    dueDate.setAttribute("max", "2024-09-02");
    
    form.appendChild(title);
    form.appendChild(details);
    form.appendChild(labelDueDate);
    
    form.appendChild(dueDate);
    

    const priority = {
        "Low": true,
        "Medium": false,
        "High": false,
    }

    for (let key in priority) {
        let label = document.createElement("label");
        label.innerText = key;
        label.setAttribute('for',key);
        let input = document.createElement("input");
        if(priority[key] == true){
            input.checked=true;
        }
        input.type = "radio";
        input.name = "priority";
        input.setAttribute("value",key);
        input.setAttribute('id',key);
        input.classList.add("navbar-button");
        
        form.appendChild(input);
        form.appendChild(label);
    }
    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    form.appendChild(submit);

    return form;
}
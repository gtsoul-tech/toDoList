import './form.css';

export default function noteForm(){

    const form = document.createElement('form');
    form.setAttribute("id", "myForm");
    form.classList.add("formPost");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit");
    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.required=true;
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title");
    const details = document.createElement("input");
    details.setAttribute("type", "text");
    details.setAttribute("name", "details");
    details.setAttribute("placeholder", "Details:e.g power,groceries");
    details.required=true;
    
    form.appendChild(title);
    form.appendChild(details);
    

    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Create Note");
    form.appendChild(submit);

    return form;
}
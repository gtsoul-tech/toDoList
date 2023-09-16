import './form.css';

export default function projectForm(){

    const form = document.createElement('form');
    form.setAttribute("id", "myForm");
    form.classList.add("formPost");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit");
    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.required=true;
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title:Electrical Design");
    
    form.appendChild(title);
    

    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Create Project");
    form.appendChild(submit);

    return form;
}
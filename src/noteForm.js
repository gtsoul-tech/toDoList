import './form.css';
import storageAvailable from './storageAvailable';
export default function noteForm(){

    const form = document.createElement('form');
    form.setAttribute("id", "myFormNote");
    form.classList.add("formPost");
    form.setAttribute("method", "post");
    form.setAttribute("action", "");
    const title = document.createElement("input");
    title.classList.add("title");
    title.setAttribute("type", "text");
    title.required=true;
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title");
    const details = document.createElement("input");
    details.classList.add("details");
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


    form.addEventListener("submit", storeNote,false);
    
    function storeNote(event){
        event.preventDefault();
        if(storageAvailable("localStorage")) {
            const data = new FormData(form);
            let note ={};
            for (const [name,value] of data) {
                data.forEach((value, key) => note[key] = value);
            }
            let noteList = JSON.parse(localStorage.getItem('noteList') || "[]");
            noteList.push(note);
            localStorage.setItem('noteList', JSON.stringify(noteList));
            initialLoad();
            let modal = document.getElementById("myModal");
            modal.style.display = "none";
            form.reset();
        }else {
            console.log("Local storage doesnt work");
        }
    }
    return form;
}
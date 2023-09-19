import './form.css';
import storageAvailable from './storageAvailable';
import show from './show';
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
    const description = document.createElement("input");
    description.classList.add("details");
    description.setAttribute("type", "text");
    description.setAttribute("name", "description");
    description.setAttribute("placeholder", "description:e.g power,groceries");
    description.required=true;
    
    form.appendChild(title);
    form.appendChild(description);
    

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

            let currentdate = new Date();
            note.id = currentdate.getDay() + "/" + currentdate.getMonth() 
            + "/" + currentdate.getFullYear() + " @ " 
            + currentdate.getHours() + ":" 
            + currentdate.getMinutes() + ":" + currentdate.getSeconds();


            noteList.push(note);
            localStorage.setItem('noteList', JSON.stringify(noteList));
            let modal = document.getElementById("myModal");
            modal.style.display = "none";
            form.reset();
            show("Notes");

        }else {
            console.log("Local storage doesnt work");
        }
    }
    return form;
}
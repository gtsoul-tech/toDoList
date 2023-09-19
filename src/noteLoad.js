import './style.css';
import Svg from './rubbish.svg';
import deleteNote from './deleteNote';
import editNote from './editNote';

export default function noteLoad(note){
    const noteDOM = document.createElement('div');
    noteDOM.classList.add('card');
    noteDOM.classList.add('card_small');

    const title = document.createElement('input');
    
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("value", note.title);
    title.classList.add("noteInput");

    const description = document.createElement('input');
    description.setAttribute("type", "text");
    description.setAttribute("name", "description");
    description.setAttribute("value", note.description);
    description.classList.add("noteInput");
    

    title.addEventListener("input", (e) =>{
        editNote(note,title.value,description.value);
    });
    description.addEventListener("input", (e) =>{
        editNote(note,title.value,description.value);
    });


    
    const deleteButton =document.createElement('div');
    deleteButton.classList.add("delete-note");
    deleteButton.innerHTML = Svg;
    deleteButton.addEventListener("click", (e)=> {
        deleteNote(note);
    });

    noteDOM.appendChild(title);
    noteDOM.appendChild(description);
    noteDOM.appendChild(deleteButton);

    return noteDOM;
}
import './form.css';
import storageAvailable from './storageAvailable';
import noteLoad from './noteLoad';
import createNote from './note';
export default function editNote(note,title,description){
    if(storageAvailable("localStorage")) {
        let noteList = JSON.parse(localStorage.getItem('noteList') || "[]");
        let index = noteList.map((element, index) => {
            if(element.id == note.id){
                element.title=title;
                element.description=description;
                localStorage.setItem('noteList', JSON.stringify(noteList));
            }
            }
        );
    }else {
        console.log("Local storage doesnt work");
    }
}
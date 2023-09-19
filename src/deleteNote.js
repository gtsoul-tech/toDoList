import './form.css';
import storageAvailable from './storageAvailable';
import show from './show';
export default function deleteNote(note){
    if(storageAvailable("localStorage")) {
        let noteList = JSON.parse(localStorage.getItem('noteList') || "[]");
        let index = noteList.map((element, index) => {
            if(element.id == note.id){
                noteList.splice(index,1);
                localStorage.setItem('noteList', JSON.stringify(noteList));
            }
            }
        );
        show("Notes");
    }else {
        console.log("Local storage doesnt work");
    }
}
import './taskCss.css';

export default function noteLoad(note){
    const noteDOM = document.createElement('div');
    noteDOM.classList.add('task');

    const title = document.createElement('div');
    title.textContent = note.title;
    const description = document.createElement('div');
    description.textContent = note.description;
    noteDOM.appendChild(title);
    noteDOM.appendChild(description);
    return noteDOM;
}
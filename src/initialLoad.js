import createTask from "./task";
import './style.css';
import Svg from './notebook.svg';

export default function initialLoad(){
    const startView = document.createElement('div');
    
    const header = document.createElement('div');
    header.classList.add("header");
    header.textContent = "To-Do List";
    const mySvg = document.createElement('div');
    mySvg.classList.add("svg");
    mySvg.innerHTML = Svg;
    
    header.appendChild(mySvg);
    
    const content = document.createElement('div');
    content.classList.add("content");

    const categories = document.createElement('div');


    const navbar =document.createElement('div');
    navbar.classList.add("navbar");

    const home = document.createElement('div');
    home.classList.add("navbar-button");
    home.textContent="Home";
    const today = document.createElement('div');
    today.classList.add("navbar-button");
    today.textContent="Today";
    const week = document.createElement('div');
    week.textContent="Week";
    week.classList.add("navbar-button");
    const projects = document.createElement('div');
    projects.textContent="Projects";
    projects.classList.add("navbar-button");
    const notes = document.createElement('div');
    notes.textContent="Notes";
    notes.classList.add("navbar-button");




    const todos = document.createElement('div');
    todos.classList.add("todos");

    startView.appendChild(header);

    startView.appendChild(content);
    content.appendChild(navbar);
    content.appendChild(todos);
    
    navbar.appendChild(home);
    navbar.appendChild(today);
    navbar.appendChild(week);
    navbar.appendChild(projects);
    navbar.appendChild(notes);
    

    return startView;
}
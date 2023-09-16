import formLoad from "./formLoad";
import taskForm from './taskForm';
import projectForm from './projectForm';
import noteForm from './noteForm';
import createTask from "./task";

export default function EventListeners(){

    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];
    let modal_content = document.getElementsByClassName("modal-content")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    modal_content.appendChild(formLoad());


    const add_button = document.querySelector(".add-button");
    add_button.addEventListener("click", (e)=> {
        modal.style.display = "block";
    });

    const modalNav = document.querySelectorAll("input[name=\"formKind\"]");
    modalNav.forEach((currentValue, currentIndex, listObj)=> {
        currentValue.addEventListener("click",(e)=>{
            if(e.currentTarget.checked == true){
                const form = document.getElementsByClassName("formPost")[0];
                switch(e.currentTarget.value) {
                    case "ToDo": 
                        form.replaceWith(taskForm());
                        break;
                    case "Project":
                        form.replaceWith(projectForm());
                        break;
                    case "Note":
                        form.replaceWith(noteForm());
                        break;
                    default:
                        form.replaceWith(taskForm());
                }
            }
        })
    });



    const form= document.getElementById("myFormTask");
    //emeida edw
    form.addEventListener("submit", storeTask,false);
    function storeTask(event){
        event.preventDefault();
        if(storageAvailable("localStorage")) {
            const data = new FormData(form);
            for (const [name,value] of data) {
                let task ={};
                data.forEach((value, key) => task[key] = value);
                localStorage.setItem('task', JSON.stringify(data));
            }
            
            modal.style.display = "none";
            form.reset();
        }else {
            console.log("Local storage doesnt work");
        }
    }

}

function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
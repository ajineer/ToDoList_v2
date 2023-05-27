const addBtn = document.getElementById("addToDo");
const toDoList = document.getElementById("ToDoList");
let userText = document.getElementById("toDoText");
addBtn.addEventListener("click", makeToDoItem);

function makeToDoItem(){

    if(userText !== ""){
        let toDoItem = makeElement("li", "toDoItem", "");
        let trashButton = makeElement("button", "trashButton", "");
        let checkButton = makeElement("button", "checkButton", "");
        let checkIcon = makeElement("i", "checkSymbol", "");
        let checked = false;

        checkIcon.appendChild(document.createTextNode("\u2713"));
        trashButton.appendChild(document.createTextNode("\u00D7"));
        checkButton.appendChild(checkIcon);

        toDoItem.innerText = document.getElementById("toDoText").value;
        checkButton.setAttribute("type", "button");
        checkButton.addEventListener("click", ()=>{
            if(checked === false){
                checkButton.style.backgroundColor = "green";
                checked = true;
            }else{
                checkButton.style.backgroundColor = "limegreen";
                checked = false;
            }
        })
        trashButton.setAttribute("type", "button")
        trashButton.addEventListener("click",()=>{
            toDoItem.remove();
        })
    }else{
        alert("Please enter something!")
    }


    toDoItem.appendChild(checkButton);
    toDoItem.appendChild(trashButton);
    toDoList.appendChild(toDoItem);
    userText.value = "";

}

function makeElement(tagName, idName, className){
    let newElm = document.createElement(tagName);
    newElm.setAttribute("id", idName);
    newElm.setAttribute("class", className);
    return newElm;   
}   
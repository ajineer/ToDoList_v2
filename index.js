const addBtn = document.getElementById("addToDo");
const toDoList = document.getElementById("ToDoList");
addBtn.addEventListener("click", makeToDoItem);

function makeToDoItem(){

    let toDoItem = makeElement("li", "toDoItem", "");
    let trashButton = makeElement("button", "trashButton", "");
    let checkButton = makeElement("button", "checkButton", "");
    let checkIcon = makeElement("i", "checkSymbol", "");

    checkIcon.appendChild(document.createTextNode("\u2713"));
    trashButton.appendChild(document.createTextNode("\u00D7"));
    checkButton.appendChild(checkIcon);

    toDoItem.innerText = document.getElementById("toDoText").value;
    checkButton.setAttribute("type", "button");
    trashButton.setAttribute("type", "button")

    toDoItem.appendChild(checkButton);
    toDoItem.appendChild(trashButton);
    toDoList.appendChild(toDoItem);
}

let checkButton = document.getElementById("checkButton");

checkButton.addEventListener("click", function(){
    checked();
});

trashButton.addEventListener("click", function(){
    deleteItem(toDoItem);
});

function makeElement(tagName, idName, className){
    let newElm = document.createElement(tagName);
    newElm.setAttribute("id", idName);
    newElm.setAttribute("class", className);
    return newElm;   
}

function checked(){
    if(checkButton.style.backgroundColor === "limegreen"){
        checkButton.style.backgroundColor = "green";
    }else if(checkButton.style.backgroundColor === "green"){
        checkButton.style.backgroundColor = "limegreen";
    }
}   

function deleteItem(todoItem){
    todoItem.remove();
}
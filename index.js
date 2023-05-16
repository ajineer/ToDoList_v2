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

    checkButton.addEventListener("click", function(){
        let check = false;
        checked(check);
    });

    trashButton.addEventListener("click", function(){
        deleteItem(toDoItem);
    });
}



function makeElement(tagName, idName, className){
    let newElm = document.createElement(tagName);
    newElm.setAttribute("id", idName);
    newElm.setAttribute("class", className);
    return newElm;   
}



function checked(check){
    if(check === false){
        checkButton.style.backgroundColor = "green";
        check = true;
    }else if(check === true){
        checkButton.style.backgroundColor = "limegreen";
        check = false;
    }
}   

function deleteItem(todoItem){
    todoItem.remove();
}
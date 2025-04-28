let array = [];

function addLast() {
    inputElement = document.getElementsByClassName("array-input");
    array.push(inputElement);
}

function addFirst() {
    inputElement = document.getElementsByClassName("array-input");
    array.unshift();
}

function removeLast() {
    array.pop();
}

function removeFirst() {
    array.shift();
}

function SpliceElement() {
    array.splice(index,1);
}

for (i = 0; i < array.length; i++) {
    s
    newList = document.createElement("li");
    arrayText = document.createTextNode(array[i]);
    listItem = newList.appendChild(arrayText);
}
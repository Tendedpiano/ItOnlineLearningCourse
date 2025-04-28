// Create the empty task array and declare the container as a variable
let tasks = [];
let listContainer = document.getElementById('list-container');

// A function to add a task stated by the input when pressing the add button
function addTask() {
    let inputEl = document.getElementById('input-el').value;
    tasks.push(inputEl);
    displayTasks();
}

// A function to add each task in the array and display it to the page
function displayTasks() {
    listContainer.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let listEl = document.createElement("li");

        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = function() {
            removeTask(i);
        };

        listEl.innerHTML = tasks[i];
        listEl.appendChild(removeBtn);

        listContainer.appendChild(listEl);
    }
}

// A function to remove the specific task from the list
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
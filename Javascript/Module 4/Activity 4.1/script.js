
let tasks = [];

// Add new tasks
function addTasks() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput) {
        tasks.push(taskInput);
        document.getElementById("taskInput").value = " ";
        displayTasks();
    } else {
        alert ("Please enter a task!")
    }
}

// Display tasks
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerhtml = " ";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove Task";
        removeButton.onclick = () => removeTask(index);
        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

// Remove task 
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
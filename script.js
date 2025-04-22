const taskList = [];

function addTasks() {
    const task = document.getElementById("taskInput").value.trim();
    if (task !== "") {
        taskList.push(task);
        displayTasks();
    }
    document.getElementById("taskInput").value = "";
}

function deleteTask(index) {
    taskList.splice(index, 1);
    displayTasks();
}

function displayTasks() {
    const todoListContainer = document.getElementById("todoList"); // fixed
    todoListContainer.innerHTML = "";

    taskList.forEach((task, index) => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const span = document.createElement("span");
        span.textContent = task;

        checkbox.onchange = () => span.classList.toggle("completed"); 

        const dltBtn = document.createElement("button");
        dltBtn.textContent = "🗑️";
        dltBtn.className = "delete-btn";
        dltBtn.onclick = () => deleteTask(index);

        const left = document.createElement("div");
        left.className = "left";
        left.append(checkbox, span);

        li.append(left, dltBtn);
        todoListContainer.appendChild(li);
    });
}

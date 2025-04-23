// array to store  tasks
const taskList = [];

function addTasks() {
    const task = document.getElementById("taskInput").value.trim();
    if (task !== "") {
        taskList.push(task);
        displayTasks();
    }
    document.getElementById("taskInput").value = "";
}

// ? function for task delete 

function deleteTask(index) {
    taskList.splice(index, 1);
    displayTasks();
}
// ? function to display all the tasks

function displayTasks() {
    const todoListContainer = document.getElementById("todoList"); // fixed
    todoListContainer.innerHTML = "";

    taskList.forEach((task, index) => {
        const li = document.createElement("li");
        
        // checkbox create
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // span  element to display the task
        const span = document.createElement("span");
        span.textContent = task;
        checkbox.onchange = () => span.classList.toggle("completed"); 
        // dlt button instead of icon i used an emoji

        const dltBtn = document.createElement("button");
        dltBtn.textContent = "🗑️";
        dltBtn.className = "delete-btn";
        dltBtn.onclick = () => {
            if(checkbox.checked){
                deleteTask(index);
            }
            else{
                alert("Please check the checkbox before deleting")
            }
        };
        // separate div for each list component (tasks) 
        const left = document.createElement("div");
        left.className = "left";
        left.append(checkbox, span);

        li.append(left, dltBtn);
        todoListContainer.appendChild(li);
    });
}

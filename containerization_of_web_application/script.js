function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;
    
    if (taskText.trim() !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        li.textContent = taskText;
        li.addEventListener("click", toggleTask);
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

function toggleTask() {
    this.classList.toggle("completed");
}

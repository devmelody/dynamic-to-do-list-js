document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  let taskArray = [];

  // Create and render a task item
  function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    // Remove button
    const btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.classList.add("remove-btn");

    btn.onclick = function () {
      li.remove();
      taskArray = taskArray.filter((t) => t !== taskText);
      localStorage.setItem("tasks", JSON.stringify(taskArray));
    };

    li.appendChild(btn);
    taskList.appendChild(li);
  }

  // Load from localStorage
  function loadTasksFromLocalStorage() {
    const savedTasks = localStorage.getItem("tasks");
    taskArray = savedTasks ? JSON.parse(savedTasks) : [];
    taskArray.forEach((task) => createTaskElement(task));
  }

  // Add new task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) {
      alert("Enter a task");
      return;
    }

    createTaskElement(taskText);
    taskArray.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(taskArray));
    taskInput.value = "";
  }

  // Load when page is refreshed
  loadTasksFromLocalStorage();

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});

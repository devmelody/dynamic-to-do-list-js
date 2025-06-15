document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  //create add task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) {
      alert("Enter a task");
      return;
    } else {
      //task content
      const li = document.createElement("li");
      li.textContent = taskText;
      //Remove button
      const btn = document.createElement("button");
      btn.textContent = "Remove";
      btn.className = "remove-btn";
      btn.onclick = function () {
        li.remove();
      }
      li.appendChild(btn);
      taskList.appendChild(li);
      taskInput.value = "";
    }
}
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
})
document.addEventListener('DOMContentLoaded', () => {
    addTask();
})
  //create display task
  //create remove task
});

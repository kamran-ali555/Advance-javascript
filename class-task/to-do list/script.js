const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-gray-100 p-3 rounded-lg";

    li.innerHTML = `
      <span>${taskText}</span>
      <button class="text-red-500 hover:text-red-700" onclick="this.parentElement.remove()">✖</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
    taskInput.focus();
  }
});


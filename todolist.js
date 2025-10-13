

document.body.style.fontFamily = "Arial";
document.body.style.margin = "30px";

const heading = document.createElement("h2");
heading.textContent = "📋 AJAX To-Do List";
document.body.appendChild(heading);

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter new task";
input.style.padding = "8px";
input.style.margin = "4px";

const addBtn = document.createElement("button");
addBtn.textContent = "Add Task";
addBtn.style.padding = "8px";
addBtn.style.margin = "4px";

const viewBtn = document.createElement("button");
viewBtn.textContent = "View All Tasks";
viewBtn.style.padding = "8px";
viewBtn.style.margin = "4px";

const list = document.createElement("ul");
list.style.listStyle = "none";
list.style.padding = "0";

document.body.append(input, addBtn, viewBtn, list);

const apiUrl = "http://localhost:3000/tasks";
function getTasks() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const tasks = JSON.parse(xhr.responseText);
      renderTasks(tasks);
    } else {
      alert("Error fetching tasks");
    }
  };

  xhr.onerror = function () {
    alert("Network error");
  };

  xhr.send();
}

function renderTasks(tasks) {
  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.style.background = "#f2f2f2";
    li.style.margin = "5px 0";
    li.style.padding = "8px";
    li.style.borderRadius = "5px";
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = task.name;

    const buttonDiv = document.createElement("div");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.style.marginLeft = "8px";
    editBtn.onclick = () => updateTask(task.id);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "8px";
    deleteBtn.onclick = () => deleteTask(task.id);

    buttonDiv.append(editBtn, deleteBtn);
    li.append(nameSpan, buttonDiv);
    list.appendChild(li);
  });
}

function addTask() {
  const name = input.value.trim();
  if (!name) return alert("Enter a task!");

  const xhr = new XMLHttpRequest();
  xhr.open("POST", apiUrl, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    if (xhr.status === 201) {
      getTasks();
      input.value = "";
    } else {
      alert("Failed to add task");
    }
  };

  xhr.send(JSON.stringify({ name }));
}

function updateTask(id) {
  const newName = prompt("Enter updated task name:");
  if (!newName) return;

  const xhr = new XMLHttpRequest();
  xhr.open("PUT", `${apiUrl}/${id}`, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    if (xhr.status === 200) {
      getTasks();
    } else {
      alert("Failed to update task");
    }
  };

  xhr.send(JSON.stringify({ name: newName }));
}
function deleteTask(id) {
  if (!confirm("Are you sure you want to delete this task?")) return;

  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `${apiUrl}/${id}`, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      getTasks();
    } else {
      alert("Failed to delete task");
    }
    
  };

  xhr.send();
}
addBtn.onclick = addTask;
viewBtn.onclick = getTasks;
getTasks();

function displayTask() {
  const todoInput = document.getElementById("todo-input");
  const addButton = document.getElementById("add-button");
  const todoList = document.getElementById("todo-list");
  const filterDropdown = document.querySelector(".filter");
  const cancelButton = document.querySelector(".cancel");
  const logoutButton = document.getElementById("logout-button");
  const user = JSON.parse(localStorage.getItem("user"))[0];
  // support function
  function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem(user.id)) || [];
    for (const task of tasks) {
      createTask(task);
    }
  }
  function updateLocalStorage() {
    const tasks = todoList.querySelectorAll("span");
    const taskList = Array.from(tasks).map((taskSpan) => taskSpan.textContent);
    localStorage.setItem(user.id, JSON.stringify(taskList));
  }
  // main function
  loadTasksFromLocalStorage();

  function createTask(taskName) {
    const taskDiv = document.createElement("div");
    taskDiv.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskName;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";

    editButton.addEventListener("click", function () {
      const taskInput = document.createElement("input");
      taskInput.type = "text";
      taskInput.value = taskSpan.textContent;
      taskDiv.replaceChild(taskInput, taskSpan);

      // Create a save button
      const saveButton = document.createElement("button");
      saveButton.textContent = "Save";
      taskDiv.replaceChild(saveButton, editButton);

      saveButton.addEventListener("click", function () {
        taskSpan.textContent = taskInput.value;
        taskDiv.replaceChild(taskSpan, taskInput);
        taskDiv.replaceChild(editButton, saveButton);
        updateLocalStorage();
      });
    });

    //Delete task
    deleteButton.addEventListener("click", function () {
      todoList.removeChild(taskDiv);
      filterTasks();
      updateLocalStorage();
    });

    //Checkbox task
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        taskDiv.classList.add("completed");
        todoList.appendChild(taskDiv);
      } else {
        taskDiv.classList.remove("completed");
      }
      filterTasks();
      updateLocalStorage();
    });

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(editButton);
    taskDiv.appendChild(deleteButton);
    todoList.appendChild(taskDiv);

    todoInput.value = "";
    filterTasks();
  }

  addButton.addEventListener("click", function () {
    const taskName = todoInput.value.trim();
    if (taskName !== "") {
      createTask(taskName);
    } else if (taskName === "") {
      alert("Please input task name before adding a task");
    }
    updateLocalStorage();
  });

  // Cancel-input
  cancelButton.addEventListener("click", function () {
    todoInput.value = "";
  });

  // Filter task
  function filterTasks() {
    const filterValue = filterDropdown.value;
    const tasks = todoList.querySelectorAll(".todo-item");

    tasks.forEach((task) => {
      const isCompleted = task.classList.contains("completed");
      const displayStyles = {
        all: "flex",
        done: isCompleted ? "flex" : "none",
        undone: isCompleted ? "none" : "flex",
      };
      task.style.display = displayStyles[filterValue] || "none";
    });
  }
  function logout() {
    localStorage.setItem("rememberMe", "false");
    sessionStorage.setItem("rememberMe", "false");
    location.assign("../html/signIn.html");
  }

  filterDropdown.addEventListener("change", filterTasks);
  logoutButton.addEventListener("click", logout);
}

document.addEventListener("DOMContentLoaded", displayTask);

// Get DOM elements
const form = document.getElementById("form");
const textInput = document.getElementById("textInput");
const dateInput = document.getElementById("dateInput");
const textarea = document.getElementById("textarea");
const msg = document.getElementById("msg");
const tasks = document.getElementById("tasks");
const add = document.getElementById("add");

// Event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

// Form validation function
const formValidation = () => {
  if (textInput.value === "") {
    msg.innerHTML = "Task cannot be blank";
  } else {
    msg.innerHTML = "";
    addTaskToLocalStorage();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();
    add.removeAttribute("data-bs-dismiss");
  }
};

// Initialize tasks data from local storage
let data = JSON.parse(localStorage.getItem("data")) || [];

// Add task to local storage
const addTaskToLocalStorage = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  });
  localStorage.setItem("data", JSON.stringify(data));
  createTasks();
};

// Create tasks in the UI
const createTasks = () => {
  tasks.innerHTML = "";
  data.forEach((task, index) => {
    tasks.innerHTML += `
      <div id=${index}>
        <span class="fw-bold">${task.text}</span>
        <span class="small text-secondary">${task.date}</span>
        <p>${task.description}</p>
        <span class="options">
          <i onClick="editTask(${index})" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
          <i onClick="deleteTask(${index})" class="fas fa-trash-alt"></i>
        </span>
      </div>
    `;
  });
  resetForm();
};

// Delete a task
const deleteTask = (index) => {
  tasks.querySelector(`div[id="${index}"]`).remove();
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
};

// Edit a task
const editTask = (index) => {
  const selectedTask = data[index];
  textInput.value = selectedTask.text;
  dateInput.value = selectedTask.date;
  textarea.value = selectedTask.description;
  deleteTask(index);
};

// Reset the form
const resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};

// Initial setup
createTasks();

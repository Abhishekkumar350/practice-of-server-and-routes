// Function to add a task to LocalStorage
function addTask(subject) {
  const input = document.getElementById("task-input");
  const taskValue = input.value;

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  // Get existing tasks or create an empty array
  let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

  // Add the new task with its subject label
  tasks.push({ subject: subject, text: taskValue });

  // Save back to LocalStorage
  localStorage.setItem("myTasks", JSON.stringify(tasks));

  // Clear input and give feedback
  input.value = "";
  alert(subject + " task added!");
}

// Function to display tasks on the Home page
function displayTasks() {
  const taskList = document.getElementById("task-list");
  let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

  taskList.innerHTML = ""; // Clear list before rendering

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>[${task.subject}]</strong> ${task.text}`;
    taskList.appendChild(li);
  });
}

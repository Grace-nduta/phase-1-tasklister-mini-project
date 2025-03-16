document.addEventListener("DOMContentLoaded", () => {
  // Select the form and task list elements
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  const sortButton = document.getElementById("sort-tasks");

  // Add an event listener to handle form submission
  form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value of the task description input field
    const taskDescription = document.getElementById("new-task-description").value;
    // Get the value of the task priority
    const taskPriority = document.getElementById("task-priority").value;

    // Create a new list item element
    const taskItem = document.createElement("li");
    // Set the text content of the list item to the task description
    taskItem.textContent = taskDescription;
    // Add the priority class to the task item
    taskItem.classList.add(taskPriority);
    console.log(`Added task with priority: ${taskPriority}`);

    // Create a delete button for each task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      taskList.removeChild(taskItem);
    });

    // Append the delete button to the task item
    taskItem.appendChild(deleteButton);
    // Append the new task item to the task list
    taskList.appendChild(taskItem);

    // Reset the form fields
    form.reset();
  });

  // Add an event listener to handle sorting tasks by priority
  sortButton.addEventListener("click", function() {
    console.log("Sort button clicked");
    // Get all task items
    const tasks = Array.from(taskList.getElementsByTagName("li"));
    console.log("Tasks before sorting:", tasks);
    // Sort tasks based on their priority class
    tasks.sort((a, b) => {
      const priorityOrder = ["high", "medium", "low"];
      return priorityOrder.indexOf(a.classList[0]) - priorityOrder.indexOf(b.classList[0]);
    });
    console.log("Tasks after sorting:", tasks);
    // Clear the task list
    taskList.innerHTML = "";
    // Append sorted tasks back to the task list
    tasks.forEach(task => taskList.appendChild(task));
    console.log("Tasks sorted by priority");
  });
});

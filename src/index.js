document.addEventListener("DOMContentLoaded", () => {
  // Select the form and task list elements
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  const sortButton = document.getElementById("sort-tasks");

  form.addEventListener("submit", function(event) {
    // Prevent the page from reloading upon form submission
    event.preventDefault();

    
    const taskDescription = document.getElementById("new-task-description").value;
  
    const taskPriority = document.getElementById("task-priority").value;

    const taskItem = document.createElement("li");
    
    taskItem.textContent = taskDescription;
    
    taskItem.classList.add(taskPriority);
    console.log(`Added task with priority: ${taskPriority}`); // Log the added task priority

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      taskList.removeChild(taskItem);
    });

    
    taskItem.appendChild(deleteButton);
    
    taskList.appendChild(taskItem);

    form.reset();
  });

  // Sort tasks by their priority when the "Sort" button is clicked
  sortButton.addEventListener("click", function() {
    console.log("Sort button clicked");// Log when the sort button is activated

      // Convert the task list items into an array for sorting
    const tasks = Array.from(taskList.getElementsByTagName("li"));
    console.log("Tasks before sorting:", tasks); // Log the tasks before sorting
     // Sort tasks based on their priority
    tasks.sort((a, b) => {
      const priorityOrder = ["high", "medium", "low"];// Define the priority order
      return priorityOrder.indexOf(a.classList[0]) - priorityOrder.indexOf(b.classList[0]);
    });
    console.log("Tasks after sorting:", tasks);// Log the tasks after sorting
     // Clear the current task list and re-append the sorted tasks
    taskList.innerHTML = "";

    tasks.forEach(task => taskList.appendChild(task));
    console.log("Tasks sorted by priority");// Log the successful sort operation
  });
});

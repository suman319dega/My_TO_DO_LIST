// Get references to the HTML elements
const input = document.getElementById('task-input'); // input box
const addBtn = document.getElementById('add-btn');   // 'Add' button
const taskList = document.getElementById('task-list'); // <ul> to show tasks

// When button is clicked, call addTask function
addBtn.addEventListener('click', addTask);

// Also add task when Enter key is pressed inside input field
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Function to add a new task
function addTask() {
  const taskText = input.value.trim(); // get text from input
  if (taskText === '') return; // do nothing if input is empty

  // Create a new list item <li>
  const taskItem = document.createElement('li');
  taskItem.className = 'task'; // add class for styling

  // Create a <span> to hold the task text
  const taskName = document.createElement('span');
  taskName.textContent = taskText;

  // Double-click to edit task
  taskName.addEventListener('dblclick', () => {
    const newText = prompt('Edit your task:', taskName.textContent);
    if (newText && newText.trim() !== '') {
      taskName.textContent = newText.trim();
    }
  });

  // Create a delete button (×)
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '&times;'; // × symbol
  deleteBtn.addEventListener('click', () => {
    const confirmDelete = confirm('Do you want to delete this task?');
    if (confirmDelete) {
      taskItem.remove(); // remove the task
    }
  });

  // Add text and delete button into <li>
  taskItem.appendChild(taskName);
  taskItem.appendChild(deleteBtn);

  // Add the <li> into the task list
  taskList.appendChild(taskItem);

  // Clear the input box
  input.value = '';
}

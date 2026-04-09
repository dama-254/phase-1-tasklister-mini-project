document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
const taskForm = document.getElementById('task-form')
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')

taskForm.addEventListener('submit', function(event) {
    event.preventDefault()  // stops page from refreshing

    const taskText = taskInput.value

    const li = document.createElement('li')
    li.textContent = taskText

    taskList.appendChild(li)

    taskInput.value = ''  // clears the input after submission
})
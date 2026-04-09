const taskForm = document.getElementById('create-task-form')

taskForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const task = event.target['new-task-description'].value

    buildToDo(task)
})

function buildToDo(task) {
    const li = document.createElement('li')
    li.textContent = task

    const taskList = document.getElementById('task')
    taskList.appendChild(li)
}
// 
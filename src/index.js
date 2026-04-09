const taskForm = document.getElementById('create-task-form')
console.log('form:', taskForm) // should NOT be null

taskForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const task = event.target['new-task-description'].value
    console.log('task entered:', task) // should show what you typed

    buildToDo(task)
})

function buildToDo(task) {
    const li = document.createElement('li')
    li.textContent = task

    const taskList = document.getElementById('task')
    console.log('task list:', taskList) // should NOT be null
    taskList.appendChild(li)
}
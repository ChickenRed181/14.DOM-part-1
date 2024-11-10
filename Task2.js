
const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
]

const tasksList = document.querySelector('.tasks-list')

tasks.forEach(task => {
    const taskItem = document.createElement('div')
    taskItem.className = 'task-item'
    taskItem.setAttribute('data-task-id', task.id)

    const mainContainer = document.createElement('div')
    mainContainer.className = 'task-item__main-container'

    const mainContent = document.createElement('div')
    mainContent.className = 'task-item__main-content'

    const checkboxForm = document.createElement('form')
    checkboxForm.className = 'checkbox-form'

    const checkbox = document.createElement('input')
    checkbox.className = 'checkbox-form__checkbox'
    checkbox.type = 'checkbox'
    checkbox.id = `task-${task.id}`

    const label = document.createElement('label')
    label.htmlFor = `task-${task.id}`

    checkboxForm.appendChild(checkbox)
    checkboxForm.appendChild(label)
   
    const taskText = document.createElement('span')
    taskText.className = 'task-item__text'
    taskText.textContent = task.text

    mainContent.appendChild(checkboxForm)
    mainContent.appendChild(taskText)
    mainContainer.appendChild(mainContent)

    const deleteButton = document.createElement('button')
    deleteButton.className = 'task-item__delete-button default-button delete-button'
    deleteButton.textContent = 'Удалить'

    mainContainer.appendChild(deleteButton)
    taskItem.appendChild(mainContainer)

    tasksList.appendChild(taskItem)
})

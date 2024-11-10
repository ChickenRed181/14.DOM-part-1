// Массив задач
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
];

// Получаем контейнер для задач
const tasksList = document.querySelector('.tasks-list');

// Проходим по массиву задач и создаем элементы
tasks.forEach(task => {
    // Создаем контейнер для каждой задачи
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.setAttribute('data-task-id', task.id); // Устанавливаем атрибут data-task-id

    // Создаем основной контейнер
    const mainContainer = document.createElement('div');
    mainContainer.className = 'task-item__main-container';

    // Создаем контейнер для основного содержимого
    const mainContent = document.createElement('div');
    mainContent.className = 'task-item__main-content';

    // Создаем форму с чекбоксом
    const checkboxForm = document.createElement('form');
    checkboxForm.className = 'checkbox-form';

    const checkbox = document.createElement('input');
    checkbox.className = 'checkbox-form__checkbox';
    checkbox.type = 'checkbox';
    checkbox.id = `task-${task.id}`; // Устанавливаем id для чекбокса

    const label = document.createElement('label');
    label.htmlFor = `task-${task.id}`; // Устанавливаем for для метки

    checkboxForm.appendChild(checkbox);
    checkboxForm.appendChild(label);

    // Создаем элемент span для текста задачи
    const taskText = document.createElement('span');
    taskText.className = 'task-item__text';
    taskText.textContent = task.text; // Устанавливаем текст задачи

    // Добавляем все элементы в основной контейнер
    mainContent.appendChild(checkboxForm);
    mainContent.appendChild(taskText);
    mainContainer.appendChild(mainContent);

    // Создаем кнопку для удаления
    const deleteButton = document.createElement('button');
    deleteButton.className = 'task-item__delete-button default-button delete-button';
    deleteButton.textContent = 'Удалить';

    // Добавляем основное содержимое и кнопку удаления в контейнер задачи
    mainContainer.appendChild(deleteButton);
    taskItem.appendChild(mainContainer);

    // Добавляем задачу в список задач
    tasksList.appendChild(taskItem);
});

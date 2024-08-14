document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.querySelector('#task-input-form');
    const taskInput = document.querySelector('#task-input-field');
    const todoList = document.querySelector('.todo-list');

    taskForm.addEventListener('submit', e => {
        e.preventDefault();

        addNewTask();
        taskInput.value = '';
    })

    // add new task function
    function addNewTask() {
        const listItem = document.createElement('li');

        // task complete button
        const completedBtn = document.createElement('input');
        completedBtn.type = 'checkbox';
        completedBtn.classList.add('mark-btn');
        listItem.appendChild(completedBtn);

        // task content element
        const taskElement = document.createElement('p');
        taskElement.textContent = taskInput.value;
        listItem.appendChild(taskElement)

        //task option wrapper
        const taskOptions = document.createElement('div');
        taskOptions.classList.add('options');
        listItem.appendChild(taskOptions);

        // delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
        deleteBtn.classList.add('delete-btn');
        taskOptions.appendChild(deleteBtn)

        // edit button
        const editBtn = document.createElement('button');
        editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
        editBtn.classList.add('edit-btn');
        taskOptions.appendChild(editBtn)

        // append task item into todo list
        todoList.appendChild(listItem);

        // delete task
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });

        // edit task
        editBtn.addEventListener('click', () => {
            const updatedTask = prompt('Enter your task here...');
            taskElement.textContent = updatedTask;
        });

        // mark as completed
        completedBtn.addEventListener('change', () => {
            if (completedBtn.checked) {
                taskElement.classList.add('task-completed');
            } else {
                taskElement.classList.remove('task-completed');
            }
        })

    }
})
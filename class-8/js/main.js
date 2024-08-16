document.addEventListener('DOMContentLoaded', () => {
    const toastMessage = document.querySelector('.toast-message');
    {
        const taskForm = document.querySelector('#task-input-form');
        const taskInput = document.querySelector('#task-input-field');
        const todoList = document.querySelector('.todo-list');

        taskForm.addEventListener('submit', e => {
            e.preventDefault();

            if (taskInput.value) {
                addNewTask();
                taskInput.value = '';
            } else {
                toastMessage.classList.add('show-toast');
                setTimeout(() => {
                    toastMessage.classList.remove('show-toast');
                }, 3000);
            }
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
    }
    {
        const inputForm = document.querySelector('#city-input-form');
        const cityInputField = document.querySelector('#city-input-field');
        const key = '031770584637815d3aa5df68729fc795';
        const weatherContentWrapper = document.querySelector('#weather-display-content');

        inputForm.addEventListener('submit', e => {
            e.preventDefault();
            let city = cityInputField.value;
            searchWeather(city);
            cityInputField.value = '';
        });

        // search weather by city name
        async function searchWeather(city) {
            if (city) {
                try {
                    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
                    const data = await res.json();
                    console.log(data);
                    displayWeather(data);
                } catch (error) {
                    console.log('Failed to fetch weather data');
                    console.log(error);
                }
            } else {
                toastMessage.classList.add('show-toast');
                setTimeout(() => {
                    toastMessage.classList.remove('show-toast');
                }, 3000);
            }
        }

        // display weather function
        function displayWeather(data) {
            weatherContentWrapper.innerHTML = '';
            weatherContentWrapper.innerHTML = `
            <div class="weather-display-card">
                    <span class="sun-time sunrise">Sunrise: ${getSunTime(data?.sys?.sunrise)}</span>
                    <span class="sun-time sunset">Sunset: ${getSunTime(data?.sys?.sunset)}</span>
                    <h3 class="city-name">${data?.name}</h3>
                    <div class="temperature-wrap">
                        <span class="temperature">
                            <span>${Math.floor(data?.main?.temp) - 273}<sup>°</sup>C</span>
                            <span class="weather-description">${data?.weather[0]?.description}</span>
                        </span>
                        <span class="temp-feel">Feel like <span>${Math.floor(data?.main?.feels_like) - 273}<sup>o</sup></span></span>
                    </div>
                    <ul class="temp-meta">
                    <li>
                        <h6>Min</h6>
                        <span>${Math.floor(data?.main?.temp_min) - 273}<sup>o</sup></span>
                    </li>
                    <li>
                        <h6>Humidity</h6>
                        <span>${data?.main?.humidity}%</span>
                    </li>
                    <li>
                        <h6>Max</h6>
                        <span>${Math.floor(data?.main?.temp_max) - 273}<sup>o</sup></span>
                    </li>
                </ul>
            </div>
            `
        }

        function getSunTime(miliseconds) {
            let time = new Date(miliseconds * 1000);
            return `${time.toLocaleTimeString()}`;
        }
    }
})
document.getElementById('addTaskButton').addEventListener('click', function () {
    const title = document.getElementById('taskTitle').value.trim();
    const description = document.getElementById('taskDescription').value.trim();
    const date = document.getElementById('taskDate').value;
    const time = document.getElementById('taskTime').value;

    if (!title || !description || !date || !time) {
        alert("Please fill in all fields!");
        return;
    }

    const task = {
        title,
        description,
        date,
        time
    };

    addTaskToList(task);
    saveTask(task);
    clearInputs();
});

function addTaskToList(task) {
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${task.title}</strong>
        ${task.description}<br>
        📅 ${task.date} ⏰ ${task.time}
    `;
    document.getElementById('taskList').appendChild(li);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(addTaskToList);
}

function clearInputs() {
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskDate').value = '';
    document.getElementById('taskTime').value = '';
}

loadTasks();

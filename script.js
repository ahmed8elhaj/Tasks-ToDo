const title = document.getElementById('title');
const description = document.getElementById('description');
const statusTask = document.getElementById('status')
const taskForm = document.getElementById('task-form');
const taskTable = [];

console.log(taskTable);


function pushDataOnTable() {
    taskTable.push({
        title: title.value.trim(),
        description: description.value.trim(),
        statusTask: statusTask.value.trim()
    })

}


function createTask() {
    const element = document.createElement('div');
    element.innerHtml = `
    <h3 class="font-semibold">${title}</h3>
          <p class="text-sm text-slate-600 mt-1">${description}</p>
          <span class="inline-block text-xs bg-slate-200 rounded-full px-2 py-1 mt-2">${statusTask}</span>
    `
}

taskForm.addEventListener('submit', event => {
    event.preventDefault();
    pushDataOnTable()
    createTask()
    console.log(taskTable);
})

const DOM = {
    task: null,
    time: null,
    date: null,
    notesBody: null,
};

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function init() {
    DOM.task = document.querySelector("#task");
    DOM.time = document.querySelector("#time");
    DOM.date = document.querySelector("#date");
    DOM.notesBody = document.querySelector("#notesBody");



    const addNewTaskButton = document.querySelector("#addNewTaskButton");
    addNewTaskButton.addEventListener("click", addNewTask);

    const clearFormButton = document.querySelector("#clearForm");
    clearFormButton.addEventListener("click", clearForm);

    draw(tasks);
}


function addNewTask(event) {
    if (DOM.task.value === "") {
        return alert(`please Enter A Task`)

    } else if (DOM.time.value === "") {
        return alert(`please Enter Time`)
    }
    else if (DOM.date.value === "") {
        return alert(`please Enter Date`)
    }


    tasks.push(new Tasks(DOM.task.value, DOM.time.value, DOM.date.value));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    draw(tasks);

}


function clearForm() {
    DOM.task.value = " ";
    DOM.time.value = " ";
    DOM.date.value = " ";

}

function clearNotesBody() {
    DOM.notesBody.innerHTML = "";
}



function draw(tasksArray) {

    clearNotesBody();

    if (Array.isArray(tasksArray) === false) return;


    for (let index = 0; index < tasksArray.length; index++) {
        const currentTask = tasksArray[index];

        const noteDiv = document.createElement("div");
        noteDiv.classList.add("noteDiv", "notes");

        const noteTask = document.createElement("div");
        noteTask.innerText = currentTask.task;
        noteTask.classList.add("noteTask");

        const noteDateAndTime = document.createElement("div");
        noteDateAndTime.innerText = `${currentTask.date} ${currentTask.time}`;
        noteDateAndTime.classList.add("noteDateAndTime");

        const deletButtonDiv = document.createElement("div");
        deletButtonDiv.classList.add("deletButton");
        const deletButton = document.createElement("button");
        deletButton.classList.add("btn", "btn-outline-danger", "showButton");
        deletButton.innerText = "X";
        deletButtonDiv.append(deletButton);
        deletButton.addEventListener("click", function () {
            const indexToDelete = tasks.findIndex(function (c) {
                return currentTask.taskNumber === c.taskNumber;
            });
            tasks.splice(indexToDelete, 1);
            draw(tasks)
            localStorage.setItem("tasks", JSON.stringify(tasks));



        });


        noteDiv.append(deletButtonDiv, noteTask, noteDateAndTime);
        DOM.notesBody.append(noteDiv);

    }

}

init();



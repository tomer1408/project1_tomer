const DOM = {
    task: null,
    time: null,
    date: null,
    notesBody: null,
    urgency: null,
};

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function init() {
    DOM.task = document.querySelector("#task");
    DOM.time = document.querySelector("#time");
    DOM.date = document.querySelector("#date");
    DOM.notesBody = document.querySelector("#notesBody");
    DOM.urgency = document.querySelector("#urgency");



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


    tasks.push(new Tasks(DOM.task.value, DOM.time.value, DOM.date.value, DOM.urgency.value));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    draw(tasks);

}


function clearForm() {
    DOM.task.value = " ";
    DOM.time.value = " ";
    DOM.date.value = " ";
    DOM.urgency.value = "select priority";

}

function clearNotesBody() {
    DOM.notesBody.innerHTML = "";
}



function draw(tasksArray) {


    clearNotesBody();

    if (Array.isArray(tasksArray) === false) return;


    for (let index = 0; index < tasksArray.length; index++) {
        const iconVeryImportant = document.createElement("img");
        iconVeryImportant.src = "Assetst/Image/veryImportant.png"
        iconVeryImportant.height = 20;
        iconVeryImportant.width = 20;

        const iconImportant = document.createElement("img");
        iconImportant.src = "Assetst/Image/important.png"
        iconImportant.height = 20;
        iconImportant.width = 20;

        const iconLite = document.createElement("img");
        iconLite.src = "Assetst/Image/lite.png"
        iconLite.height = 20;
        iconLite.width = 20;

        const iconMedium = document.createElement("img");
        iconMedium.src = "Assetst/Image/medium.png"
        iconMedium.height = 20;
        iconMedium.width = 20;

        const currentTask = tasksArray[index];

        const noteDiv = document.createElement("div");
        noteDiv.classList.add("noteDiv", "notes", "fadeIn");

        const noteTask = document.createElement("div");
        noteTask.innerText = currentTask.task;
        noteTask.classList.add("noteTask");

        const noteDateAndTime = document.createElement("div");
        noteDateAndTime.innerText = `${currentTask.date} ${currentTask.time}`;
        noteDateAndTime.classList.add("noteDateAndTime");

        const deletButtonDiv = document.createElement("div");
        deletButtonDiv.classList.add("deletButton");
        const urgencyIcon = document.createElement("span");
        switch (currentTask.urgency) {
            case "veryImportamt":
                urgencyIcon.append(iconVeryImportant);
                break;
            case "important":
                urgencyIcon.append(iconImportant);
                break;
            case "medium":
                urgencyIcon.append(iconMedium);
                break;
            case "lite":
                urgencyIcon.append(iconLite);
                break;


        }

        const deletButton = document.createElement("button");
        deletButton.classList.add("buttonSpan", "bi", "bi-x-circle-fill");
        deletButtonDiv.append(deletButton, urgencyIcon);
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



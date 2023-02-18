function Tasks(
    task,
    time,
    date,

) {
    this.taskNumber = `Task_${Math.ceil(Math.random() * 99999999999)}`;
    this.task = task;
    this.time = time;
    this.date = date;

}


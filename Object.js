function Tasks(
    task,
    time,
    date,
    urgency

) {
    this.taskNumber = `Task_${Math.ceil(Math.random() * 99999999999)}`;
    this.task = task;
    this.time = time;
    this.date = date;
    this.urgency = urgency;

}


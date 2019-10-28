
// Implementation of CRUD interface for a Model 

class Model {
    constructor() {
        this.tasks = [];
        this.reminders = [];
    }

    addTask(props) {
        const task = {
            id: this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1,
            description: props.tasksDescription,
            workload: props.hours,
            place: props.hours, 
            isCompleted: true
        }

        this.tasks.push(task)
    }

    addReminder(props) {
        const reminder = {
            id: this.reminders.length > 0 ? this.reminders[this.reminders.length - 1].id + 1 : 1,
            description: props.description,
            strike_date: props.strikeDate,
            priority: props.priority,
            status: props.status
        }
    }

    deleteTask(id) {
        this.tasks.filter(tasks => tasks.id != id)
    }

    deleteReminder(id) {
        this.reminders.filter(reminders => reminders.id != id)
    }

    editTask(id, props) {
        this.taks = this.tasks.map(task => task.id === id ? {
            id: task.id,
            description: props.description,
            workload: props.workload,
            place: props.workload
        } : task)
    }

    editReminder(id, props) {
        this.reminders = this.reminders.map(reminder => reminder.id === id ?
            {   id: reminder.id,
                description: props.description,
                strike_date: props.strike_date,
                priority: props.priority
            } : reminder)
    }

    toggleTask(id) {
        this.tasks = this.tasks.map(task => task.id === id ?
            {
                id: task.id,
                description: description,
                workload: workload,
                priority: priority,
                isCompleted: false
            } : task)
        
    }

    toggleReminder(id) {}

}


class View {}

class Controller {
    constructor(options) {
        this.model = options.model;
        this.view = options.view;
    }
}



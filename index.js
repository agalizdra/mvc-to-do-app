class Model {
    constructor() {
        this.tasks = [];
        this.reminders = [];
    }

    addTask(description, workload, place) {
        const task = {
            id: this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1,
            timestamp: new Date().toUTCString(),
            description: description,
            workload: workload,
            place: place, 
            isCompleted: false,
        }

        this.tasks.push(task)
    }

    defineStrikeDate(strikeDate) {
        if (isNaN(new Date(strikeDate))) {
            throw new SyntaxError("Date format is incorrect")
        } else if (!(new Date(strikeDate) > new Date())) {
            throw new RangeError("Specify an upcoming date")
        } else {
            return new Date(strikeDate)
        }
    }

    addReminder(description, strikeDate, priority) {
        const reminder = {
            id: this.reminders.length > 0 ? this.reminders[this.reminders.length - 1].id + 1 : 1,
            timestamp: new Date().getTime(),
            description: description,
            strikeDate: this.defineStrikeDate(strikeDate),
            priority: priority,
            remainingTime: this.calculateRemainingTime(strikeDate)
        }

        this.reminders.push(reminder)
    }

    deleteTasks(...ids) {
        this.tasks = this.tasks.filter(task => !ids.includes(task.id))

        this.tasks = this.tasks.map(task => { return {
            id: this.tasks.indexOf(task) + 1,
            timestamp: task.timestamp,
            description: task.description,
            workload: task.workload,
            place: task.place,
            isCompleted: task.isCompleted
        }})
    }

    deleteReminders(...ids) {
        this.reminders = this.reminders.filter(reminder => !ids.includes(reminder.id))

        this.reminders = this.reminders.map(reminder => { return {
            id: this.reminders.indexOf(reminder) + 1,
            timestamp: reminder.timestamp,
            description: reminder.description,
            strikeDate: reminder.strikeDate,
            priority: reminder.priority,
            // status: this.defineStatus(),
            remainingTime: reminder.remainingTime
        }})
    }
  

    editTask(id, params) {
        this.tasks = this.tasks.map(task => task.id === id ?
        {   id: task.id,
            timestamp: task.timestamp,
            description: params.hasOwnProperty("description") ? params.description : task.description,
            workload: params.hasOwnProperty("workload") ? params.workload : task.workload,
            place: params.hasOwnProperty("place") ? params.place : task.place,
        } : task)
    }

    editReminder(id, params) {
        this.reminders = this.reminders.map(reminder => reminder.id === id ?
        {   id: reminder.id,
            timestamp: reminder.timestamp,
            description: params.hasOwnProperty("description") ? params.description : reminder.description,
            strikeDate: params.hasOwnProperty("strikeDate") ? new Date(params.strikeDate) : reminder.strikeDate,
            priority: params.hasOwnProperty("priority") ? params.priority : reminder.priority,
            remainingTime: params.hasOwnProperty("strikeDate") ? this.calculateRemainingTime(params.strikeDate) : reminder.remainingTime
        } : reminder)
    }


    toggleTask(id) {
        this.tasks = this.tasks.map(task => task.id === id ?
            {
                id: task.id,
                timestamp: task.timestamp,
                description: task.description,
                workload: task.workload,
                place: task.place,
                isCompleted: !task.isCompleted
            } : task)
    }

    calculateTotalWorkload() {
        let totalWorkloadDuration = 0;

        for (let task of this.tasks) {
            totalWorkloadDuration += task.workload;
        }
        return totalWorkloadDuration;
    }

    calculateRemainingTime(strikeDate) {
        let daysTimeDifference = (new Date(strikeDate) - new Date()) / (1000 * 3600 * 24)
        return `${Math.floor(daysTimeDifference)} days, ${Math.floor(daysTimeDifference % 1 * 24)} hours, ${Math.floor(daysTimeDifference % 1 * 24 % 1 * 60)} minutes`
    }

    // Enable sorting of tasks based on the following criteria:
    // id, description, workload, place, isCompleted
   
    sortTasks(param) {
        switch(param) {
            case "id":
                return this.tasks.sort((a, b) => a.id - b.id)
                .map(field => field.id)
            case "workload":
                return this.tasks.sort((a, b) => a.workload - b.workload)
                .map(field => field.id)
            case "description":
                return this.tasks.sort((a, b) => a.toString().toLowerCase().description - b.toString().toLowerCase().description)
                .map(field => field.id)
            case "place":
                return this.tasks.sort((a, b) => a.toString().toLowerCase().place - b.toString().toLowerCase().place)
                .map(field => field.id)
            case "isCompleted":
                return this.tasks.sort((a, b) => a.isCompleted - b.isCompleted)
                .map(field => field.id)
        }
    }

    // Enable sorting of reminders based on the following criteria:
    // id, description, strikeDate, priority

    sortRemainders(param) {
        switch(param) {
            case "id":
                return this.reminders.sort((a, b) => a.id - b.id)
                .map(field => field.id)
            case "description":
                return this.reminders.sort((a, b) => a.toString().toLowerCase().description - b.toString().toLowerCase().description)
                .map(field => field.id)
            case "strikeDate":
                return this.reminders.sort((a, b) => a.strikeDate - b.strikeDate)
                .map(field => field.id)
            case "priority":
                return this.reminders.sort((a, b) => a.priority - b.priority)
                .map(field => field.id)
        }
    }

    // Check out if the specified input can be found in the following fields of tasks array:
    // id, description, strikeDate, priority.
    // Not case-sensetive

    findInTasks(input) {

        let searchTerm = input.toString().toLowerCase()

        return this.tasks.filter(el => el.id.toString().toLowerCase().includes(searchTerm) ||
            el.description.toString().toLowerCase().includes(searchTerm) ||
            el.workload.toString().toLowerCase().includes(searchTerm) ||
            el.place.toString().toLowerCase().includes(searchTerm))
            .map(field => field.id)
    }

    // Check out if the specified input can be found in the following fields of reminders array:
    // id, description, strikeDate, priority
    // Not case-sensetive

    findInReminders(input) {
        
        let searchTerm = input.toString().toLowerCase()

        return this.reminders.filter(el => el.id.toString().toLowerCase().includes(searchTerm) || 
            el.description.toString().toLowerCase().includes(searchTerm) || 
            el.strikeDate.toString().toLowerCase().includes(searchTerm) || 
            el.priority.toString().toLowerCase().includes(searchTerm))
            .map(field => field.id)  
    }

    
}

class View {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }

    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }

    

}

class Controller {

}

const app = new Controller(new Model, new View)

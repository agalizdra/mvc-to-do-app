# My first implementation of a to-do app using MVC-pattern

It is a simple to-do app for managing tasks and reminders with an implemented logic of adding, deleting, toggling, and sorting entires. 

The following version comes up with `Model` entity implemented, while `View` and `Controller` classes are yet to be coded as well as the UI.

`Model` class currently has the following logic implemented:

- Addition of a single task / reminder
- Deletion of single or many tasks/reminders in a single query;
- Calculation of the total workload of tasks
- Defining `strikeDate` for reminders
- Sorting of tasks/reminders based on several criterion
- Scanning tasks/reminders to find the user input
- Changing the status of a task

The repository ships with a simple instance of a Mongo client, which I plan to integrate to an app while hosting it on a Heroku server.


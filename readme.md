# My first implementation of a to-do app using MVC-pattern

It is a simple to-do app coded in native JS for managing tasks and reminders with an implemented logic of manipulating tasks and reminders for a personal use.

The current version comes up with `Model` entity implemented, while `View` and `Controller` classes are yet to be coded as well as the UI.

`Model` class currently has the following logic:

- Addition of a single task / reminder
- Deletion of single or many tasks/reminders in a single user action
- Calculation of the total workload of tasks
- Defining `strikeDate` for reminders as a difference to the current date
- Sorting of tasks/reminders based on several criterion
- Scanning tasks/reminders to find the user input (not case-sensetive)
- Changing the status of a task

I plan to integrate the app with a Mongo DB, hence node_modules are added to the repo. The app will be hosted on a Heroku VPS.


# My first implementation of a to-do app using MVC-pattern

It is a simple to-do app coded in native JS for managing tasks and reminders with an implemented logic of adding, deleting, toggling, and sorting entires. 

The following version comes up with `Model` entity implemented, while `View` and `Controller` classes are yet to be coded as well as the UI.

`Model` class currently has the following logic implemented:

- Addition of a single task / reminder
- Deletion of single or many tasks/reminders in a single query;
- Calculation of the total workload of tasks
- Defining `strikeDate` for reminders
- Sorting of tasks/reminders based on several criterion
- Scanning tasks/reminders to find the user input
- Changing the status of a task

I plan to integratean an app to the Mongo DB and host it on a Heroku VPS.


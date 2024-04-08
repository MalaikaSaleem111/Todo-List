#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in your todo?"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more todo?",
            default: "true"
        }
    ]);
    todos.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todos);
}

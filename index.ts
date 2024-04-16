#! /usr/bin/env node


import inquirer from "inquirer"
let todo = []
let condition = true;

while(condition)
{
    let addTask = await inquirer.prompt(
    [
        {
            name:"todo",
            type:"input",
            message:"what you want to add in your TODO list?"
        },
        {
            name:"addmore",
            type:"confirm",
            message:"do you want to add more?",
            default:"true" 
        }
    ]
);
todo.push(addTask.todo);
console.log(todo);
condition=addTask.addmore;



}
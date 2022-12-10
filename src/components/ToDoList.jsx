import React, { useState, useRef } from "react";
import {CreateTask} from './CreateTask';
// import { useLocalStorage } from "./LocalStorage";



let todoList = [];
let key = 1;
let editKey = null;
let setStyling;


export const ToDoList = () => {
    const title = `To Do List Application`;

    const inputRef = useRef();

    const [inputTask, setInputTask] = useState("");
    const ReadTask = (e) => {
        setInputTask(e.target.value);
    }

    const [addTask, setAddTask] = useState({key: null, taskName: ""});
    const AddTask = () => {
        setAddTask( () => {
            let newTask = {...addTask, key: key, taskName: inputTask};
            todoList.push(newTask);
            key++;
            return (newTask);
        });

        setInputTask("");
    }

    const [buttonText, setButtonText] = useState("Add");
    // const [getLocalStorage] = useLocalStorage();
    // const [selectedKey, selectedTask] = getLocalStorage();

    const EditTask = (selectedKey, selectedTask, setClassname) => {
        setInputTask(selectedTask);
        setButtonText("Save");
        inputRef.current.focus();

        editKey = selectedKey;
        setStyling = setClassname;
    }

    const UpdateTask = () => {
        let task_idx = todoList.findIndex((task => task.key === editKey));
        todoList[task_idx].taskName = inputTask;

        setButtonText("Add");
        setInputTask("");
        setStyling('task');
    }

    const DeleteTask = (selectedKey) => {
        todoList = todoList.filter( (task) => {
            return task.key != selectedKey;
        });

        setAddTask({key: null, taskName: ""});
    }

    return (
        <>
            <h1 className="heading">{title}</h1>

            <div className="create-todo">
                <input ref={inputRef} type="text" className="input-task" placeholder="Enter your task . . . . ."
                onChange={ (event) => { ReadTask(event) } } value={inputTask} />

                <button className="add-task" type="button" onClick={ buttonText === "Add" ? AddTask : UpdateTask }
                disabled={!inputTask.length}>{buttonText}</button>
            </div>

            <div className="display-todo">
                {todoList.map( (task) => (
                    <CreateTask key={task.key} task={task} EditTask={ EditTask } DeleteTask={ DeleteTask } editMode={buttonText === 'Add' ? false : true}/>
                ) )}
            </div>
        </>
    )
}

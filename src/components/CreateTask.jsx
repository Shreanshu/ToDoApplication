import React, { useState } from "react";
// import { useLocalStorage } from "./LocalStorage";
// import EditIcon from './images/Edit-Icon.png';
// import DeleteIcon from './images/Delete-Icon.png';



export const CreateTask = ({task, EditTask, DeleteTask, editMode}) => {
    const [classname, setClassname] = useState('task');
    // const [setLocalStorage] = useLocalStorage({id: null, task: ""});

    return (
        <div id={`task-${task.key}`} className={editMode && classname === 'task' ? 'disable' : classname}>

            <p className="text">{task.taskName}</p>

            <button type="button" className="modify-button" id="edit-icon" disabled={classname === 'selected' || editMode}
            onClick={ () => { setClassname('selected'); EditTask(task.key, task.taskName, setClassname) } }>
                {/* <img src={EditIcon} alt="Edit Icon" className="icon"/> */}Edit
            </button>

            <button type="button" className="modify-button" id="delete-icon" disabled={classname === 'selected' || editMode}
            onClick={ () => { DeleteTask(task.key) } }>
                {/* <img src={DeleteIcon} alt="Delete Icon" className="icon"/> */}Delete
            </button>

        </div>
    )
}

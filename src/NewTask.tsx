import { FC, useState } from "react";

interface NewTaskProps {
    addNewTask: (taskName: string) => void;
}

const NewTask: FC<NewTaskProps> = (props) => {
    const [newTaskName, setNewTaskName] = useState<string>("");

    const handleNewTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setNewTaskName(event.target.value);
    }
    const addNewTask = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        console.log("Adding new task: ", newTaskName);
        props.addNewTask(newTaskName);
        setNewTaskName("");
    }
    return (
        <div className="new-task-element">
            <input className="new-task-input-text" type="text" placeholder="New Task" value={newTaskName} onChange={handleNewTaskNameChange}/>
            <button className="new-task-button" onClick={addNewTask}>+</button>
        </div>
    )
}

export default NewTask;
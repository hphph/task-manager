import { useState } from "react";

interface NewSubTaskProps {
    addNewSubTask: (taskName: string, isCompleted: boolean) => void;
}

function NewSubTask(props: NewSubTaskProps): JSX.Element {
    const [newSubTaskName, setNewSubTaskName] = useState<string>("");

    const handleNewTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setNewSubTaskName(event.target.value);
    }

    const addNewTask = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        console.log("Adding new subtask: ", newSubTaskName);
        props.addNewSubTask(newSubTaskName, false);
        setNewSubTaskName("");
    }

    return (
        <div className="new-subtask-element">
            <input className="new-subtask-input-text" type="text" placeholder="New Subtask" value={newSubTaskName} onChange={handleNewTaskNameChange}/>
            <button className="new-subtask-button" onClick={addNewTask}>+</button>
        </div>
    )
}

export default NewSubTask;
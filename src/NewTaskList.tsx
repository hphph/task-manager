import { FC, useState } from "react";

interface NewTaskListProps {
    addNewTaskList: (taskListName: string) => void;
}

const NewTaskList: FC<NewTaskListProps> = (props) => {
    const [newTaskListName, setNewTaskListName] = useState<string>("");

    const handleNewTaskListNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setNewTaskListName(event.target.value);
    }

    const addNewTaskList = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        console.log("Adding new task list: ", newTaskListName);
        props.addNewTaskList(newTaskListName);
        setNewTaskListName("");
    }

    return (
        <div className="task-list-element-side-bar">
            <input className="new-task-list-input-text" type="text" placeholder="New task list name" value={newTaskListName} onChange={handleNewTaskListNameChange}/>
            <button className="new-task-list-button" onClick={addNewTaskList}>+</button>
        </div>
    )
}

export default NewTaskList;
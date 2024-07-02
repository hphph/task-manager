import { FC } from "react";
import trashIcon from "./assets/trash.svg";

interface TaskListSideBarProps {
    id: number;
    name: string;
    onClick: (taskListId: number) => void;
    removeTaskList: (taskListId: number) => void;
}

const TaskListSideBar: FC<TaskListSideBarProps> = (props) => {
    const onTaskListSideBarClick = () => {
        props.onClick(props.id);
    }

    const removeSelf = () => {
        console.log("Remove " + props.name);
        props.removeTaskList(props.id);
    }

    return (
        <div className="task-list-element-side-bar" >
            <span className="task-list-name-side-bar" onClick={onTaskListSideBarClick}>{props.name}</span>
            <div className="task-list-click-area" onClick={onTaskListSideBarClick}></div>
            <img src={trashIcon} alt="Trash Icon" className="trash-icon" onClick={removeSelf}/>
        </div>
    )
}

export default TaskListSideBar;
export type {TaskListSideBarProps};
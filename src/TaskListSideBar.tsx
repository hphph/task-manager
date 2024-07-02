import { FC, useState } from "react"
import { TaskListProps } from "./TaskList"

interface TaskListSideBarProps {
    id: number;
    name: string;
    onClick: (taskListId: number) => void;
}

const TaskListSideBar: FC<TaskListSideBarProps> = (props) => {
    const [taskListName, setTaskListName] = useState<string>(props.name);

    const onTaskListSideBarClick = () => {
        props.onClick(props.id);
    }

    return (
        <div className="task-list-element-side-bar" onClick={onTaskListSideBarClick}>
            <span className="task-list-name-side-bar">{taskListName}</span>
        </div>
    )
}

export default TaskListSideBar;
export type {TaskListSideBarProps};
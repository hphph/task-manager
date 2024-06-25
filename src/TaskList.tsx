import Task from "./Task";

function TaskList(): JSX.Element {
    return (
        <div className="TaskList">
            TaskList
            <Task />
            <Task />
        </div>
    )
}

export default TaskList;
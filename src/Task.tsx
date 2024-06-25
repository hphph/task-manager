import SubTask from "./SubTask";

function Task(): JSX.Element {
    return (
        <div className="Task">
            Task
            <SubTask />
            <SubTask />
        </div>
    )
}

export default Task;
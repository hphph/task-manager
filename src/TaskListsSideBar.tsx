import { FC, useEffect, useState } from "react";
import { TaskListProps } from "./TaskList";
import NewTaskList from "./NewTaskList";
import TaskListSideBar from "./TaskListSideBar";
import { TaskListSideBarProps } from "./TaskListSideBar";

interface TaskListsSideBarProps {
	onTaskListSideBarClick: (taskListId: number) => void;
	addNewTaskList: (taskListName:string ) => void;
	taskLists: TaskListProps[];
}

const TaskListsSideBar: FC<TaskListsSideBarProps> = (props) => {
	const [taskLists, setTaskLists] = useState<TaskListProps[]>(props.taskLists);
	const [id, setId] = useState<number>(1);

	const addNewTaskList = (taskListName: string) => {
		setTaskLists([...taskLists, {name: taskListName, tasks: [], id: id}]);
		setId(id + 1);
		props.addNewTaskList(taskListName);
	}

	return (
		<aside className="task-list-side-bar">
			<nav>
				{taskLists.map((taskList) => <TaskListSideBar name={taskList.name} key={taskList.id} id={taskList.id} onClick={props.onTaskListSideBarClick}/>)}
				<NewTaskList addNewTaskList={addNewTaskList}/>
			</nav>
		</aside>
	)
}

export default TaskListsSideBar;
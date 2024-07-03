import { FC, useState } from "react";
import { TaskListProps } from "./TaskList";
import NewTaskList from "./NewTaskList";
import TaskListSideBar from "./TaskListSideBar";

interface TaskListsSideBarProps {
	onTaskListSideBarClick: (taskListId: number) => void;
	addNewTaskList: (taskListName:string ) => void;
	removeTaskList: (taskListId: number) => void;
	taskLists: TaskListProps[];
}

const TaskListsSideBar: FC<TaskListsSideBarProps> = (props) => {
	const [taskLists, setTaskLists] = useState<TaskListProps[]>(props.taskLists);
	let biggestId = 0;
	props.taskLists.forEach((taskList) => {
		if (taskList.id > biggestId) {
			biggestId = taskList.id;
		}
	});
	const [id, setId] = useState<number>(biggestId+1);

	const addNewTaskList = (taskListName: string) => {
		setTaskLists([...taskLists, {name: taskListName, tasks: [], id: id}]);
		setId(id + 1);
		props.addNewTaskList(taskListName);
	}

	const removeTaskList = (taskListId: number) => {
		if(taskLists.length > 1) {
			const updatedTaskLists = taskLists.filter((taskList) => taskList.id !== taskListId);
			setTaskLists(updatedTaskLists);
			props.removeTaskList(taskListId);
		}
	}

	return (
		<aside className="task-list-side-bar">
			<nav>
				{taskLists.map((taskList) => <TaskListSideBar name={taskList.name} key={taskList.id} id={taskList.id} onClick={props.onTaskListSideBarClick} removeTaskList={removeTaskList}/>)}
				<NewTaskList addNewTaskList={addNewTaskList}/>
			</nav>
		</aside>
	)
}

export default TaskListsSideBar;
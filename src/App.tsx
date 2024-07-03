import './App.css'
import TaskListsSideBar from './TaskListsSideBar';
import TaskList from './TaskList';
import { TaskListProps } from './TaskList';
import { FC, useState } from 'react';

interface AppProps {
	taskLists: TaskListProps[];
	onTaskListsUpdate: (taskLists: TaskListProps[]) => void;
}

const App: FC<AppProps> = (props) => {
	let biggestId = 0;
	props.taskLists.forEach((taskList) => {
		if (taskList.id > biggestId) {
			biggestId = taskList.id;
		}
	});
	const [currentTaskListId, setCurrentTaskListId] = useState<number>(biggestId + 1);
	const [taskLists, setTaskLists] = useState<TaskListProps[]>(props.taskLists);
	const [currentTaskListState, setCurrentTaskListState] = useState<TaskListProps>(taskLists[0]);

	const changeCurrentTaskList = (currentTaskId: number) => {
		setCurrentTaskListState(currentTaskList(currentTaskId));
	}

	const currentTaskList = (taskListId: number): TaskListProps => {
		return taskLists.find((taskList) => taskList.id === taskListId) || taskLists[0]; 
	}

	const addNewTaskList = (taskListName: string) => {
		setTaskLists([...taskLists, {name: taskListName, tasks: [], id: currentTaskListId}]);
		setCurrentTaskListId(currentTaskListId + 1);
		props.onTaskListsUpdate([...taskLists, {name: taskListName, tasks: [], id: currentTaskListId}]);
	}

	const removeTaskList = (taskListId: number) => {
		if(taskLists.length > 1) {
			if (taskListId === currentTaskListState.id && taskLists[0].id !== taskListId) {
				setCurrentTaskListState(taskLists[0]);
			}
			else if(taskListId === currentTaskListState.id && taskLists[0].id === taskListId)
			{
				setCurrentTaskListState(taskLists[1]);
			}
			const updatedTaskLists = taskLists.filter((taskList) => taskList.id !== taskListId);
			setTaskLists(updatedTaskLists);
			props.onTaskListsUpdate(updatedTaskLists);
		}
	}

	const onTaskListUpdate = (taskList: TaskListProps) => {
		const updatedTaskLists = taskLists.map((taskListElement) => {
			if (taskListElement.id === taskList.id) {
				return taskList;
			}
			return taskListElement;
		});
		setTaskLists(updatedTaskLists);
		props.onTaskListsUpdate(updatedTaskLists);
	}

	return (
		<>
			<div className='task-page'>
				<TaskListsSideBar onTaskListSideBarClick={changeCurrentTaskList} addNewTaskList={addNewTaskList} taskLists={taskLists} removeTaskList={removeTaskList}/>
				<TaskList name={currentTaskListState.name} tasks={currentTaskListState.tasks} id={currentTaskListState.id} key={currentTaskListState.id} onTaskListUpdate={onTaskListUpdate}/>
			</div>
		</>
	)
}

export default App;

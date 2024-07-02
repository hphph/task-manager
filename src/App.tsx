import './App.css'
import TaskListsSideBar from './TaskListsSideBar';
import TaskList from './TaskList';
import { TaskListProps } from './TaskList';
import { TaskListSideBarProps } from './TaskListSideBar';
import { useEffect, useState } from 'react';


function App(): JSX.Element {
	const [currentTaskListId, setCurrentTaskListId] = useState<number>(0);
	const [taskLists, setTaskLists] = useState<TaskListProps[]>([{name: "Current Tasklist", tasks: [], id: 0}]);
	const [currentTaskListState, setCurrentTaskListState] = useState<TaskListProps>(taskLists[0]);

	const changeCurrentTaskList = (currentTaskId: number) => {
		setCurrentTaskListId(currentTaskId);
		setCurrentTaskListState(currentTaskList(currentTaskId));
	}

	const currentTaskList = (taskListId: number): TaskListProps => {
		return taskLists.find((taskList) => taskList.id === taskListId) || taskLists[0]; 
	}

	const addNewTaskList = (taskListName: string) => {
		setTaskLists([...taskLists, {name: taskListName, tasks: [], id: taskLists.length}]);
	}

	const onTaskListUpdate = (taskList: TaskListProps) => {
		const updatedTaskLists = taskLists.map((taskListElement) => {
			if (taskListElement.id === taskList.id) {
				return taskList;
			}
			return taskListElement;
		});
		setTaskLists(updatedTaskLists);
	}

	return (
		<div className='task-page'>
			<TaskListsSideBar onTaskListSideBarClick={changeCurrentTaskList} addNewTaskList={addNewTaskList} taskLists={taskLists}/>
			<TaskList name={currentTaskListState.name} tasks={currentTaskListState.tasks} id={currentTaskListState.id} key={currentTaskListState.id} onTaskListUpdate={onTaskListUpdate}/>
		</div>
	)
}

export default App;

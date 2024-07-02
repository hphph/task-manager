import Task from "./Task";
import NewTask from "./NewTask";
import { FC, useEffect, useState } from "react";
import { TaskProps } from "./Task";

interface TaskListProps {
	id: number; 
	name: string;
	tasks: TaskProps[];
}

interface TaskListPropsCommunication extends TaskListProps {
	onTaskListUpdate: (taskList: TaskListProps) => void;
}

const TaskList: FC<TaskListPropsCommunication> = (props) => {
	const [taskList, setTaskList] = useState<TaskProps[]>(props.tasks);
	let biggestId = 0;
	taskList.forEach((task) => {
		if (task.id > biggestId) {
			biggestId = task.id;
		}
	});
	const [id, setId] = useState<number>(biggestId + 1);

	const addNewTask = (taskName: string) => {
		setTaskList([...taskList, {name: taskName, isCompleted: false, subTasks: [], id: id}]);
		setId(id + 1);
	}

	const removeTask = (taskId: number) => {
		const updatedTasks = taskList.filter((task) => task.id !== taskId);
		setTaskList(updatedTasks);
	}

	const taskListUpdate = () => {
		props.onTaskListUpdate({id: props.id, name: props.name, tasks: taskList});
	}

	const onTaskUpdate = (task: TaskProps) => {
		const updatedTasks = taskList.map((taskElement) => {
			if (taskElement.id === task.id) {
				return task;
			}
			return taskElement;
		});
		setTaskList(updatedTasks);
	}

	useEffect(() => {
		taskListUpdate();
	}, [taskList, id]);

	return (
		<div className="tasklist-container">
			<section className="tasklist-element">
				<span className="tasklist-name">{props.name}</span>
				<div className="tasks-list">
					{taskList.map((task) => {
						if(!task.isCompleted)
							return <Task name={task.name} key={task.id} isCompleted={task.isCompleted} subTasks={task.subTasks} id={task.id} onTaskUpdate={onTaskUpdate} removeTask={removeTask}/>
					})}
				</div>
				<NewTask addNewTask={addNewTask}/>
				<span className="tasklist-name">Done Tasks</span>
				<div className="done-tasks-list">
					{taskList.map((task) => {
					if(task.isCompleted) return <Task name={task.name} key={task.id} isCompleted={task.isCompleted} subTasks={task.subTasks} id={task.id} onTaskUpdate={onTaskUpdate} removeTask={removeTask}/>
					})}
				</div>
			</section>
		</div>
	)
}

export default TaskList;
export type {TaskListProps};
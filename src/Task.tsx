import SubTask from "./SubTask";
import NewSubTask from "./NewSubTask";
import { FC, useEffect, useState } from "react";
import { SubTaskProps } from "./SubTask";
import trashIcon from "./assets/trash.svg";

interface TaskProps {
	id: number;
	name: string;
	isCompleted: boolean;
	subTasks: SubTaskProps[];
}

interface TaskCommunicationProps extends TaskProps {
	onTaskUpdate: (task: TaskProps) => void;
	removeTask: (taskId: number) => void;
}

const Task: FC<TaskCommunicationProps> = (props) => {
	const [subTasks, setSubTasks] = useState<SubTaskProps[]>(props.subTasks);
	let biggestId = 0;
	subTasks.forEach((task) => {
		if (task.id > biggestId) {
			biggestId = task.id;
		}
	});
	const [taskCurrentId, setTaskCurrentId] = useState<number>(biggestId + 1);
	const [isTaskDone, setIsTaskDone] = useState<boolean>(props.isCompleted);

	const updateTask = () => {
		props.onTaskUpdate({id: props.id, name: props.name, isCompleted: isTaskDone, subTasks: subTasks});
	};

	const addNewSubTask = (subtaskName: string, subtaskIsCompleted: boolean) => {
		setSubTasks([...subTasks, {name: subtaskName, isCompleted: subtaskIsCompleted, id: taskCurrentId}]);
		setTaskCurrentId(taskCurrentId + 1);
	}

	const onSubTaskUpdate = (subTask: SubTaskProps) => {
		const updatedSubTasks = subTasks.map((task) => {
			if (task.id === subTask.id) {
				return subTask;
			}
			return task;
		});
		setSubTasks(updatedSubTasks);
	}

	const removeSubTask = (subTaskId: number) => {
		const updatedSubTasks = subTasks.filter((task) => task.id !== subTaskId);
		setSubTasks(updatedSubTasks);
	}

	const removeSelf = () => {
		console.log("Remove " + props.name);
		props.removeTask(props.id);
	}

	useEffect(() => {
		updateTask();
	}, [isTaskDone, subTasks, taskCurrentId]);

	return (
		<div className="task-element">
			<div className="task-header">
				<input className="task-checkbox" type="checkbox" onChange={() => setIsTaskDone(!isTaskDone)} checked={isTaskDone} />
				<span className="task-name">{props.name}</span>
				<div className="task-free-space"></div>
				<img src={trashIcon} alt="Trash Icon" className="task-trash-icon" onClick={removeSelf}/>
			</div>
			<div className="subtasks-list">
				{subTasks.map((task) => <SubTask name={task.name} key={task.id} isCompleted={task.isCompleted} id={task.id} onSubTaskUpdate={onSubTaskUpdate} removeSubTask={removeSubTask}/>)}
			</div>
			{!isTaskDone ? <NewSubTask addNewSubTask={addNewSubTask}/> : null}
		</div>
	)
}

export default Task;
export type {TaskProps};
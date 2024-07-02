import { FC, useEffect, useState } from "react";

interface SubTaskProps {
	id: number;
	name: string;
	isCompleted: boolean;
}

interface SubTaskCoumunicationProps extends SubTaskProps {
	onSubTaskUpdate: (subTask: SubTaskProps) => void;
	removeSubTask: (subTaskId: number) => void;
}

const SubTask: FC<SubTaskCoumunicationProps> = (props) => {
	const [subTask, setSubTask] = useState<string>(props.name);
	const [isSubTaskDone, setIsSubTaskDone] = useState<boolean>(props.isCompleted);


	const updateSubTask = () => {
		props.onSubTaskUpdate({id: props.id, name: subTask, isCompleted: isSubTaskDone});
	}

	const removeSelf = () => {
		console.log("Remove " + subTask);
		props.removeSubTask(props.id);
	}

	useEffect(() => {
		updateSubTask();
	}, [subTask, isSubTaskDone]);


	return (
		<div className="subtask-element">
			<input className="subtask-checkbox" type="checkbox" onChange={() => {setIsSubTaskDone(!isSubTaskDone); updateSubTask(); }} checked={isSubTaskDone} />
			<span className="subtask-name">{subTask}</span>
			<div className="subtask-free-space"></div>
			<img src="src/icons/trash.svg" alt="Trash Icon" className="subtask-trash-icon" onClick={removeSelf}/>
		</div>
	)
}

export default SubTask;
export type {SubTaskProps};
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import App from "./App";
import './App.css';
import homeIcon from './assets/home.svg';
import { useCookies } from "react-cookie";
import { TaskListProps } from "./TaskList";
import { useEffect, useState } from "react";

function Layout() {
	const [cookieTaskLists, setcookieTaskLists] = useCookies(['taskLists']);
	let initialTaskLists: TaskListProps[] = [{name: "Current Tasklist", tasks: [], id: 0}];
	if (cookieTaskLists.taskLists) {
		initialTaskLists = cookieTaskLists.taskLists;
	}
	const [taskLists, setTaskLists] = useState<TaskListProps[]>(initialTaskLists);

	const onTaskListsUpdate = (taskLists: TaskListProps[]) => {
		setTaskLists(taskLists);
		setcookieTaskLists('taskLists', taskLists);
	}

	return (
	<>
		<HashRouter>
			<div className='page'>
				<header className='top-header'>
					<Link to="/" className='home-link'>
						<img src={homeIcon} alt='Home' className='header-home-icon'></img>
					</Link>
				</header>
				<Routes>
					<Route path="/" element={<App taskLists={taskLists} onTaskListsUpdate={onTaskListsUpdate}/>}/>
					<Route path="/contact" element={<Contact />}/>
				</Routes>
				<footer className='bottom-footer'>
					<Link to="/contact" className='contact-link'>Contact</Link>
				</footer>
			</div>
		</HashRouter>
	</>
	);
}

export default Layout;

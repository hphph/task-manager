import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import App from "./App";
import './App.css';
import homeIcon from './assets/home.svg';
import { useCookies } from "react-cookie";
import { TaskListProps } from "./TaskList";
import { useEffect } from "react";

function Layout() {
	const [cookieTaskLists, setcookieTaskLists] = useCookies(['taskLists']);

	const onTaskListsUpdate = (taskLists: TaskListProps[]) => {
		setcookieTaskLists('taskLists', taskLists);
	}

	useEffect(() => {
		console.log(cookieTaskLists.taskLists);
		if (!cookieTaskLists.taskLists) {
			setcookieTaskLists('taskLists', [{name: "Current Tasklist", tasks: [], id: 0}]);
		}
	}, []);

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
					<Route path="/" element={<App taskLists={cookieTaskLists.taskLists} onTaskListsUpdate={onTaskListsUpdate}/>}/>
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

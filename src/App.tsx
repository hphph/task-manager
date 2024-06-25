import './App.css'
import TaskListSideBar from './TaskListsSideBar';
import TaskList from './TaskList';

function App(): JSX.Element {

  return (
    <>
      <TaskListSideBar />
      <TaskList />
      <h1>Vite + React + TypeScript</h1>
    </>
  )
}

export default App;

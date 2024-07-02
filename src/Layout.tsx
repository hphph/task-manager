import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import App from "./App";
import './App.css';

function Layout() {
    return (
    <>
        <BrowserRouter>
            <div className='page'>
                <header className='top-header'>
					<Link to="/" className='home-link'>
                        <img src='src/icons/home.svg' alt='Home' className='header-home-icon'></img>
                    </Link>
                </header>
                <Routes>
                    <Route path="/" element={<App />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
                <footer className='bottom-footer'>
					<Link to="/contact" className='contact-link'>Contact</Link>
			    </footer>
            </div>
        </BrowserRouter>
    </>
    );
}

export default Layout;
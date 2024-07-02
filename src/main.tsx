import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Layout from './Layout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Layout />
	</React.StrictMode>,
)

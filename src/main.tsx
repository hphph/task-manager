import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.tsx'
import { CookiesProvider } from 'react-cookie'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CookiesProvider>
			<Layout />
		</CookiesProvider>
	</React.StrictMode>,
)

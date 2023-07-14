import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'
import './index.css'

const root = createRoot(document.getElementById('app'))

root.render(<App />)

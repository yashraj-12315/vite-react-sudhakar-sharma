import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { Home } from './components/home/home.jsx'
import { StateDemo } from './components/state/statedemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Home/> */}
    <StateDemo/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './globalStyles.js'
import Home from '../pages/home/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <GlobalStyle/>
    <Home/>
  </StrictMode>,
)

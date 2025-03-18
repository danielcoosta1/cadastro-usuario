import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/globalStyles.js'
import Home from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <GlobalStyle/>
    <Home/>
  </StrictMode>,
)

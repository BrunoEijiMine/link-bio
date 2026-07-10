import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalReset } from './styles/reset.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalReset />
    <App />
  </StrictMode>,
)

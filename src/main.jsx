import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Game from './Game.jsx'



createRoot(document.getElementById('root')).render(
  <>
  <Game />
    <App />
  </>
) 

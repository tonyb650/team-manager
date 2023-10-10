import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import PlayerList from './components/PlayerList'
import AddPlayer from './views/AddPlayer'
import GameStatus from './components/GameStatus'

function App() {

  return (
     <BrowserRouter>
     <div className="container">
      <h3>
        <Link to="/">Manage Players</Link> |
        <Link to="/status/game/1">Manage Player Status</Link>
      </h3>
      <Routes>
        <Route path="/player/add" element={<AddPlayer/>}/>
        <Route path="/" element={<PlayerList/>}/>
        <Route path="/status/game/:id" element={<GameStatus/>}/>
      </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css'

const App = () => {
  return (
    <Router basename="/recipe-roulette">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  )
}

export default App;

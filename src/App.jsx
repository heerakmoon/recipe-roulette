import Home from './Pages/Home';
import Favorites from './pages/Favorites';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  )
}

export default App;

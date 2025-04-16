import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </HashRouter>
  )
}

export default App;

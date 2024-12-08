import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projectos from './pages/Proyectos';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyectos" element={<Projectos />} />
    </Routes>
  );
}

export default App;

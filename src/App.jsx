import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projectos from './pages/Proyectos';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyectos" element={<Projectos />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;

// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Chapter1 from './pages/chapter1.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chapter1" element={<Chapter1 />} />
    </Routes>
  );
}

export default App;

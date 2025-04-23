// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Chapter1 from './pages/Chapter1.jsx'; // ✅ 대소문자 정확히

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chapter1" element={<Chapter1 />} />
    </Routes>
  );
}

export default App;

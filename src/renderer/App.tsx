import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Landing from './views/Landing';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

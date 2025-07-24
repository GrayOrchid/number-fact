
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import FactPage from './pages/fact-page/FactPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fact" element={<FactPage />} />
      </Routes>
    </>
  );
}

export default App;

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import RegisterTwo from './pages/Register/RegisterTwo';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/RegisterTwo" element={<RegisterTwo />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

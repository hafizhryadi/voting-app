// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Polls from './pages/Polls';
import Poll from './pages/Poll';

function App() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/poll" element={<Polls/>} />
      <Route path="/poll/:id" element={<Poll/>} />
    </Routes>
    </div>
    
    
  );
}

export default App;

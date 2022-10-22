// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import Polls from './pages/Polls';
import Poll from './pages/Poll';

function App() {
  return (
    <div className='bg-gray-100 min-h-screen'>
    <Routes>
      {/* <Route index element={<Login/>}/> */}
      <Route path="/login" element={<Login/>} />
      <Route path="/poll" element={<Polls/>} />
      <Route path="/poll/:id" element={<Poll/>} />
      <Route path="*" element={<Navigate to="/login" replace/>}/>
    </Routes>
    </div>
    
    
  );
}

export default App;

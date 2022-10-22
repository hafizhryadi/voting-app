import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Navbar = ({user}) => {
  const navigate = useNavigate();
  const handleLogout = ()=> {
    const token = window.localStorage.getItem('token')
    const config = {headers: {Authorization: `Bearer ${token}`}}
    axios.post('http://127.0.0.1:8000/api/auth/logout',undefined , config).then((res)=>{
      window.localStorage.removeItem('token')
      navigate('/login');
    })
    .catch((error)=> {console.log(error.message)});
  };

  return (
    <div className='flex justify-between h-16 px-4 items-center shadow bg-white'>
        <div className='font-bold text-xl'>YukPilih</div>
        <div> <span>{user}</span>{' | '}
          <button className='bg-red-500 rounded-lg shadow p-2 text-white text-sm' onClick={handleLogout}> Logout</button>
        </div>
    </div>
  )
}

export default Navbar
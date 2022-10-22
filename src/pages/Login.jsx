import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => { 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if(window.localStorage.getItem('token')) {
            navigate('/poll');
        }
    }, []);
    const handleLogin = async(event) => {
        event.preventDefault();
        const formData=new FormData();
        formData.append('username', username);
        formData.append('password', password);

        await axios.post("http://127.0.0.1:8000/api/auth/login", formData).then(res=>{
            navigate('/poll');    
            const token = res.data.access_token;
            window.localStorage.setItem('token', token);
            
        }); 
        
    }
  return (
    <div className='w-screen h-screen'>
        <div className='shadow bg-white w-full max-w-lg mx-auto p-4'>
            <h1 className='text-2xl font-bold text-center'>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" name="username" value={username} onChange={e=>setUsername(e.target.value)} id="username" className='w-full p-2 border mb-3 rounded-lg'/>
                <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} id="password" className='w-full p-2 border mb-3 rounded-lg' />
                <input type="submit" value="login" className='w-full p-2 bg-blue-500 rounded-lg text-white cursor-pointer'/>
            </form>
        </div>

    </div>
  )
}

export default Login


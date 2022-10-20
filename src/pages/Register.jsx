import axios from 'axios';
import React, { useState } from 'react'

const Register = () => { 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleRegister = async(event) => {
        event.preventDefault();
        const formData=new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);

        await axios.post("http://127.0.0.1:8000/api/auth/register", formData).then(res=>{console.log(res.data)}); 
        
    }
  return (
    <div className='w-screen h-screen'>
        <div className='shadow bg-white w-full max-w-lg mx-auto p-4'>
            <h1 className='text-2xl font-bold text-center'>Register</h1>
            <form onSubmit={handleRegister}>
                <input type="string" name="name" value={name} onChange={e=>setName(e.target.value)} id="name" className='w-full p-2 border mb-3 rounded-lg'/>
                <input type="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} id="email" className='w-full p-2 border mb-3 rounded-lg'/>
                <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} id="password" className='w-full p-2 border mb-3 rounded-lg' />
                <input type="submit" value="register" className='w-full p-2 bg-blue-500 rounded-lg text-white cursor-pointer'/>
            </form>
        </div>

    </div>
  )
}

export default Register


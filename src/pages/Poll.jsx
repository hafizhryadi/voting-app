import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const Poll = () => {
    const [user,setUser] = useState("")
    var token = window.localStorage.getItem('token');
    const getUser = async() => {
        await axios.post('http://127.0.0.1:8000/api/auth/me', {
            token
        }).then(res=>{setUser(res.data.username)});
    }
    useEffect(() => {
      getUser()
    }, [user])
  return (
    <div>
        <Navbar user={user}/>
        <div className='max-w-2xl mx-auto bg-white p-8 shadow mt-16 rounded-xl'>
            <h1 className='font-bold text-xl mb-4'>WFO/WFH</h1>
            <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore maxime totam eveniet accusantium itaque pariatur impedit, obcaecati molestiae repellat veritatis!</p>
            <p className='mb-3 text-gray-500'>created by: admin</p>
            <p className='mb-3 text-red-500'>deadline: 10 November 2022</p>
            <div className='flex gap-x-4 '>
                <button className='w-full bg-blue-500 px-4 py-3 text-white rounded-xl'>choice 1</button>
                <button className='w-full bg-blue-500 px-4 py-3 text-white rounded-xl'>choice 1</button>
                <button className='w-full bg-blue-500 px-4 py-3 text-white rounded-xl'>choice 1</button>
                
            </div>
        </div>
    </div>
  )
}

export default Poll
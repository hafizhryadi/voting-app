import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar'

const Poll = () => {
  let {id} = useParams()
    const [user,setUser] = useState("")
    const [poll,setPoll] = useState({})
    var token = window.localStorage.getItem('token');
    const getUser = async() => {
        await axios.post('http://127.0.0.1:8000/api/auth/me', {
            token
        }).then(res=>{setUser(res.data.username)});
    }
    const getPoll = async() => {
      await axios.get(`http://127.0.0.1:8000/api/auth/poll/${id}`).then(res=>{setPoll(res.data.data[0])})

    }
    useEffect(() => {
      getUser()
      getPoll()
    }, [])
  return (
    <div>
        <Navbar user={user}/>
        <div className='max-w-2xl mx-auto bg-white p-8 shadow mt-16 rounded-xl'>
            <h1 className='font-bold text-xl mb-4'>{poll.title}</h1>
            <p className='mb-3'>{poll.description}</p>
            <p className='mb-3 text-gray-500'>created by: {poll.username}</p>
            <p className='mb-3 text-red-500'>deadline: {poll.deadline}</p>
            <div className='flex gap-x-4 '>
                <button className='w-full bg-blue-500 px-4 py-3 text-white rounded-xl'>choice 1</button>
                <button className='w-full bg-blue-500 px-4 py-3 text-white rounded-xl'>choice 1</button>                
            </div>
        </div>
    </div>
  )
}

export default Poll
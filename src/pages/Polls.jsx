import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Polls = () => {
    const [user,setUser] = useState("")
    const [polls,setPolls] = useState([])
    var token = window.localStorage.getItem('token');
    const getUser = async() => {
        await axios.post('http://127.0.0.1:8000/api/auth/me', {
            token
        }).then(res=>{setUser(res.data.username)});
    }
    const getPolls = async() => {
      await axios.get('http://127.0.0.1:8000/api/auth/poll' ).then(res=>{setPolls(res.data.data)})

    }
    useEffect(() => {
      getUser()
      getPolls()
    }, [])
    

    
  return (
    <div >
        <Navbar user={user}/>
        <div className='max-w-xl mx-auto '>
          <h1 className='font-bold text-4xl text-center my-4'>Poll List</h1>
          {polls.map((poll)=>(
          <Link to={`/poll/${poll.id}`} key={poll.id}>
            <div className='p-4 shadow rounded-xl bg-white mb-4'>
              <h2 className='font-bold text-lg '>{poll.title}</h2>
              <p className='text-gray-400 '>{poll.description}</p>
              <p className='text-gray-400 '>created by: {poll.username}</p>
              <p className='text-red-500 text-end'>deadline: {poll.deadline}</p>
            </div>
          </Link>
          ))}
        </div>
        
    </div>
  )
}

export default Polls
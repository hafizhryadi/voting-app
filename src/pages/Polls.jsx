import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Polls = () => {
    const [user,setUser] = useState("")
    const [polls,setPolls] = useState({})
    var token = window.localStorage.getItem('token');
    const getUser = async() => {
        await axios.post('http://127.0.0.1:8000/api/auth/me', {
            token
        }).then(res=>{setUser(res.data.username)});
    }
    const getPolls = async() => {
      await axios.get('http://127.0.0.1:8000/api/auth/poll' ).then(res=>{console.log(res.data)})

    }
    useEffect(() => {
      getUser()
      getPolls()
    }, [user])
    console.log(polls)
    
  return (
    <div >
        <Navbar user={user}/>
        <div className='max-w-xl mx-auto '>
          <h1 className='font-bold text-4xl text-center my-4'>Poll List</h1>
          <Link to='/poll/1'>
            <div className='p-4 shadow rounded-xl bg-white' >
              <h2 className='font-bold text-lg '>WFO/WFH</h2>
              <p className='text-gray-400 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magni reiciendis asperiores vel natus delectus ducimus dolor error ipsa corrupti.</p>
              <p className='text-red-500 text-end'>deadline: 10 November 2022</p>
            </div>
          </Link>
        </div>
        
    </div>
  )
}

export default Polls
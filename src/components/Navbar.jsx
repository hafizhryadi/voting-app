import React from 'react'

const Navbar = ({user}) => {
  return (
    <div className='flex justify-between h-16 px-4 items-center shadow bg-white'>
        <div className='font-bold text-xl'>YukPilih</div>
        <div>{user}</div>
    </div>
  )
}

export default Navbar
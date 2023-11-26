import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {




  return (
    <div className='bg-green-600 p-5 font-medium '>

    <div className=' flex flex-row gap-5'>
        <Link to='/'>CRUD App</Link>
        <Link to='/alluser'>All Users</Link>
        <Link to='/adduser'>Add User</Link>
    </div>
    </div>
  )
}

export default Navbar
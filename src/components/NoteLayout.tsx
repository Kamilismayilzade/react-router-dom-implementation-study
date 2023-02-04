import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NoteLayout = () => {

  return (
    <>
        <br />
        <Link to = '/note/1' >Note 1</Link>
        <br />
        <Link to = '/note/2' >Note 2</Link>
        <br />
        <Link to='/note/new'> New Note </Link>
        <br />
        
        <Outlet />

    </>
  )
}

export default NoteLayout
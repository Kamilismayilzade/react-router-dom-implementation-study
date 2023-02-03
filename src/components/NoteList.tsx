import React from 'react'
import { Link } from 'react-router-dom'

const NoteList = () => {

  return (
    <>
    
      <div>NoteList</div>
      <br />
      <Link to = '/note/1' >Note 1</Link>
      <br />
      <Link to = '/note/2' >Note 2</Link>
      <br />
      <Link to='/note/new'> New Note </Link>
      <br />
    
    </>
  )
}

export default NoteList
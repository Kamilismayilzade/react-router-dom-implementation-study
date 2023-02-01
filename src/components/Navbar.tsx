import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (

    <nav>

        <ul>
            <li> <Link to='/' >Home</Link> </li>
            <li> <Link to='/note' >Note</Link> </li>
            <li> <Link to='/notelist' >NoteList</Link> </li>
            <li> <Link to='/about' >About</Link> </li>
            <li> <Link to='/contact' >Contact</Link> </li>
            <li> <Link to='/notfound' >NotFound</Link> </li>
        </ul>

    </nav>

  )
}

export default Navbar
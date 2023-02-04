import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  return (

    <nav>
 
        <ul>
            <li> <Link to='/' replace  >Home</Link> </li>
            <li> <Link to='/note' >Note</Link> </li>
            <li> <Link to='/notelist' >NoteList</Link> </li>
            <li> <Link to='/about' >About</Link> </li>
            <li> <Link to='/contact' >Contact</Link> </li>
            <li> <Link to='/notfound' >NotFound</Link> </li>

            {/* <NavLink to='/' style={ ({isActive})=> {
              const style = isActive ? {color: 'green'} : {};
              const text = isActive ? 'Active Home' : 'Home';
              return (
                <>
                  <span style={style}> {text} </span>
                </>
              )
            } } /> */}

            <NavLink end to='/note' ></NavLink>

        </ul>

    </nav>

  )
}

export default Navbar
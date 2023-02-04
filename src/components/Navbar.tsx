import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {

  const location = useLocation();
  console.log(location)


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
            <NavLink to='/' state = 'Hi'>Home</NavLink> 

        </ul>

        {location.state}

    </nav>


  )
}

export default Navbar
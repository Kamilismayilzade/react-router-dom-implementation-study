import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate();

    useEffect( ()=> {

      setTimeout(()=> {
        navigate('/', {state: 'Error not found'});
      }, 1000)

    } , [])

  return (

    <div> 404 NotFound</div>

    // <Navigate to='/' />
    
  )
}

export default NotFound
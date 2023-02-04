import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate();

    useEffect( ()=> {

      setTimeout(()=> {
        navigate('/');
      }, 1000)

    } , [])

  return (

    <div> 404 NotFound</div>

    // <Navigate to='/' />
    
  )
}

export default NotFound
import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

interface Obj {
  hello: string,
}

const Note = () => {

  const {id} = useParams();
  const obj = useOutletContext() as Obj;

  return (

    <div>Note {id} {obj.hello} </div>
    
  )
}

export default Note
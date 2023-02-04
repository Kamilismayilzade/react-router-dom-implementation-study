import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NewNote from './components/NewNote'
import Note from './components/Note'
import NoteLayout from './components/NoteLayout'
import NoteList from './components/NoteList'
import NotFound from './components/NotFound'

function App() {

  return (
    <>

    <Routes>
      <Route path='/note' element={ <h1>Extra content</h1> } />
    </Routes>

    <Navbar />

    <Routes>

        <Route path='/' element={ <Home /> } />
        {/* <Route path='/note' element={ <Note /> } /> */}
        <Route path='/notelist' element={ <NoteList /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/notfound' element={ <NotFound /> } />

        {/* <Route path='/note/:id' element={ <Note /> } />
        <Route path='/note/new' element={ <NewNote /> } /> */}

        <Route path='*' element={ <NotFound /> } />

        <Route path='/note' element= {<NoteLayout />}>

          <Route index element={ <NoteList /> } /> 
          <Route path=':id' element={ <Note /> } />
          <Route path='new' element={ <NewNote /> } />

        </Route>

    </Routes>
    
    </>
    
    
  )
}

export default App

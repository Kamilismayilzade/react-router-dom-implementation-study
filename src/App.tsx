import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NewNote from './components/NewNote'
import Note from './components/Note'
import NoteList from './components/NoteList'
import NotFound from './components/NotFound'

function App() {

  return (
    <>

    <Navbar />

    <Routes>

        <Route path='/' element={ <Home /> } />
        <Route path='/note' element={ <Note /> } />
        <Route path='/notelist' element={ <NoteList /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/notfound' element={ <NotFound /> } />

        <Route path='/note/:id' element={ <Note /> } />
        <Route path='/note/new' element={ <NewNote /> } />

        <Route path='*' element={ <NotFound /> } />

    </Routes>
    
    </>
    
    
  )
}

export default App

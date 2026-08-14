import React from 'react'
import CreatePost  from './pages/CreatePost'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App =()=>{
  return(
    <Router>
      <Routes>
        <Route path = '/create-post' element = {<CreatePost/>} />
        <Route path = '/about' element = {<h1>about us</h1>} />
      </Routes>
    </Router>
  )
}

export default App
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/resume" element={<h1>Hello world!</h1>} />
    </Routes>
  )
}

export default App

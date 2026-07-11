import { useState } from 'react'
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import './App.css'
import { attachWindowEventListeners } from './assets/ts/util.ts';


function App() {
  attachWindowEventListeners();
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/resume" element={<h1>Hello world!</h1>} />
    </Routes>
  )
}

export default App

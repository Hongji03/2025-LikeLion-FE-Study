import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todolist from './components/Todolist';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Todolist />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

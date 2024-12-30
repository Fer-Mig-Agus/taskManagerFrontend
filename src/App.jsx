import { useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewMain from './views/ViewMain'
function App() {

  return (
    <div className='content'>
      <Routes>
          <Route path='/' element={<ViewMain />} />
        </Routes>

        <ToastContainer />
    </div>
  )
}

export default App

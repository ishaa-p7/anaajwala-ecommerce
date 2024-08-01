import { useState , useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { fetchUser , loginUser ,signoutUser } from './features/user/userSlice.js'
import './App.css'

import LandingPage from './pages/Landing-page/LandingPage';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser())
  }, [])  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


import React, { useEffect, useState } from 'react'
import Home from './page/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Register from './page/register/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from './page/login/Login'
import ProductView from './page/ProductView/ProductView'

function App() {
  const [isUser, setIsuser] =useState(false)
  useEffect(()=>{
    setIsuser(localStorage.getItem('isUser')?localStorage.getItem('isUser') : false);
  })
  return (
    <div>
     
      <BrowserRouter>
      <ToastContainer/>
      <Header/>
      <Routes>
        <Route path='/' element={isUser ? (<Home/>):(<Login/>)}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/view/:id' element={<ProductView/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
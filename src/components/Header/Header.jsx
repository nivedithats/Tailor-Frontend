
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
import { toast } from 'react-toastify';

function Header() {
  const [isUser, setIsuser] =useState(localStorage.getItem('isUser')?localStorage.getItem('isUser') : false)
  useEffect(()=>{
    setIsuser(localStorage.getItem('isUser')?localStorage.getItem('isUser') : false)
  }, [localStorage.getItem('isUser')]);

  const logout = () =>{
    localStorage.removeItem('isUser');
    toast.success('logout successfully done!'); 
  }
  return (
    <header>
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="https://cdn-icons-png.freepik.com/256/9393/9393945.png?ga=GA1.1.1879916801.1720642259&semt=ais_hybrid" alt="" className="logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Our Designs</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Feedback</a>
        </li>
       
       
      </ul>
      <form class="d-flex gap-3" role="search">
      {
        isUser?(
          <button  className='btn btn-danger rounded-1' onClick={logout}>Logout</button>
        ):(
         <>
          <Link class="btn btn-primary px-4 rounded-0">Login</Link>
          <Link to='/register' class="btn btn-outline-primary px-4 rounded-0">Create Account</Link>
         </>
        )
      }
      </form>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header

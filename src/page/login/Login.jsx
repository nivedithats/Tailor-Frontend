import React, { useState } from 'react'
import './style.css'
import axios from 'axios';
import Loading from '../../components/modals/Loading/Loading';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
    const [fromdata, setFormData] = useState({
        username:'',
        email:'',
        phonenumber:'',
        password:'',
        gender:''
    })
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...fromdata, [name]:value})
    }

    const submitForm = async (e) =>{
        setLoading(true)
        e.preventDefault()
        console.log(fromdata);

    try {
        const responce =   await axios.post('http://localhost:4005/api/user/login', fromdata)
        if(responce.status === 200){
            setLoading(false)
            localStorage.setItem('isUser', true)
            toast.success(responce.data.message)
            console.log(responce);
            navigate('/')
        }else{
            throw new Error
        }
    } catch (error) {
        toast.error(error.message)
        setLoading(false)
        console.log(error);
    }
    }

    if(loading){
        return <Loading/>
    }


  return (
    <section>
        <div className="row register p-3 p-md-5 container-fluid bg-light ">
            <div className="col-md-6 m-auto">
              <form action="" onSubmit={submitForm}>
              <div className="card p-3 shadow border-0">
                    <h1 className="fs-1">Welcome back to login</h1>
                   
                    <div className="form-group mt-3">
                        <label htmlFor="name" className="form-label">Email Address</label>
                        <input type="text" name='email' placeholder='enter username' className="form-control"  value={fromdata.email} onChange={handleChange}/>
                    </div>
                  
                    <div className="form-group mt-3">
                        <label htmlFor="name" className="form-label">Password</label>
                        <input type="text" name='password' placeholder='enter username' className="form-control" value={fromdata.password} onChange={handleChange} />
                    </div>
                    <div className="form-group mt-3">
                        
                       <small className="small">Don't have an Account?  <Link to="/register">Create account</Link></small>
                       
                       <button className="btn btn-primary border-0 mt-3 w-100" type='submit'>Create account</button>
                       <button className="btn btn-light border-0 mt-3 w-100" type='reset'>Cancel</button>
                       
                    </div>
                </div>
              </form>
            </div>
        </div>
    </section>
  )
}

export default Login

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import './style.css'
import { Link } from 'react-router-dom'
import { Shimmer } from 'react-shimmer'

function Products() {
    const [productsdata, setProductdata] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchdata = async() =>{
          try {
            const responce = await axios.get('https://tailor-backend-thr2.onrender.com/api/product/list');
            if(responce.status === 200){
                console.log((responce));
                setLoading(false)
                toast.success(responce.data.message)
                setProductdata(responce.data.data);
            }else{
                setLoading(true)
                throw new Error;
            }
          } catch (error) {
            setLoading(true)
            toast.error('something went wrong please refresh the page')
            console.log(error);
          }
        }


        fetchdata();
    }, [])
  return (
    <section className='products container-fluid p-3 p-md-5 bg-light'>
        <h1 className="fs-1 my-4 text-center mt-5">All our <span className="text-primary">designs</span></h1>
        <div className="row">
            {
            loading?(
                Array(5).fill(null).map((_, index)=>(
                    <div className="col-md-3">
                    <Shimmer width="100%" height={300} className='rounded mb-4'/>
                </div>
                ))
            ):(
                productsdata?.map((item, index)=>(
                    <div className="col-md-3 mb-3" >
                        <div className="card design-card h-100">
                            <img src={item.image} alt="" className="w-100" />
                            <div className="design-info">
                                <span className="d-block fs-3">{item.productname}</span>
                                <span className="d-block fs-6">starting at &#8377;{item.price}/-</span>
                                <Link to={`view/${item._id}`} className="btn btn-warning px-3 rounded-pill">View product</Link>
                            </div>
                        </div>
                    </div>
                ))
            )
            }
        </div>
    </section>
  )
}

export default Products

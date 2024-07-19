import React, { useEffect, useState } from 'react'
import './style.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Shimmer } from 'react-shimmer'

function ProductView() {
    const {id} = useParams()

    const [productdata, setProductData] = useState({})  
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const getData = async() =>{
            try {
                const responce = await axios.get(`https://tailor-backend-thr2.onrender.com/api/product/${id}`)
                if(responce.status === 200){
                    // toast.success('success');
                    console.log(responce);
                    setLoading(false)
                    setProductData(responce.data.data)
                    setTotal(Number(productdata.price) * Number(quantity))
                }else{
                    setLoading(true)
                    throw new Error
                }
            } catch (error) {
                setLoading(true)
                    console.log(error);
            }
        }
        getData();
    }, [])
  return (
    <section className='product container-fluid p-3 p-md-5'>   
        <div className="row align-items-center">
            <div className="col-md-5">
           <div className="left">
         {
            loading?(
                <Shimmer width='100%' height={400}/>
            ):(
                <img src={productdata.image} alt="image" className="w-100 rounded" />
            )
         }
           </div>
            </div>
            <div className="col-md-6 mt-4">
               {
                loading?(
                    <>
                     <div className="right">
                    <Shimmer width='80%' height={50}/>
                    <Shimmer width='80%' height={20} className='mt-3'/>
                    <Shimmer width='40%' height={20} className='mt-2'/>
                    <Shimmer width='50%' height={20} className='mt-5'/>

               

                    <Shimmer width='50%' height={40} className='mt-5'/>

                    <div className="d-flex gap-3">
                    <Shimmer width='10%' height={40} className='mt-5'/>
                    <Shimmer width='8%' height={40} className='mt-5'/>
                    <Shimmer width='10%' height={40} className='mt-5'/>
                    </div>
                    <Shimmer width='80%' height={10} className='mt-3'/>
                    <Shimmer width='20%' height={40} className='mt-4 rounded-pill'/>




                 
                </div>
                    </>
                ):(
                    <>
                     <div className="right">
                    <h1 className="display-3 fw-bold">{productdata.productname}</h1>
                    <p className="fs-4 text-secondary">{productdata.desc}</p>
                    <p className="fs-4">⭐ rating {productdata.rating}</p>

                    <p className="fs-2"><del className='text-danger'>&#8377; {productdata.price} /- </del>  &#8377;{productdata.price-1}/- <small>Only</small></p>


                    <div className="d-flex align-items-center gap-3">
                    <button className="btn btn-dark bg-black border-0" onClick={()=>{
                            if(quantity >1){
                                setQuantity(quantity-1);
                                setTotal(Number(productdata.price) * Number(quantity))
                            }
                        }}><i class="bi bi-dash"></i></button>
                    
                        <span className="fs-3">{quantity}</span>
                        <button className="btn btn-dark bg-black border-0" onClick={()=>{
                            setQuantity(quantity+1)
                            setTotal(Number(productdata.price) * Number(quantity))
                            }}><i class="bi bi-plus"></i></button>
                    
                    </div>
                    <small className="small d-block text-secondary">Your total Order price is &#8377;{total}</small>
                    <button className="btn btn-warning mt-4 rounded-pill">Order Request</button>
                </div>
                    </>
                )
               }
            </div>
        </div>
      
    </section>
  )
}

export default ProductView

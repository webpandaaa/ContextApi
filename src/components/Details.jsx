import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading';

const Details = () => {

  const [product , setproduct] = useState(null);

  const {id} = useParams();
  const getsingleproducts = async () => {
    try{
      const {data} = await axios.get(`/products/${id}`);
      setproduct(data);
    }catch(e){
      console.log(e);
    }
  };


  useEffect(()=>{
    getsingleproducts();
  },[]);



  return ( product ? (
    <div className='w-[70%] flex h-full justify-between items-center m-auto p-[10%]'>
        <img 
            className='object-contain h-[80%] w-[40%]'
            src={`${product.image}` }
            alt="" 
        />
        <div className='content w-[50%]'>
            <h1 className='text-3xl'>{product.title}</h1>
            <h3 className='text-zinc-400 my-5'>{product.category}</h3>
            <h2 className='text-red-200 mb-3'>{product.price}</h2>
            <p className='mb-5'>
                {product.description}
            </p>
            <Link className='py-2  px-5 border rounded border-blue-500 text-blue-300' >Edit</Link>
            <Link className='py-2 ml-5 px-5 border rounded border-red-500 text-red-300' >Delete</Link>
        </div>
      
    </div>
  ) : (
    <Loading/>
  )
    
  )
}

export default Details

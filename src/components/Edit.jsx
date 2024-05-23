import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils/Context';
import { nanoid } from 'nanoid';
import { json, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Edit = () => {
    const [products , setproducts] = useContext(ProductContext);
    const navigate = useNavigate();
    const {id} = useParams();
    const [ product , setproduct ] = useState({
        title : "",
        image : "",
        category : "",
        price : "",
        description : "",

    });

    const changeHandler = (e) => {
        // console.log(e.target.name , e.target.value);
        
        setproduct({...product, [e.target.name] : e.target.value});

    }


    useEffect(() => {
        setproduct(products.filter((p) => p.id == id)[0]);
    } , [id]);



    
    const addproductHandler = (e) =>{
        e.preventDefault();
        if(
            product.title.trim().length < 5 ||
            product.image.trim().length < 5 ||
            product.category.trim().length < 5 ||
            product.price.trim().length < 1 ||
            product.description.trim().length < 5 
        ) {
            alert("Each field must not be empty !");   
            return; 
        }
        
        
        const pi  = products.findIndex((p) => p.id == id);
        
        const copydata = [...products];
        copydata[pi] = {...products[pi] , ...product}
        
        // console.log(copydata);

         setproducts(copydata);
        localStorage.setItem(
            "products",
            JSON.stringify(copydata)
        );
        toast.success("product successfully updated!")
        navigate(-1);





       
    }

    

  return (
    <form  onSubmit={addproductHandler} className='flex flex-col items-center p-[5%] w-screen h-screen'>
    <h1 className='text-2xl font-bold mb-5 w-1/2'>Update Product</h1>
    
    <input 
        type="url" 
        placeholder="image"
        className='text-1xl  bg-zinc-300 rounded p-3 w-1/2 mb-5'
        name="image"
        onChange={changeHandler}
        value={product && product.image}
    />
    <input 
        type="text" 
        placeholder="title"
        className='text-1xl  bg-zinc-300 rounded p-3 w-1/2 mb-5'
        name = "title"
        onChange={changeHandler}
        value={product && product.title}
    />
    <div className='flex justify-between w-1/2'>
    <input 
        type="text" 
        placeholder="category"
        className='text-1xl  bg-zinc-300 rounded p-3 w-[49%] mb-5'
        name="category"
        onChange={changeHandler}
        value={product && product.category}
    />
    <input 
        type="number" 
        placeholder="price"
        className='text-1xl  bg-zinc-300 rounded p-3 w-[49%]  mb-5'
        name="price"
        onChange={changeHandler}
        value={product && product.price}
    />
    </div>
    <textarea
        type="text" 
        placeholder="description"
        className='text-1xl bg-zinc-300 rounded p-3 w-1/2 mb-5 resize-none'
        name="description"
        onChange={changeHandler}
        value={product && product.description}
    ></textarea> 
    <button 
    className='py-2 px-5 border rounded bg-blue-500 text-white'>
       Update
  </button>
        
  
</form>
  )
}

export default Edit

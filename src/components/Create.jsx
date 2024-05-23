import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context';
import { nanoid } from 'nanoid';
import { json, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Create = () => {

    const [products , setproducts] = useContext(ProductContext);
    const navigate = useNavigate();
    const [ title , settitle ] = useState("");
    const [ image , setimage ] = useState("");
    const [ category , setcategory ] = useState("");
    const [ price , setprice ] = useState("");
    const [ description , setdescription ] = useState("");

    const addproductHandler = (e) =>{
        e.preventDefault();


        if(
            title.trim().length < 5 ||
            image.trim().length < 5 ||
            category.trim().length < 5 ||
            price.trim().length < 1 ||
            description.trim().length < 5 
        ) {
            alert("Each field must not be empty !");   
            return; 
        }
        
        const product = { 
            id:nanoid(),
            title, 
            image, 
            category, 
            price, 
            description};
        setproducts([...products , product]);
        // console.log(products);
        localStorage.setItem(
            "products",
            JSON.stringify([...products ,product])
        );
        toast.success("product successfully Created!")
        navigate("/");
    }

    

  return (
    <form  onSubmit={addproductHandler} className='flex flex-col items-center p-[5%] w-screen h-screen'>
        <h1 className='text-2xl font-bold mb-5 w-1/2'>Add new Product</h1>
        
        <input 
            type="url" 
            placeholder="image"
            className='text-1xl  bg-zinc-300 rounded p-3 w-1/2 mb-5'
            onChange={(e) => setimage(e.target.value)}
            value={image}
        />
        <input 
            type="text" 
            placeholder="title"
            className='text-1xl  bg-zinc-300 rounded p-3 w-1/2 mb-5'
            onChange={(e) => settitle(e.target.value)}
            value={title}
        />
        <div className='flex justify-between w-1/2'>
        <input 
            type="text" 
            placeholder="category"
            className='text-1xl  bg-zinc-300 rounded p-3 w-[49%] mb-5'
            onChange={(e) => setcategory(e.target.value)}
            value={category}
        />
        <input 
            type="number" 
            placeholder="price"
            className='text-1xl  bg-zinc-300 rounded p-3 w-[49%]  mb-5'
            onChange={(e) => setprice(e.target.value)}
            value={price}
        />
        </div>
        <textarea
            type="text" 
            placeholder="description"
            className='text-1xl bg-zinc-300 rounded p-3 w-1/2 mb-5 resize-none'
            onChange={(e) => setdescription(e.target.value)}
            value={description}
        ></textarea> 
        <button 
        className='py-2 px-5 border rounded bg-blue-500 text-white'
        href="/create">
          Add new product
      </button>
            
      
    </form>
  )
}

export default Create

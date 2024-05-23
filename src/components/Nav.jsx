import React, { useContext } from 'react'
import { ProductContext } from "../utils/Context"
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const [products] = useContext(ProductContext); 

  let distinct_cat = products && products.reduce((acc , cv) => [...acc ,cv.category], []);
  distinct_cat = [...new Set(distinct_cat)];
  // console.log(distinct_cat);



  const color = () =>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`;
  };



  
  
  
  
  return (
    <>
      <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
        
      <a 
        className='py-2 px-5 border rounded border-blue-200 text-blue-300'
        href="/create">
          Add new product
      </a>
      <hr className='my-3 w-[80%]' />
      <h1 className='text-xl font-bold mb-3 w-[80%]'>Category Filter</h1>
      <div className='w-[80%]'>

        {distinct_cat.map((c, i) => ( 
          <Link 
          key={i}
          to={`/?category=${c}`}
          className='flex items-center  mb-3' >
          <span style={{backgroundColor:color()}} className='rounded-full mr-2 w-[12px] h-[12px] bg-blue-100'></span>{" "}
          {c}
        </Link>
       ))}

      </div>
     </nav>
    </>
  )
}
export default Nav


        


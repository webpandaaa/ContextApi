import React, { useContext, useEffect, useState } from 'react'
import Nav from "../components/Nav"
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import axios  from '../utils/axios'

const Home = () => {

  const [products] = useContext(ProductContext);
  // console.log(products);
  
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  // console.log(category);

  const [filteredProduct , setfilteredProduct] = useState(null);

  // const getproductscategory = async () =>{
  //     try{
  //       const {data} = await axios.get(`products/category/${category}`);
  //       setfilteredProduct(data);
  //     }catch(e){
  //       console.log(e);
  //     }
  // }

  useEffect(() =>{
    if(!filteredProduct || category == "undefined") setfilteredProduct(products);
    
    if(category !=  "undefined")
      {
      // getproductscategory();
      setfilteredProduct(products.filter((p) => p.category == category));

    }  

  }, [category , products]);

  // console.log(filteredProduct);

  return  products ?  ( 
    <>
    <Nav/>
    <div className='h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
        
      {  filteredProduct && filteredProduct.map((p, i) =>(
        
        <Link  key={p.id} to={`/details/${p.id}`} className='card hover:scale-110 transition-all m-5 p-3 border-2 border-zinc-400 shadow rounded w-[18%] h-[40vh] flex-col flex justify-center items-center' >
          <div
          className='mb-3 w-full h-[70%] bg-contain bg-no-repeat bg-center'
          style ={{
            backgroundImage:
            `url(${p.image})`
          }}

          ></div>
          <h1>{p.title}</h1>
        </Link>
        ) 
      )}
   
    </div>
    </>
  ) : (
    <Loading/>
  )
}
        
        
        

export default Home

import React, { useContext } from 'react'
import Nav from "../components/Nav"
import { Link } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'

const Home = () => {

  

  const [products] = useContext(ProductContext);
  console.log(products);


  return  products ?  ( 
    <>
    <Nav/>
    <div className='h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
        
      {products.map((p, i) =>(
        
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

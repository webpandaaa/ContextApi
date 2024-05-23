import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import { Link, useLocation } from 'react-router-dom';
import Create from './components/Create';
import Edit from './components/Edit';


const App = () => {


  const { search , pathname} = useLocation();
  // console.log(search, pathname);
 
  return (
    <div className='h-screen w-screen flex'>
      
      {
          (pathname != "/" || search.length > 0) && (
          <Link
          to={"/"}
          className='text-red-300 absolute top-[3%] left-[18%] border-2 px-5 py-2 border-red-300 rounded'
          >Home</Link>
          )
      }
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
      
    </div>
  )
}

export default App

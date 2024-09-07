import React from 'react';
import {FiHeart} from 'react-icons/fi';
import {AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai';
//import { useState } from 'react';
//import products from '../DB/Data';

export default function Nav({filter, searchText}) {
 

 


  return (
    <nav className='border border-gray-100 flex justify-around items-center p-5'>
    <div className='flex space-x-3'>
      <p className='text-xl'>Search your fav:</p>
        <input  className='border border-gray-500 bg-slate-50 mr-56 relative rounded-sm'
         type='text' 
         placeholder='Search item'
         value={filter}
         onChange={searchText}
          />
    </div>  
    <div className='flex text-blue-700'>
        <a href='J'> 
        <FiHeart className='w-5 h-5 ml-3' />
        </a>
        <a href='J'> 
        <AiOutlineShoppingCart className='w-5 h-5 ml-3' />
        </a>
        <a href='J'> 
        <AiOutlineUserAdd className='w-5 h-5 ml-3' />
        </a>
    </div>
</nav>
  )
}

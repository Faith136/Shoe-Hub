import React from 'react';
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import { BsCartCheckFill } from 'react-icons/bs';

export default function Sideb({handleChange}) {
  return (
    <>
    <section className=' w-36 border-gray-300 fixed h-screen border-r-2 border z-10 flex flex-col items-center'>
        <div>
            <h1 className='font-extra-bold mb-8'><BsCartCheckFill className=' w-24 h-5 mt-5 text-blue-600' /></h1>
        </div>

        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
    </section>
    </>
  )
}

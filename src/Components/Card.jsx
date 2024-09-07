import React from 'react';
//import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'

export default function Card({ img, title, star, newPrice }) {
  return (
    <section className='grid lg:grid-cols-4 lg:grid-rows-4 gap-x-0 gap-y-1 ml-20'>
    <div className='m-20 border-2 border-gray-400 p-5 mb-1 cursor-pointer'>
        <img  src={img} className='w-13 mb-1' alt='Shoe'/>
        <div>
          <h3 className='mb-1 font-bold'>{title}</h3>
          <section className='flex mb-1 text-yellow-300'>
            {star}{star}{star}{star}
              </section>
            <section className='flex justify-around space-x-10 items-center'>
              <div className=''>
              Ksh.{newPrice}
              </div>

              <div>
                <BsFillBagHeartFill className='text-blue-600'/>
              </div>
            </section>
        </div>
      </div></section>
  )
}

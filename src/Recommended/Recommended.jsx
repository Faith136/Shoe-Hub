import React from 'react'
//import products from '../DB/Data'
import Button from '../Components/Button'

export default function Recommended({handleClick}) {
 
 

  return (
    <>
    <div className='mb-[-60px]'>
      <h2 className='ml-40 mb-2 mt-2 font-bold'>Recommended</h2>
      <div className='flex ml-40'>
      <Button onClick={handleClick} value='All Products' title='All Products'/>
       <Button onClick={handleClick} value='Nike' title='Nike'/>
       <Button onClick={handleClick} value='Puma' title='Puma'/>
       <Button onClick={handleClick} value='Adidas' title='Adidas'/>
       <Button onClick={handleClick} value='Vans' title='Vans'/>
      </div>
      </div>
    </>    
  )
}

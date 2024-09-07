import React from 'react'
import Input from '../../Components/Input'

export default function colors({ handleChange }) {
  return (
    <div>
    <h className="font-bold">Colors</h>
    <div className='flex flex-col '>
      <label className='space-x-2'>
        <input handleChange={handleChange} type='radio'value='all' name='test' checked className='text-blue-500'/>
        <span></span>All
      </label>
      <Input handleChange={handleChange} value="black" name='test3' 
        title="Black"/>
        
        
          <Input handleChange={handleChange} value="white" name='test3' 
        title="White"/>
        
        
          <Input handleChange={handleChange} value="blue" name='test3' 
        title="Blue"/>
        
        
          <Input handleChange={handleChange} value="red" name='test3' 
        title="Red"/>
         <Input handleChange={handleChange} value="emerald" name='test3' 
        title="Emerald"/>
    </div>
  </div>
  )
}

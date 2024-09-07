import React from 'react'
import Input from '../../Components/Input'

export default function Price({handleChange}) {
  return (
    <div>
      <h className="font-bold">Price(In Ksh.)</h>
      <div className='flex flex-col '>
        <label className='space-x-2'>
          <input onChange={handleChange} type='radio' value="" name='test2' checked className='text-blue-500'/>
          <span></span>All
        </label>
        
          <Input handleChange={handleChange} value={500} name='test2' 
        title="0-500"/>
        
        
          <Input handleChange={handleChange} value={1000} name='test2' 
        title="500-1000"/>
        
        
          <Input handleChange={handleChange} value={1500} name='test3' 
        title="1000-1500"/>
        
        
          <Input handleChange={handleChange} value={2000} name='test3' 
        title="1500-2000"/>
        
      </div>
    </div>
  )
}

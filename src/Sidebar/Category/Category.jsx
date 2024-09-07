import React from 'react'
import Input from '../../Components/Input'

export default function Category({item, category, handleChange}) {
  return (
    <div>
      <h className="font-bold">Category</h>
      <div className='flex flex-col '>
        <label className='space-x-2'>
          <input onChange={handleChange} type='radio' name='test' value="" checked className='text-blue-500' />
          <span></span>All
        </label>
       <Input 
       handleChange={handleChange}
       value='flats'
       title='Flats'
       name='test'/>
       <Input 
       handleChange={handleChange}
       value='sandals'
       title='Sandals'
       name='test'/>
              <Input 
       handleChange={handleChange}
       value='heels'
       title='Heels'
       name='test'/>
              <Input 
       handleChange={handleChange}
       value='crocks'
       title='Crocks'
       name='test'/>

      </div>
    </div>
  )
}

import React from 'react'

export default function Input({ handleChange, value, title, name, color}) {
  return (
   <label className='space-x-2'>
    <input onChange={handleChange} type='radio' value={value} name={name}/>
    <span className='checkmark'></span>{''}{title}
   </label>
  )
}

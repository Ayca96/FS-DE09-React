import React from 'react'

const HoverandFocus = () => {
  return (
    <div>
      <button 
      className='w-40 bg-slate-400 p-4 m-4 text-slate-50 hover:bg-red-400 hover:shadow-custom
      hover:rounded-xl hover:text-slate-700'>
      Save
      </button>
      <input type="email" placeholder='Focus' className='border border-gray-400 rounded-lg p-4 w-20 focus:outline-red-500 focus:w-96 peer'/>
      <p className='text-red-600 invisible peer-invalid:visible'>
      Invalid
      </p>
    </div>
  )
}

export default HoverandFocus



// "hover:shadow-[0_4px_6px_-1px_rgba(255,0,0,0.5)]"  özel stil belirlemek icin square bracket notion kullanilir. Ve bu cok önemlidir.
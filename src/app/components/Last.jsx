import React from 'react'

const Last = ({title, subtitle}) => {
  return (
    <div className='flex flex-col bg-blue-50 p-5 rounded-3xl shadow-xl'>
      <div>
        <div className='text-slate-500'>{title}</div>
        <div className='font-extrabold text-black text-3xl '>{subtitle}</div>
      </div>
    </div>
  )
}

export default Last
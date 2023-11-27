import React from 'react'

const MiniCard = ({title, subtitle}) => {
  return (
    <div className='flex flex-col bg-emerald-50 rounded-2xl shadow-xl text-green-500 font-extrabold p-5 text-3xl hover:bg-emerald-100 duration-200'>
        {title}
        <div className='text-black text-lg font-medium'>{subtitle}</div>
    </div>
  )
}

export default MiniCard
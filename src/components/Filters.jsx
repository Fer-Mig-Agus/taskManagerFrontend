import React from 'react'

const Filters = ({search, handleChangeInput, handleChangeFilter}) => {
  return (
    <div className='w-1/3 h-20 flex justify-between items-center gap-2 rounded-lg'>

        <input type="text" className='w-80 h-10 border border-gray-300 px-3 py-2  rounded-md outline-none ring-2 ring-color-pink' placeholder='Search Tasks...' value={search} onChange={handleChangeInput} id="" />

        <select name="" className='w-24 h-10 border bg-color-pink px-2 py-2 rounded-md text-black font-serif text-sm'  onChange={handleChangeFilter}  id="">
            <option value="default">Unfiltered</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
        </select>
    </div>
  )
}

export default Filters
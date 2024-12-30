import React from 'react'

import deleteIcon from '../assets/img/delete.svg';
import stop from '../assets/img/stop.svg';

const { VITE_URL_API } = import.meta.env;
import axios from 'axios';

const CardTaskCompleted = ({ _id, title, description, completed, createdAt }) => {
  return (
    <div  className='w-full h-auto bg-color-pink mb-3 rounded-lg flex flex-col justify-center items-center p-5'>
      <h3 className='text-xl font-serif text-black border-b-2 border-black mb-2'>{title}</h3>
      <p className='text-sm font-sans text-black '>{description}</p>
      <div className='w-full flex justify-end'>
      <span className='text-sm font-sans text-black'>{createdAt}</span>
      </div>
      <div className='w-full  h-auto py-2 flex justify-center items-center gap-6 '>
              <button className='w-8 h-8 overflow-hidden'><img className='w-full h-auto' src={stop} alt="img-stop" title='Click me to undo as done'/></button>
              <button className='w-8 h-8 overflow-hidden'><img className='w-full h-auto' src={deleteIcon} alt="img-delete" title='Click me to delete the task'/></button>
            </div>
    </div>
  )
}

export default CardTaskCompleted
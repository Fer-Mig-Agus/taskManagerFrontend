import React, { useState } from 'react'
const { VITE_URL_API } = import.meta.env;
import axios from 'axios';
import { displayFailedMessage,displaySuccessMessage } from '../utils/displayToastifyMessages';

const UpdateTask = ({detailsTask,handleChangeDetailsTask,setUpdateTask,setDetailsTask}) => {


    const updateTask = async (sendTask) => {
        try {
          const { data } = await axios.put(`${VITE_URL_API}/api/tasks/${detailsTask._id}`,sendTask);
          
          

        displaySuccessMessage('Task successfully updated');
        window.location.reload();
        } catch (error) {
            const errors=error?.response?.data?.errors;
            if(errors){
                errors.map(e=>{
                    return displayFailedMessage(e.msg)
                })
            }
            displayFailedMessage(error?.response?.data?.error);
        }
    
      };

      const handleUpdateTask=(event)=>{
        event.preventDefault();
        if(detailsTask.title === '' && detailsTask.description == ''){
            displayFailedMessage('You must complete at least the title')
            return
        }
        if(detailsTask.title === ''){
            displayFailedMessage('The title field is required')
            return
        }

        if(detailsTask.title.length < 5){
            displayFailedMessage('The title must be at least 5 characters long')
            return
        }

        if(detailsTask.description !== '' & detailsTask.description.length < 10){
            displayFailedMessage('The description must be at least 10 characters long')
            return
        }

        console.log(detailsTask)
        let sendTask={};
        sendTask['title']=detailsTask.title;
        if(detailsTask.description !== ''){
            sendTask['description']=detailsTask.description;
        }
        updateTask(sendTask);
      }


    const hadleCancelUpdate=(event)=>{
        event.preventDefault();
        setUpdateTask(false)
        setDetailsTask({
            _id:'',
            title:'',
            description:''
          })
    }

    return (
        <div className='w-1/3 h-64 bg-color-blue p-3 flex flex-col justify-between items-center gap-2 rounded-lg'>
            <h1 className='text-black font-serif text-xl '>Update Task</h1>

            <div className='w-1/1 flex flex-col justify-center items-center gap-3 '>
                {/* <input className='w-96 rounded-sm text-black px-2 py-2 font-sans text-sm ' type="text"  placeholder='Title...' name="title" value={detailsTask.title} onChange={handleChangeInput} id="" />
                <textarea className='w-96 rounded-sm text-black px-2 py-2 font-sans text-sm ' type='text-area' name="description" value={detailsTask.description} onChange={handleChangeInput} id="" placeholder='Description...'></textarea> */}
                <input className='w-96 border border-gray-300 px-3 py-2 mb-4 rounded-md outline-none ring-2 ring-color-pink' type="text"  placeholder='Title...' name="title" value={detailsTask.title} onChange={handleChangeDetailsTask} id="" />
                <textarea className='w-96 border border-gray-300 px-3 py-2 mb-4 rounded-md outline-none ring-2 ring-color-pink' type='text-area' name="description" value={detailsTask.description} onChange={handleChangeDetailsTask} id="" placeholder='Description...'></textarea>
            </div>
            <div className='flex w-96 justify-center items-center gap-2'>
            <button className='bg-blue-400  w-40 py-2 text-black rounded-md cursor-pointer border-2 border-color-pink hover:bg-color-blue' onClick={hadleCancelUpdate}>Cancel</button>
                <button className='bg-blue-400  w-40 py-2 text-black rounded-md cursor-pointer border-2 border-color-pink hover:bg-color-blue' onClick={handleUpdateTask}>Update</button>
            </div>
        </div>
    )
}

export default UpdateTask
import React, { useState } from 'react'
const { VITE_URL_API } = import.meta.env;
import axios from 'axios';
import { displayFailedMessage,displaySuccessMessage } from '../utils/displayToastifyMessages';

const CreateTask = () => {

    const [newTask,setNewTask]=useState({
        title:'',
        description:''
    })

    const handleChangeInput=(event)=>{
        const property=event.target.name;
        const value=event.target.value;
        setNewTask({...newTask,[property]:value})
    }


    const createTask = async (sendTask) => {
        try {
          const { data } = await axios.post(`${VITE_URL_API}/api/tasks`,sendTask);
          console.log(data)
          setNewTask({
            title:'',
            description:''
        })

        displaySuccessMessage('Task successfully added');
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

      const handleCreateTask=(event)=>{
        event.preventDefault();
        if(newTask.title === '' && newTask.description == ''){
            displayFailedMessage('You must complete at least the title')
            return
        }
        if(newTask.title === ''){
            displayFailedMessage('The title field is required')
            return
        }

        if(newTask.title.length < 5){
            displayFailedMessage('The title must be at least 5 characters long')
            return
        }

        if(newTask.description !== '' & newTask.description.length < 10){
            displayFailedMessage('The description must be at least 10 characters long')
            return
        }

        console.log(newTask)
        let sendTask={};
        sendTask['title']=newTask.title;
        if(newTask.description !== ''){
            sendTask['description']=newTask.description;
        }
        createTask(sendTask);
      }

    return (
        <div className='w-1/3 h-64 bg-color-blue p-3 flex flex-col justify-between items-center gap-2 rounded-lg'>
            <h1 className='text-black font-serif text-xl '>Create a new Task</h1>

            <div className='w-1/1 flex flex-col justify-center items-center gap-3 '>
                {/* <input className='w-96 rounded-sm text-black px-2 py-2 font-sans text-sm ' type="text"  placeholder='Title...' name="title" value={newTask.title} onChange={handleChangeInput} id="" />
                <textarea className='w-96 rounded-sm text-black px-2 py-2 font-sans text-sm ' type='text-area' name="description" value={newTask.description} onChange={handleChangeInput} id="" placeholder='Description...'></textarea> */}
                <input className='w-96 border border-gray-300 px-3 py-2 mb-4 rounded-md outline-none ring-2 ring-color-pink' type="text"  placeholder='Title...' name="title" value={newTask.title} onChange={handleChangeInput} id="" />
                <textarea className='w-96 border border-gray-300 px-3 py-2 mb-4 rounded-md outline-none ring-2 ring-color-pink' type='text-area' name="description" value={newTask.description} onChange={handleChangeInput} id="" placeholder='Description...'></textarea>
            </div>
            <div className='flex w-96 justify-end items-end'>
                <button className='bg-blue-400  w-40 py-2 text-black rounded-md cursor-pointer border-2 border-color-pink hover:bg-color-blue' onClick={handleCreateTask}>Add</button>
            </div>
        </div>
    )
}

export default CreateTask
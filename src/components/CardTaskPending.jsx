import React from 'react'
import check from '../assets/img/check.svg';
import deleteIcon from '../assets/img/delete.svg';
import update from '../assets/img/update.svg';
import swal from 'sweetalert'
const { VITE_URL_API } = import.meta.env;
import axios from 'axios';
import { displayFailedMessage,displaySuccessMessage } from '../utils/displayToastifyMessages';


const CardTaskPending = ({_id,title,description,completed,createdAt,setDetailsTask,setUpdateTask}) => {


  const handleChangeStatusTask=(event)=>{
    event.preventDefault();
    swal({
			title: 'Attention',
			text: 'Are you sure to mark as completed task?',
			icon: 'warning',
			buttons: ['No', 'Yes'],
		}).then((response) => {
			if (response) {
				changeStatusTask();
			} else {
				swal({
					title: 'Canceled',
					text: 'The operation has been successfully cancelled.',
					icon: 'success',
					buttons: 'Accept',
				});
			}
		});
  }




  const changeStatusTask = async () => {
    try {
      const { data } = await axios.put(`${VITE_URL_API}/api/tasks/${_id}`,{completed:true});
      console.log(data)
      window.location.reload()
    } catch (error) {
      console.log(error);
    }

  };

  const handleChangeDeleteTask=(event)=>{
    event.preventDefault();
    swal({
			title: 'Attention',
			text: 'Are you sure to remove the task?',
			icon: 'warning',
			buttons: ['No', 'Yes'],
		}).then((response) => {
			if (response) {
				deleteTasks();
			} else {
				swal({
					title: 'Canceled',
					text: 'The operation has been successfully cancelled.',
					icon: 'success',
					buttons: 'Accept',
				});
			}
		});
  }



  const deleteTasks=async () => {
    try {
      const { data } = await axios.delete(`${VITE_URL_API}/api/tasks/${_id}`);
      console.log(data)
      window.location.reload()
    } catch (error) {
      console.log(error);
    }

  };



  const handleUpdateTask=(event)=>{
    event.preventDefault();
    console.log('entro para actualizar')
    setDetailsTask({
      _id:_id,
      title:title,
      description:description
    });
    setUpdateTask(true);
    displaySuccessMessage('Ahora sube!!! :)')
    return
  }


  return (
    <div className='w-full h-auto bg-color-blue mb-3 rounded-lg flex flex-col justify-center items-center p-5'>
      <h3 className='text-xl font-serif text-black border-b-2 border-black mb-2'>{title}</h3>
      <p className='text-sm font-sans text-black '>{description}</p>
      <div className='w-full flex justify-end'>
      <span className='text-sm font-sans text-black'>{createdAt}</span>
      </div>
      <div className='w-full  h-auto py-2 flex justify-center items-center gap-6 '>
        <button onClick={handleChangeStatusTask} className='w-8 h-8 overflow-hidden'><img className='w-full h-auto' src={check} alt="img-chek"  title='Click me to mark as done '/></button>
        <button onClick={handleChangeDeleteTask} className='w-8 h-8 overflow-hidden'><img className='w-full h-auto' src={deleteIcon} alt="img-delete" title='Click me to delete the task ' /></button>
        <button onClick={handleUpdateTask} className='w-8 h-8 overflow-hidden'><img className='w-full h-auto' src={update} alt="img-update" title='Click me to update the task ' /></button>
      </div>
    </div>
  )
}

export default CardTaskPending
import React, { useEffect, useState } from 'react'
import { displayFailedMessage,displaySuccessMessage} from '../utils/displayToastifyMessages';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import CreateTask from '../components/CreateTask';
import UpdateTask from '../components/UpdateTask';
import Filters from '../components/Filters';
import ListTasks from '../components/ListTasks';
import { getAllTasks } from '../store/slices/task.slice';
const { VITE_URL_API } = import.meta.env;
const ViewMain = () => {


  const [filter,setFilter]=useState('default');
  const [search,setSearch]=useState('');
  const [updateTask,setUpdateTask]=useState(false)
  const [tasks,setTasks]=useState([]);

  const dispatch = useDispatch();

  const handleChangeInput=(event)=>{
    setSearch(event.target.value)
  }

  const handleChangeFilter=(event)=>{
    setFilter(event.target.value)
  }

  const getAllTasksFromApi = async () => {
    try {
      console.log('este es filter: ',filter)

      if(filter === 'default'){
        console.log('ENTRO POR DEFAULT')
        const { data } = await axios.get(`${VITE_URL_API}/api/tasks`);
        setTasks(data.data);
      }else{
        console.log('ENTRO POR EL FILTRO')
        const { data } = await axios.get(`${VITE_URL_API}/api/tasks?status=${filter}`);
        setTasks(data.data);
      }
    
    } catch (error) {
      console.log(error);
    }
  };

   useEffect(() => {
    getAllTasksFromApi();
  }, [filter]);

  useEffect(() => {
    dispatch(getAllTasks(tasks));
  }, [tasks]);


  return (
    <div className='w-full flex flex-col gap-5 justify-center items-center'>
      <h1 className='font-serif font-semibold text-xl text-black mt-5'>Task Manager by <a className='hover:text-blue-700 hover:cursor-pointer hover:scale-125 ' href="https://mfdev.tech" target='_blank'>Miguel Fernandez</a></h1>
      {!updateTask ? (     <CreateTask/> ) : (      <UpdateTask/> )}
      <Filters search={search} handleChangeInput={handleChangeInput} handleChangeFilter={handleChangeFilter} /> 
      <ListTasks search={search} /> 
    </div>
  )
}

export default ViewMain
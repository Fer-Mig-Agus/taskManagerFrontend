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
  const [tasks,setTasks]=useState([]);

  const [updateTask,setUpdateTask]=useState(false);

  const [detailsTask,setDetailsTask]=useState({
    _id:'',
    title:'',
    description:''
  })

  const dispatch = useDispatch();


  const handleChangeDetailsTask=(event)=>{
    const property=event.target.name;
    const value=event.target.value;
    setDetailsTask({...detailsTask,[property]:value})
  }

  const handleChangeInput=(event)=>{
    setSearch(event.target.value)
  }

  const handleChangeFilter=(event)=>{
    setFilter(event.target.value)
  }

  const getAllTasksFromApi = async () => {
    try {
      if(filter === 'default'){
        const { data } = await axios.get(`${VITE_URL_API}/api/tasks`);
        setTasks(data.data);
      }else{
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
      {!updateTask ? (     <CreateTask/> ) : (      <UpdateTask detailsTask={detailsTask} setUpdateTask={setUpdateTask} setDetailsTask={setDetailsTask} handleChangeDetailsTask={handleChangeDetailsTask}  /> )}
      <Filters search={search} handleChangeInput={handleChangeInput} handleChangeFilter={handleChangeFilter} /> 
      <ListTasks search={search} setDetailsTask={setDetailsTask} setUpdateTask={setUpdateTask} /> 
    </div>
  )
}

export default ViewMain
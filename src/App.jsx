import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { displayFailedMessage } from './utils/displayToastifyMessages';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
const { VITE_URL_API } = import.meta.env;
import ViewMain from './views/ViewMain';
import { getAllTasks } from './store/slices/task.slice';
function App() {

  const [tasks, setTasks] = useState([]);


  const dispatch = useDispatch();

  const getAllTasksFromApi = async () => {
    try {
      const { data } = await axios.get(`${VITE_URL_API}/api/tasks`);
      console.log(data)
      setTasks(data.data);
    } catch (error) {
      console.log(error);
    }

  };


  useEffect(() => {
    if(tasks && tasks.length === 0){
      getAllTasksFromApi();
    }
  }, [])

  useEffect(() => {
    dispatch(getAllTasks(tasks));
  }, [tasks]);

  return (
    <div className='content flex-col'>
      <Routes>
        <Route path='/' element={<ViewMain />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App

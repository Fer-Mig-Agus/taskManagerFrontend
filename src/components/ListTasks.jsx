import React from 'react'
import { useSelector } from 'react-redux';
import CardTaskPending from './CardTaskPending';
import CardTaskCompleted from './CardTaskCompleted';

const ListTasks = ({ search ,setDetailsTask,setUpdateTask}) => {

  const tasks = useSelector(state => state.tasks)
  //const tasks = []


  function formatoFecha(isoDate) {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }



  return (
    <div className='w-1/3 h-auto  flex mb-10 justify-center items-center rounded-lg'>
      {tasks && tasks.length !== 0 ? (
        <div className='w-full h-auto flex flex-col justify-between items-center gap-2'>
          {tasks
              .filter(task => task.title.toLowerCase().includes(search.toLowerCase()))
              .map(({ _id, title, description, completed, createdAt }) => {
                const date = formatoFecha(createdAt)
                if (completed) {
                  return <CardTaskCompleted key={_id} _id={_id} title={title} description={description} createdAt={date} />
                } else {
                  return <CardTaskPending key={_id} _id={_id} title={title} description={description} createdAt={date} setDetailsTask={setDetailsTask} setUpdateTask={setUpdateTask}  />
                }
              })
          }
        </div>
      ) : (
        <div className='w-1/2 h-auto  flex mb-10 justify-center items-center rounded-lg'>
          <h1 className='text-black font-serif text-md '>No hay tareas creadas...</h1>
        </div>
      )}

    </div>
  )
}

export default ListTasks
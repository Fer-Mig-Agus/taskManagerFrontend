import React from 'react'
import { displayFailedMessage,displaySuccessMessage} from '../utils/displayToastifyMessages';

const ViewMain = () => {
  return (
    <div>
        <button onClick={()=>{displaySuccessMessage('Bien hecho')}}>click me</button>
    </div>
  )
}

export default ViewMain
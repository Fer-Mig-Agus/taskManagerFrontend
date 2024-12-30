import { toast } from 'react-toastify';
  
  
  //******************************** Start to Module Of Toastify ************************************************//
  //Toastify module for success message
  export const displaySuccessMessage = (mensaje) => {
    toast.success(mensaje, {
      position: 'top-left',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  // Toastify module for error messages
  export const displayFailedMessage = (mensaje) => {
    toast.error(mensaje, {
      position: 'top-left',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  //******************************** End to Module Of Toastify ************************************************//


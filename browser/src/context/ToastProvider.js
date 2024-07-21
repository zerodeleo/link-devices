import React, { createContext, useContext, useEffect, useState } from 'react';
import { ToastContainer, toast as Toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastInit = {
  error: '',
  success: ''
};

const Context = createContext({});

export function useToast() {
  return useContext(Context);
}

export default function ToastProvider({ children }) {
  const [toast, setToast] = useState(toastInit);

  useEffect(() => {
    try {
      if (toast.error) {
        Toast.error(toast.error, '');
      }
      if (toast.success) {
        Toast.success(toast.success, '');
      }
    } finally {
      setToast(toastInit);
    }
  }, [toast]);

  const toastError = (msg) => {
    setToast((prevState) => ({ ...prevState, error: msg }));
  };

  const toastSuccess = (msg) => {
    setToast((prevState) => ({ ...prevState, success: msg }));
  };

  return (
    <Context.Provider
      value={{
        toastError,
        toastSuccess
      }}
    >
      <ToastContainer />
      {children}
    </Context.Provider>
  );
}

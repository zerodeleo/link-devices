import { createContext, useState, useContext, useEffect } from 'react';
import { useLinkDevices, useSocket } from './hooks';
import { updateFormData } from '../api/socket';

const Context = createContext({});

export function useForm() {
  return useContext(Context);
}

export default function FormProvider({ children }) {
  const { auth } = useLinkDevices();
  const { socket } = useSocket();
  const [formData, setFormData] = useState();
  const [isReciever, setIsReciever] = useState();

  useEffect(() => {
    if(socket && auth) {
      if (socket.connected) {
        socket.on('update_formdata_success', () => {});
        socket.on('recieved_formdata_success', (res) => {
          if (!isReciever) {
            setIsReciever(true)
          }
          setFormData(res)
        })
      }
    }
  },[socket, auth])

  useEffect(() => {
    if (formData && !isReciever && auth) {
      updateFormData(socket, formData)
    }
  }, [formData])

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = () => {
    // API call
  };

  return (
    <Context.Provider value={{ formData, handleFormChange, handleFormSubmit }}>
      {children}
    </Context.Provider>
  );
}

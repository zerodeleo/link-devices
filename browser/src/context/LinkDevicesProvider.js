import { createContext, useEffect, useState, useContext } from 'react';
import { useSocket, useToast } from './hooks';
import { authorizePin, createPin } from '../api/socket';

const Context = createContext({});

export function useLinkDevices() {
  return useContext(Context);
}

export default function LinkDevicesProvider({ children }) {
  const { socket } = useSocket();
  const [userInputs, setUserInputs] = useState({});

  const { toastSuccess, toastError } = useToast();
  const [pin, setPin] = useState();
  const [auth, setAuth] = useState();

  const [showLinkDevicesForm, setLinkDevicesForm] = useState(false);

  useEffect(() => {
    if (socket) {
      socket.on('create_pin_success', (p) => {
        setPin(p);
      });
      socket.on('recieved_pin_success', (p) => {
        setLinkDevicesForm(true)
        setPin(p)
      })
      socket.on('authorize_pin_success', p => {
        toastSuccess('Successfully linked devices!')
        setAuth(true);
      })
    }
  }, [socket]);

  useEffect(() => {
    if (Object.keys(userInputs).length === 4) {
      const userInputPin = Object.values(userInputs).join().replaceAll(',', '');
      authorizePin(socket, +userInputPin, +pin);
    }
  }, [userInputs]);

  const handleUserInputPin = (e) => {
    const { value, name } = e.target;
    if (!/\d/.test(value)) {
      return;
    }
    if (value) {
      setUserInputs({ ...userInputs, [name]: value });
    }
  };

  const handleLinkDevice = () => {
    if (socket.connected) {
      createPin(socket);
    }
  }

  return (
    <Context.Provider value={{ auth, pin, showLinkDevicesForm, userInputs, handleUserInputPin, handleLinkDevice }}>
      {children}
    </Context.Provider>
  );
}

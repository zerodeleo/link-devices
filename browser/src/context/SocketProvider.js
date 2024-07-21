import React, { createContext, useContext, useEffect, useState } from 'react';
import { connect } from '../api/socket';

const Context = createContext({});

export function useSocket() {
  return useContext(Context);
}

export default function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = connect();

    socket.on('connect', () => {
      setSocket(socket);
    });

    socket.on('disconnect', () => {
      setSocket(null);
    });

    return () => {
      socket.disconnect();
      setSocket(null);
    };
  }, []);

  return (
    <Context.Provider
      value={{
        socket
      }}
    >
      {children}
    </Context.Provider>
  );
}

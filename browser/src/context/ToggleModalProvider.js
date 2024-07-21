import { createContext, useState, useContext } from 'react';

import Modal from '../components/ModalComponent';
const Context = createContext({});

export function useModal() {
  return useContext(Context);
}

export default function ModalProvider({ children }) {
  const [modalChildren, setModalChildren] = useState();

  const showModal = (children) => {
    setModalChildren(children);
  };

  const hideModal = () => {
    setModalChildren();
  };

  return (
    <Context.Provider
      value={{
        showModal,
        hideModal
      }}
    >
      {modalChildren && <Modal>{modalChildren}</Modal>}
      {children}
    </Context.Provider>
  );
}

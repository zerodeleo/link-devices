import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  ToastProvider,
  LinkDevicesProvider,
  ToggleModalProvider,
  FormProvider,
  SocketProvider
} from './context/providers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ToastProvider>
    <SocketProvider>
      <LinkDevicesProvider>
        <ToggleModalProvider>
          <FormProvider>
            <App />
          </FormProvider>
        </ToggleModalProvider>
      </LinkDevicesProvider>
    </SocketProvider>
  </ToastProvider>
);

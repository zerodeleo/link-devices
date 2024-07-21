import { useEffect } from 'react';
import FormComponent from './components/FormComponent.js';
import LinkDevicesForm from './components/LinkDevicesForm.js';
import { useLinkDevices } from './context/LinkDevicesProvider.js';
import { useModal } from './context/ToggleModalProvider.js';

function App() {
  const { showLinkDevicesForm, auth } = useLinkDevices();
  const { showModal, hideModal } = useModal();

  useEffect(() => {
    if (showLinkDevicesForm) {
      showModal(<LinkDevicesForm />)
    }
    if (auth) {
      hideModal();
    }
  }, [showLinkDevicesForm, auth])

  return (
    <div className="h-screen flex cursor-none">
      <FormComponent />
    </div>
  );
}

export default App;

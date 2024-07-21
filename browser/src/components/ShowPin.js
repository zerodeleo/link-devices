import { useEffect } from 'react';
import { useLinkDevices } from '../context/hooks';

export default function ShowPin() {
  const { pin } = useLinkDevices();

  return (
    <div className="flex flex-col justify-between items-center h-full w-full p-8">
      <p className="w-full text-xs lg:text-lg">Link with another device</p>
      <p className="text-6xl lg:text-8xl">{pin}</p>
      <p className="text-xs italic w-full text-right">Introduce this pin on your other device</p>
    </div>
  );
}

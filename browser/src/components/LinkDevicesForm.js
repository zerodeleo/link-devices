import React, { useRef } from 'react';
import { useLinkDevices } from '../context/LinkDevicesProvider';

export default function LinkDevicesForm() {
  const { handleUserInputPin, userInputs } = useLinkDevices();

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const handleKeyUp = (e, nextInputRef) => {
    const { value } = e.target;
    if (value && nextInputRef) {
      nextInputRef.current.focus();
    }
  };

  return (
    <form className='flex flex-col justify-between items-center h-full w-full p-8'>
      <p className="w-full text-xs lg:text-lg">Link with another device</p>
      <div className="flex flex-row items-center mt-10 w-full justify-center">
        <input
          autoFocus
          ref={input1Ref}
          value={userInputs?.input1Ref || ''}
          onChange={handleUserInputPin}
          name="input1Ref"
          maxLength={1}
          type="text"
          className="block m-1 w-9 sm:w-12 lg:w-16 h-9 sm:h-12 lg:h-16 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          required
          onKeyUp={(e) => handleKeyUp(e, input2Ref)}
        />
        <input
          ref={input2Ref}
          value={userInputs?.input2Ref || ''}
          onChange={handleUserInputPin}
          maxLength={1}
          name="input2Ref"
          type="text"
          className="block m-1 w-9 sm:w-12 lg:w-16 h-9 sm:h-12 lg:h-16 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          required
          onKeyUp={(e) => handleKeyUp(e, input3Ref)}
        />
        <input
          ref={input3Ref}
          value={userInputs?.input3Ref || ''}
          onChange={handleUserInputPin}
          maxLength={1}
          name="input3Ref"
          type="text"
          className="block m-1 w-9 sm:w-12 lg:w-16 h-9 sm:h-12 lg:h-16 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          required
          onKeyUp={(e) => handleKeyUp(e, input4Ref)}
        />
        <input
          ref={input4Ref}
          value={userInputs?.input4Ref || ''}
          onChange={handleUserInputPin}
          maxLength={1}
          name="input4Ref"
          type="text"
          className="block m-1 w-9 sm:w-12 lg:w-16 h-9 sm:h-12 lg:h-16 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          onKeyUp={(e) => handleKeyUp(e, input1Ref)}
          required
        />
      </div>
      <p className="text-xs italic w-full text-right">Please introduce the 4 digit code visible on your mobile phone.</p>
    </form>
  );
}

import LinkDevicesForm from './LinkDevicesForm';
import { useForm, useLinkDevices, useModal } from '../context/hooks';
import ShowPin from './ShowPin';

function FormComponent() {
  const { formData, handleFormChange } = useForm();
  const { handleLinkDevice, auth } = useLinkDevices();
  const { showModal } = useModal();

  return (
    <form className="max-w-2xl m-auto w-full py-8 px-8">
      <div className="flex justify-between">
        <h1 className="text-4xl bold mb-4">FORM</h1>
{ !auth ?
        <button
          onClick={() => {
            handleLinkDevice()
            showModal(<ShowPin />)
          }}
          type="button"
          className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm h-full px-4 py-1 sm:px-5 sm:py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mb-2"
        >
          <span className="text-xl mr-4">🔗</span>
          Link with another device
        </button> : <p>🔗 Linked to your other device</p>}
      </div>
      <div>
        <label
          htmlFor="small-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          First Name
        </label>
        <input
          name={'firstName'}
          value={formData?.firstName || ''}
          onChange={handleFormChange}
          type="text"
          id="small-input"
          className="block w-full p-3 mb-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="small-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Last Name
        </label>
        <input
                  name={'lastName'}
                  value={formData?.lastName || ''}
                  onChange={handleFormChange}
          type="text"
          id="small-input"
          className="block w-full p-3 mb-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <label
        htmlFor="small-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Phone Number
      </label>
      <div className="flex items-center mb-4">
        <button
          id="dropdown-phone-button"
          data-dropdown-toggle="dropdown-phone"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
        >
          +46{' '}
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div className="relative w-full">
          <input
                    name={'phone'}
                    value={formData?.phone || ''}
                    onChange={handleFormChange}
            type="phone"
            id="phone-input"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="07X-XXXX-XXX"
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
                  name={'message'}
                  value={formData?.message || ''}
                  onChange={handleFormChange}
          id="message"
          rows="8"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
      <div className="flex mt-5 w-full justify-end">
        <button
          type="button"
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Continue
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default FormComponent;

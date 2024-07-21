import { useModal } from '../context/hooks';

export default function Modal({ children }) {
  const { hideModal } = useModal();

  return (
    <div className="fixed inset-0 flex z-20 bg-[#282c34] items-center justify-center bg-opacity-90">
      <div className="relative flex flex-col items-center justify-center w-3/5 md:w-1/2 lg:w-1/3 bg-white m-auto aspect-square rounded-lg">
        <button
          className="absolute right-0 top-0 bg-gray-400 rounded p-1 hover:bg-gray-300"
          onClick={hideModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

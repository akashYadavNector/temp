import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  setModalClose: (value: boolean) => void;
}

const Modal = ({ children, setModalClose }: ModalProps) => {
  const handleModalClose = () => setModalClose(false);
  const handleInnnerModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={handleModalClose}
    >
      <div
        className="bg-white rounded-xl p-4 sm:p-6 relative flex flex-col 
    w-full max-w-[95%] sm:max-w-[90%] md:max-w-[30rem] 
    min-h-[20rem] max-h-[90vh] overflow-y-auto"
        onClick={handleInnnerModalClick}
      >
        {/* Modal Content */}
        <div className="flex-1">{children}</div>

        {/* Close Button Container */}
        <div className="flex flex-col items-center mt-4 sm:mt-8">
          <button
            onClick={handleModalClose}
            className="text-gray-400 ring-1 ring-gray-400 rounded-lg
        w-full sm:w-4/12 py-2 sm:py-1
        hover:text-white hover:bg-gray-600 
        transition-colors duration-300
        text-sm sm:text-base font-normal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleModalClose}
    >
      <div
        className="bg-[#fff] rounded-xl p-6 relative flex flex-col min-w-[30rem]"
        onClick={handleInnnerModalClick}
      >
        {children}
        <div className="flex flex-col items-center">
          <button
            onClick={handleModalClose}
            className="text-gray-400 ring-gray-400 rounded w-2/5 ring-1 mt-8 hover:text-white hover:bg-gray-600 duration-300 py-1"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

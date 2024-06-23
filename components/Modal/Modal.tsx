import React, { FC, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal:React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!isOpen) {
    return null
  }
  

  return ReactDOM.createPortal(
    <div className='hidden md:block '>
    <div className="  fixed inset-0  flex items-center justify-center z-[2] pt-5 bg-opacity-50 bg-black" onClick={onClose}>
      <div className="bg-white  rounded shadow-lg max-w-lg w-full " onClick={(e) => e.stopPropagation()}>
        <button className="  text-3xl pl-[480px]  text-slate-400 hover:text-slate-600" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
    </div>,
    document.body
  );
};

export default Modal;

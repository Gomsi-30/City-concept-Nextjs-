"use client";

import { useState } from 'react';
import ContactForm from '../../_components/contactus/contactus'; 
import { IoMdClose } from 'react-icons/io'; 

const RequestCallbackPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpenPopup}
        className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500"
      >
        Request for call back
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative rounded-lg w-full max-w-md">
            <button
              onClick={handleClosePopup}
              className="absolute top-5 right-2 text-gray-500 hover:text-gray-700"
            >
              <IoMdClose size={24} color='white' /> 
            </button>

            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
};

export default RequestCallbackPopup;

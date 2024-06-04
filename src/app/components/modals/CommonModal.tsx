'use client';

import React from 'react';
import { useModal } from '@/context/ModalContext';

const CommonModal: React.FC = () => {
  const { modalContent, isModalOpen, closeModal } = useModal();

  if (!isModalOpen) return null;

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
      onClick={closeModal}
    >
      <div
        className='bg-white rounded-lg shadow-lg p-6 relative'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='absolute top-1 right-2 text-2xl'
          onClick={closeModal}
        >
          ×
        </button>
        {modalContent}
      </div>
    </div>
  );
};

export default CommonModal;

'use client';

import React from 'react';
import { useModal } from '@/src/context/ModalContext';

const CommonModal: React.FC = () => {
  const { modalContent, isModalOpen, closeModal } = useModal();

  if (!isModalOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
      onClick={closeModal}
    >
      <div
        className='relative rounded-lg bg-white p-6 shadow-lg'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='absolute right-2 top-1 text-2xl'
          type='button'
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

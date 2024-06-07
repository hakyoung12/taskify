'use client';

import React from 'react';
import { useModal } from '@/context/ModalContext';
import CreateToDoForm from './CreateToDoForm';

export type ModalProps = {
  dashboardId?: number;
  columnId?: number;
};

const CreateToDoModal = ({ dashboardId, columnId }: ModalProps) => {
  const { openModal } = useModal();
  return (
    <div>
      <h2 className='mb-4 text-2xl font-bold'>Custom Modal Title</h2>
      <p className='mb-4'>This is the content of the custom modal.</p>
      <button
        className='rounded bg-green-500 px-4 py-2 text-white'
        onClick={() =>
          openModal(
            <CreateToDoForm dashboardId={dashboardId} columnId={columnId} />,
          )
        }
      >
        Custom Button
      </button>
    </div>
  );
};

export default CreateToDoModal;

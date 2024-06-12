'use client';

import React from 'react';
import { useModal } from '@/context/ModalContext';
import CreateCardForm from './CreateCardForm';

export type ModalProps = {
  dashboardId: string;
  columnId: string;
  loginToken: string;
};

const CreateCardModal = ({ dashboardId, columnId, loginToken }: ModalProps) => {
  const { openModal, closeModal } = useModal();
  return (
    <div>
      <button
        className='rounded bg-green-500 px-4 py-2 text-white'
        type='button'
        onClick={() =>
          openModal(
            <CreateCardForm
              dashboardId={dashboardId}
              columnId={columnId}
              loginToken={loginToken}
              closeModal={closeModal}
            />,
          )
        }
      >
        Custom Button
      </button>
    </div>
  );
};

export default CreateCardModal;

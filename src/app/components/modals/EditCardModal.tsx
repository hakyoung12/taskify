'use client';

import React from 'react';
import { useModal } from '@/context/ModalContext';
import EditCardForm from './EditCardForm';

export type ModalProps = {
  dashboardId: string | number;
  columnId: number;
  loginToken: string;
  cardId: number;
};

const EditCardModal = ({
  dashboardId,
  columnId,
  loginToken,
  cardId,
}: ModalProps) => {
  const { openModal, closeModal } = useModal();
  return (
    <div>
      <button
        className='rounded bg-green-500 px-4 py-2 text-white'
        type='button'
        onClick={() =>
          openModal(
            <EditCardForm
              dashboardId={dashboardId}
              columnId={columnId}
              cardId={cardId}
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

export default EditCardModal;

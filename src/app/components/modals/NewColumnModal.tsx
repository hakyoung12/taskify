'use client';

import { useState } from 'react';
import { postNewColumnData } from '../ToDoCardModal/api';
import ModalFooterButtons from '../ModalFooterButtons';
import ModalInput from '../ModalInput';
import { useModal } from '@/context/ModalContext';

const NewColumnModal = ({ dashboardId }: { dashboardId: number }) => {
  const [value, setValue] = useState<string>('');
  const { closeModal } = useModal();

  const handleOnCick = () => {
    if (value) {
      postNewColumnData(value, dashboardId);
      closeModal();
    }
  };

  return (
    <div className='flex min-w-[492px] flex-col max-sm:min-w-[279px]'>
      <p className='text-[24px] font-bold max-sm:text-[20px]'>새 컬럼 생성</p>
      <div className='flex flex-col gap-[28px]'>
        <ModalInput
          labelName='이름'
          inputId='name'
          placeFolder='새로운 프로젝트'
          value={value}
          setValue={setValue}
        />
        <ModalFooterButtons value={value} onAction={handleOnCick} />
      </div>
    </div>
  );
};

export default NewColumnModal;

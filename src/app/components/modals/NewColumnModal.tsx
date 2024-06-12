'use client';

import axios from 'axios';
import instance from '@/app/api/axios';
import { useState } from 'react';
import ModalFooterButtons from '../ModalFooterButtons';
import ModalInput from '../ModalInput';
import { useModal } from '@/context/ModalContext';

const NewColumnModal = ({
  dashboardId,
  columnTitles,
}: {
  dashboardId: number;
  columnTitles: string[];
}) => {
  const [value, setValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { closeModal } = useModal();

  const handleOnCick = async (title: string, dashboardid: number) => {
    if (value) {
      const data = {
        title: title,
        dashboardId: dashboardid,
      };
      try {
        if (columnTitles.includes(title)) {
          throw new Error('중복된 칼럼 이름입니다.');
        }
        const res = await instance.post(`columns`, data);
        closeModal();
      } catch (error: any) {
        setErrorMessage(error.message);
      }
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
          error={
            <span className='mt-[8px] text-[14px] text-red-600'>
              {errorMessage}
            </span>
          }
        />
        <ModalFooterButtons
          value={value}
          onAction={() => handleOnCick(value, dashboardId)}
        />
      </div>
    </div>
  );
};

export default NewColumnModal;

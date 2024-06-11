'use client';

import { useState } from 'react';
import { postNewColumnData } from '../ToDoCardModal/api';
import ModalFooterButtons from '../ModalFooterButtons';
import ModalInput from '../ModalInput';

const NewColumnModal = ({ dashboardId }: { dashboardId: number }) => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = () => {
    if (value && dashboardId) {
      console.log(dashboardId, value);
      postNewColumnData(value, dashboardId);
    }
  };

  return (
    <div className='flex min-w-[492px] flex-col max-sm:min-w-[279px]'>
      <p className='text-[24px] font-bold max-sm:text-[20px]'>새 컬럼 생성</p>
      <form className='flex flex-col gap-[28px]' onSubmit={handleSubmit}>
        <ModalInput
          labelName='이름'
          inputId='name'
          placeFolder='새로운 프로젝트'
          value={value}
          setValue={setValue}
        />
        <ModalFooterButtons value={value} />
      </form>
    </div>
  );
};

export default NewColumnModal;

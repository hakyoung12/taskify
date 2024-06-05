'use client';

import { useModal } from '@/context/ModalContext';
import { ChangeEvent, useState } from 'react';

const modalButtonStyle =
  'text-center w-[120px] h-[48px] text-[16px] rounded-lg border border-[#d9d9d9]';

const NewColumnModal = () => {
  const [value, setValue] = useState<string>();
  const { closeModal } = useModal();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newvalue = e.target.value;
    setValue(newvalue);
    console.log(value);
  };

  return (
    <div className='w-[540px] flex flex-col gap-[32px]'>
      <p className='text-[24px] font-bold'>새 컬럼 생성</p>
      <form className='flex flex-col gap-[16px]'>
        <label htmlFor='name' className='text-[18px]'>
          이름
        </label>
        <input
          id='name'
          placeholder='새로운 프로젝트'
          className='col-span-3 placeholder-black text-[16px] p-[14px] border border-[#d9d9d9] rounded-md'
          onChange={handleChange}
        />
      </form>
      <div className='flex gap-[12px] justify-end'>
        <button
          type='button'
          className={`${modalButtonStyle} bg-white text-[#787486]`}
          onClick={closeModal}
        >
          취소
        </button>
        {/* value가 있을떄 버튼 활성화*/}
        <button
          type='submit'
          className={`${modalButtonStyle} text-white bg-[#5534DA] disabled:bg-opacity-20`}
          disabled={!value}
        >
          생성
        </button>
      </div>
    </div>
  );
};

export default NewColumnModal;

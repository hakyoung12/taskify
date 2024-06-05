'use client';

import { useState } from 'react';
import { useModal } from '@/context/ModalContext';

const NewDashboardModal: React.FC = () => {
  const { closeModal } = useModal();
  const [selectedColor, setSelectedColor] = useState<string>('green');

  const handleCloseModal = () => {
    closeModal();
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const colors = [
    { name: 'green', bgColor: 'bg-custom_green-_7ac555' },
    { name: 'purple', bgColor: 'bg-custom_purple' },
    { name: 'orange', bgColor: 'bg-custom_orange' },
    { name: 'blue', bgColor: 'bg-custom_blue' },
    { name: 'pink', bgColor: 'bg-custom_pink' },
  ];

  return (
    <div className='flex w-[320px] flex-col sm:w-[540px]'>
      <div className='text-[24px] font-bold text-custom_black-_333236'>
        새로운 대시보드
      </div>
      <div className='mt-[32px]'>
        <div className='text-[18px] text-custom_black-_333236'>
          대시보드 이름
        </div>
        <input
          className='mt-[10px] w-full rounded-md border border-custom_gray-_d9d9d9 px-4 py-4'
          placeholder='뉴프로젝트'
        />
      </div>
      <div className='mt-[28px] flex gap-x-3'>
        {colors.map((color) => (
          <div
            key={color.name}
            className={`relative h-[30px] w-[30px] rounded-full ${color.bgColor} cursor-pointer`}
            onClick={() => handleColorClick(color.name)}
          >
            {selectedColor === color.name && (
              <img
                className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'
                src='/images/check.svg'
                alt='check'
              />
            )}
          </div>
        ))}
      </div>
      <div className='mt-5 flex w-full justify-center gap-x-3 sm:justify-end'>
        <button
          className='w-1/2 rounded-md border border-custom_gray-_d9d9d9 bg-custom_white px-[46px] py-[14px] sm:w-auto'
          onClick={handleCloseModal}
        >
          취소
        </button>
        <button className='w-1/2 rounded-md border-custom_gray-_d9d9d9 bg-custom_violet-_5534da px-[46px] py-[14px] text-white sm:w-auto'>
          생성
        </button>
      </div>
    </div>
  );
};

export default NewDashboardModal;

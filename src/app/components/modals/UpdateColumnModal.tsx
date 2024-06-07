'use client';

import { useModal } from '@/src/context/ModalContext';

const UpdateColumnModal = () => {
  const { closeModal } = useModal();

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <div className='flex w-[320px] flex-col sm:w-[540px]'>
      <div className='text-[24px] font-bold text-custom_black-_333236'>
        컬럼 관리
      </div>
      <div className='mt-[32px]'>
        <div className='text-[18px] text-custom_black-_333236'>이름</div>
        <input
          className='mt-[10px] w-full rounded-md border border-custom_gray-_d9d9d9 px-4 py-4'
          placeholder='Done'
        />
      </div>
      <div className='mt-5 flex flex-col sm:flex-row sm:justify-between'>
        <div className='mb-3 cursor-pointer self-start text-custom_gray-_9fa6b2 underline sm:mb-0 sm:self-end'>
          삭제하기
        </div>
        <div className='flex w-full gap-x-3 sm:w-auto'>
          <button
            className='w-1/2 rounded-md border border-custom_gray-_d9d9d9 bg-custom_white px-[46px] py-[14px] sm:w-auto'
            onClick={handleCloseModal}
          >
            취소
          </button>
          <button className='w-1/2 rounded-md border-custom_gray-_d9d9d9 bg-custom_violet-_5534da px-[46px] py-[14px] text-white sm:w-auto'>
            변경
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateColumnModal;

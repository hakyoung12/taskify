'use client';

import instance from '@/app/api/axios';
import { useModal } from '@/context/ModalContext';
import { useParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

const InvitationModal: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const { closeModal } = useModal();
  const params = useParams();

  const handleCloseModal = () => {
    closeModal();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleInvitation = async () => {
    if (!email) {
      return null;
    }

    try {
      const res = await instance.post(
        `dashboards/${params.dashboardid}/invitations`,
        { email },
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex w-[320px] flex-col sm:w-[540px]'>
      <div className='text-[24px] font-bold text-custom_black-_333236'>
        초대하기
      </div>
      <div className='mt-[32px]'>
        <div className='text-[18px] text-custom_black-_333236'>이메일</div>
        <input
          className='mt-[10px] w-full rounded-md border border-custom_gray-_d9d9d9 px-4 py-4'
          placeholder='codeit@codeit.com'
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className='mt-5 flex w-full justify-center gap-x-3 sm:justify-end'>
        <button
          className='w-1/2 rounded-md border border-custom_gray-_d9d9d9 bg-custom_white px-[46px] py-[14px] sm:w-auto'
          onClick={handleCloseModal}
        >
          취소
        </button>
        <button
          className='w-1/2 rounded-md border-custom_gray-_d9d9d9 bg-custom_violet-_5534da px-[46px] py-[14px] text-white sm:w-auto'
          onClick={handleInvitation}
        >
          초대
        </button>
      </div>
    </div>
  );
};

export default InvitationModal;

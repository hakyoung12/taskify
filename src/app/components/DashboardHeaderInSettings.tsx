'use client';

import Image from 'next/image';
import { useModal } from '@/context/ModalContext';
import InvitationModal from './modals/InvitationModal';

const DashboardHeaderInSettings = () => {
  const { openModal } = useModal();

  const handleOpenModal = (content: React.ReactNode) => {
    openModal(content);
  };

  return (
    <nav className='flex h-[60px] items-center justify-between p-4'>
      <div className='invisible flex items-center xl:visible'>
        <span className='text-lg font-bold'>비브리지</span>
        <span className='ml-2 text-yellow-500'>
          <Image
            src='/images/createByMe.svg'
            alt='crown'
            width={20}
            height={16}
          />
        </span>
      </div>
      <div className='flex items-center space-x-2'>
        <div className='mr-10 flex space-x-4 text-[14px] text-custom_gray-_787486 sm:text-[16px]'>
          <button className='flex w-[50px] items-center justify-center rounded-md border bg-white px-2 py-1 sm:w-[88px]'>
            <Image
              className='mr-2 hidden sm:block'
              src='/images/settings.svg'
              alt='settings'
              width={20}
              height={20}
            />
            <p>관리</p>
          </button>
          <button
            className='flex w-[70px] items-center justify-center rounded-md border bg-white px-2 py-1 sm:w-[116px]'
            onClick={() => handleOpenModal(<InvitationModal />)}
          >
            <Image
              className='mr-2 hidden sm:block'
              src='/images/addTaskButton.svg'
              alt='add'
              width={20}
              height={20}
            />
            <p>초대하기</p>
          </button>
        </div>
        <div className='ml-6 flex items-center -space-x-2'>
          <div className='relative z-10'>
            <div className='h-[34px] w-[34px] rounded-full border-2 border-white bg-red-500 text-white'>
              <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                Y
              </p>
            </div>
          </div>
          <div className='relative z-10'>
            <div className='h-[34px] w-[34px] rounded-full border-2 border-white bg-green-500 text-white'>
              <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                Y
              </p>
            </div>
          </div>
          <div className='relative z-10 hidden sm:block'>
            <div className='h-[34px] w-[34px] rounded-full border-2 border-white bg-orange-500 text-white'>
              <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                Y
              </p>
            </div>
          </div>
          <div className='relative z-10 hidden sm:block'>
            <div className='h-[34px] w-[34px] rounded-full border-2 border-white bg-yellow-500 text-white'>
              <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                Y
              </p>
            </div>
          </div>
          <div className='relative z-10'>
            <div className='h-[34px] w-[34px] rounded-full border-2 border-white bg-blue-500 text-white'>
              <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                +2
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='mx-4 h-8 w-px bg-gray-300'></div>
          <div className='relative mx-3 h-[34px] w-[34px] rounded-full border-2 border-white bg-blue-500 text-white'>
            <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
              B
            </p>
          </div>
          <div className='mr-[80px] hidden w-[45px] sm:block'>배유철</div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeaderInSettings;

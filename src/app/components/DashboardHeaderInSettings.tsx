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
      <div className='invisible xl:visible flex items-center'>
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
        <div className='flex mr-10 space-x-4 text-custom_gray-_787486 text-[14px] sm:text-[16px]'>
          <button className='flex justify-center items-center w-[50px] sm:w-[88px] px-2 py-1 bg-white border rounded-md'>
            <Image
              className='hidden sm:block mr-2'
              src='/images/settings.svg'
              alt='settings'
              width={20}
              height={20}
            />
            <p>관리</p>
          </button>
          <button
            className='flex justify-center items-center w-[70px] sm:w-[116px] px-2 py-1 bg-white border rounded-md'
            onClick={() => handleOpenModal(<InvitationModal />)}
          >
            <Image
              className='hidden sm:block mr-2'
              src='/images/addTaskButton.svg'
              alt='add'
              width={20}
              height={20}
            />
            <p>초대하기</p>
          </button>
        </div>
        <div className='flex items-center -space-x-2 ml-6'>
          <div className='relative z-10'>
            <div className='w-[34px] h-[34px] bg-red-500 text-white border-2 border-white rounded-full'>
              <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                Y
              </p>
            </div>
          </div>
          <div className='relative z-10'>
            <div className='w-[34px] h-[34px] bg-green-500 text-white border-2 border-white rounded-full'>
              <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                Y
              </p>
            </div>
          </div>
          <div className='hidden sm:block relative z-10'>
            <div className='w-[34px] h-[34px] bg-orange-500 text-white border-2 border-white rounded-full'>
              <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                Y
              </p>
            </div>
          </div>
          <div className='hidden sm:block relative z-10'>
            <div className='w-[34px] h-[34px] bg-yellow-500 text-white border-2 border-white rounded-full'>
              <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                Y
              </p>
            </div>
          </div>
          <div className='relative z-10'>
            <div className='w-[34px] h-[34px] bg-blue-500 text-white border-2 border-white rounded-full'>
              <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                +2
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='w-px h-8 bg-gray-300 mx-4'></div>
          <div className='relative w-[34px] h-[34px] mx-3 bg-blue-500 text-white border-2 border-white rounded-full'>
            <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
              B
            </p>
          </div>
          <div className='hidden sm:block w-[45px] mr-[80px]'>배유철</div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeaderInSettings;

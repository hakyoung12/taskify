import Image from 'next/image';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const DashboardHeaderInSettings = () => {
  return (
    <nav className='flex items-center justify-between p-4'>
      <div className='invisible xl:visible flex items-center'>
        <span className='text-lg font-bold'>비브리지</span>
        <span className='ml-2 text-yellow-500'>
          <Image src='/images/createByMe.svg' alt='crown' />
        </span>
      </div>
      <div className='flex items-center space-x-2'>
        <div className='flex mr-10 space-x-4 text-custom_gray-_787486 text-[14px] sm:text-[16px]'>
          <button className='flex items-center px-2 py-1 bg-white border rounded-md'>
            <Image
              className='hidden sm:block mr-2'
              src='/images/settings.svg'
              alt='settings'
            />
            <p>관리</p>
          </button>
          <button className='flex items-center px-2 py-1 bg-white border rounded-md'>
            <Image
              className='hidden sm:block mr-2'
              src='/images/addTaskButton.svg'
              alt='add'
            />
            <p>초대하기</p>
          </button>
        </div>
        <div className='flex items-center -space-x-2 ml-6'>
          <Avatar className='relative z-10'>
            <AvatarImage />
            <AvatarFallback className='bg-yellow-500 text-white border-2 border-white'>
              Y
            </AvatarFallback>
          </Avatar>
          <Avatar className='relative z-10'>
            <AvatarImage />
            <AvatarFallback className='bg-yellow-300 text-white border-2 border-white'>
              C
            </AvatarFallback>
          </Avatar>
          <Avatar className='hidden xl:block relative z-10'>
            <AvatarImage />
            <AvatarFallback className='bg-blue-500 text-white border-2 border-white'>
              K
            </AvatarFallback>
          </Avatar>
          <Avatar className='hidden xl:block relative z-10'>
            <AvatarImage />
            <AvatarFallback className='bg-red-500 text-white border-2 border-white'>
              J
            </AvatarFallback>
          </Avatar>
          <Avatar className='relative z-10'>
            <AvatarImage />
            <AvatarFallback className='bg-gray-300 text-white border-2 border-white'>
              +2
            </AvatarFallback>
          </Avatar>
        </div>
        <div className='flex items-center'>
          <div className='w-px h-8 bg-gray-300 mx-4'></div>
          <Avatar className='mr-3 ml-2'>
            <AvatarImage />
            <AvatarFallback className='bg-custom_green-_a3c4a2 text-white'>
              B
            </AvatarFallback>
          </Avatar>
          <div className='hidden sm:block mr-[80px]'>배유철</div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeaderInSettings;

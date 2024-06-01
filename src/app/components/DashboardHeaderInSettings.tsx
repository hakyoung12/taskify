import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const DashboardHeaderInSettings = () => {
  return (
    <div className='flex items-center justify-between ml-[60px] sm:ml-[160px] py-6 border border-black'>
      <div className='flex gap-x-2 ml-10 text-custom_black-_333236 text-lg font-bold'>
        <div>비브리지</div>
        <img src='images/createByMe.svg' alt='crown' />
      </div>
      <div className='flex'>
        <div className='flex gap-x-5'>
          <div className='flex p-4 border border-custom_gray-_d9d9d9 rounded-md'>
            <img className='mr-2' src='/images/settings.svg' alt='settings' />
            <div className='text-base'>관리</div>
          </div>
          <div className='flex p-4 mr-10 border border-custom_gray-_d9d9d9 rounded-md'>
            <img className='mr-2' src='/images/addTaskButton.svg' alt='add' />
            <div className='text-base'>초대하기</div>
          </div>
        </div>
        {/* profiles */}
        <div className='relative flex items-center mr-[200px]'>
          <Avatar className='absolute border-2 border-white'>
            <AvatarImage />
            <AvatarFallback className='bg-slate-500 text-white'>
              B
            </AvatarFallback>
          </Avatar>
          <Avatar className='absolute left-[30px] border-2 border-white'>
            <AvatarImage />
            <AvatarFallback className='bg-slate-700 text-white'>
              B
            </AvatarFallback>
          </Avatar>
          <Avatar className='absolute left-[60px] border-2 border-white'>
            <AvatarImage />
            <AvatarFallback className='bg-slate-900 text-white'>
              B
            </AvatarFallback>
          </Avatar>
        </div>
        <div className='flex items-center'>
          <Avatar className='mr-3'>
            <AvatarImage />
            <AvatarFallback className='bg-custom_green-_a3c4a2 text-white'>
              B
            </AvatarFallback>
          </Avatar>
          <div className='hidden sm:block mr-[80px]'>배유철</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeaderInSettings;

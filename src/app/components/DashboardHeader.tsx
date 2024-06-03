import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const DashboardHeader = () => {
  return (
    <div className='flex justify-between items-center py-6 border-t border-r border-b botder-custom_gray-_d9d9d9'>
      <div className='ml-10 text-custom_black-_333236 text-lg font-bold'>
        내 대시보드
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
  );
};

export default DashboardHeader;

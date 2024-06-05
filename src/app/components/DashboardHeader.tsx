import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const DashboardHeader = () => {
  return (
    <div className='botder-custom_gray-_d9d9d9 flex items-center justify-between border-b border-t py-6'>
      <div className='ml-10 text-lg font-bold text-custom_black-_333236'>
        내 대시보드
      </div>
      <div className='flex items-center'>
        <Avatar className='mr-3'>
          <AvatarImage />
          <AvatarFallback className='bg-custom_green-_a3c4a2 text-white'>
            B
          </AvatarFallback>
        </Avatar>
        <div className='mr-[80px] hidden sm:block'>배유철</div>
      </div>
    </div>
  );
};

export default DashboardHeader;

import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const DashboardHeader = () => {
  return (
    <div className='flex justify-between ml-[60px] sm:ml-[160px] py-6 border border-black'>
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

const DashboardHeader = () => {
  return (
    <div className='flex justify-between ml-[60px] md:ml-[160px] py-6 border border-black'>
      <div className='ml-10 text-custom_black-_333236 text-lg font-bold'>
        내 대시보드
      </div>
      <div className='flex'>
        <div className='relative p-3 mr-3 w-3 h-3 bg-custom_green-_a3c4a2 rounded-full'>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            B
          </div>
        </div>
        <div className='hidden md:block mr-[80px]'>배유철</div>
      </div>
    </div>
  );
};

export default DashboardHeader;

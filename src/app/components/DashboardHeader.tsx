const DashboardHeader = () => {
  return (
    <div className='flex justify-between items-center h-[60px] py-4 border-t border-r border-b botder-custom_gray-_d9d9d9'>
      <div className='ml-10 text-custom_black-_333236 text-lg font-bold'>
        내 대시보드
      </div>
      <div className='flex items-center'>
        <div className='relative w-[34px] h-[34px] mx-3 bg-blue-500 text-white border-2 border-white rounded-full'>
          <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
            B
          </p>
        </div>
        <div className='hidden sm:block w-[45px] mr-[80px]'>배유철</div>
      </div>
    </div>
  );
};

export default DashboardHeader;

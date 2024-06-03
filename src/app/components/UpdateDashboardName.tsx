import Image from 'next/image';

const UpdateDashboardName = () => {
  return (
    <div className='w-[620px] p-7 border border-black'>
      <div className='flex justify-between'>
        <div className='text-xl font-bold'>비브리지</div>
        <div className='flex gap-x-3'>
          <div className='relative bg-custom_green-_7ac555 w-[30px] h-[30px] rounded-full'>
            <Image
              className='absolute top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2'
              src='/images/check.svg'
              alt='check'
            />
          </div>
          <div className='bg-custom_purple w-[30px] h-[30px] rounded-full'></div>
          <div className='bg-custom_orange w-[30px] h-[30px] rounded-full'></div>
          <div className='bg-custom_blue w-[30px] h-[30px] rounded-full'></div>
          <div className='bg-custom_pink w-[30px] h-[30px] rounded-full'></div>
        </div>
      </div>
      <div className='mt-9'>
        <div>대시보드 이름</div>
        <input
          className='w-full p-4 mt-[10px] border border-custom_gray-_d9d9d9 rounded-md'
          placeholder='뉴프로젝트'
        />
      </div>
      <div className='flex justify-end mt-6'>
        <button className='px-[46px] py-[14px] bg-custom_violet-_5534da text-white rounded'>
          변경
        </button>
      </div>
    </div>
  );
};

export default UpdateDashboardName;

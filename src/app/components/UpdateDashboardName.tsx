import Image from 'next/image';

const UpdateDashboardName = () => {
  return (
    <div className='w-[620px] border border-black p-7'>
      <div className='flex justify-between'>
        <div className='text-xl font-bold'>비브리지</div>
        <div className='flex gap-x-3'>
          <div className='relative h-[30px] w-[30px] rounded-full bg-custom_green-_7ac555'>
            <Image
              className='transfrom absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
              src='/images/check.svg'
              alt='check'
              width={24}
              height={24}
            />
          </div>
          <div className='h-[30px] w-[30px] rounded-full bg-custom_purple'></div>
          <div className='h-[30px] w-[30px] rounded-full bg-custom_orange'></div>
          <div className='h-[30px] w-[30px] rounded-full bg-custom_blue'></div>
          <div className='h-[30px] w-[30px] rounded-full bg-custom_pink'></div>
        </div>
      </div>
      <div className='mt-9'>
        <div>대시보드 이름</div>
        <input
          className='mt-[10px] w-full rounded-md border border-custom_gray-_d9d9d9 p-4'
          placeholder='뉴프로젝트'
        />
      </div>
      <div className='mt-6 flex justify-end'>
        <button className='rounded bg-custom_violet-_5534da px-[46px] py-[14px] text-white'>
          변경
        </button>
      </div>
    </div>
  );
};

export default UpdateDashboardName;

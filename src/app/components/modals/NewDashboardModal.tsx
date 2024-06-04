const NewDashboardModal = () => {
  return (
    <div className='w-[320px] sm:w-[540px] flex flex-col'>
      <div className='text-custom_black-_333236 text-[24px] font-bold'>
        새로운 대시보드
      </div>
      <div className='mt-[32px]'>
        <div className='text-custom_black-_333236 text-[18px]'>
          대시보드 이름
        </div>
        <input
          className='mt-[10px] px-4 py-4 w-full border border-custom_gray-_d9d9d9 rounded-md'
          placeholder='뉴프로젝트'
        />
      </div>
      <div className='flex gap-x-3 mt-[28px]'>
        <div className='relative bg-custom_green-_7ac555 w-[30px] h-[30px] rounded-full'>
          <img
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            src='/images/check.svg'
            alt='check'
          />
        </div>
        <div className='bg-custom_purple w-[30px] h-[30px] rounded-full'></div>
        <div className='bg-custom_orange w-[30px] h-[30px] rounded-full'></div>
        <div className='bg-custom_blue w-[30px] h-[30px] rounded-full'></div>
        <div className='bg-custom_pink w-[30px] h-[30px] rounded-full'></div>
      </div>
      <div className='flex justify-center w-full sm:justify-end gap-x-3 mt-5'>
        <button className='px-[46px] py-[14px] w-1/2 sm:w-auto bg-custom_white border border-custom_gray-_d9d9d9 rounded-md'>
          취소
        </button>
        <button className='px-[46px] py-[14px] w-1/2 sm:w-auto text-white bg-custom_violet-_5534da border-custom_gray-_d9d9d9 rounded-md'>
          생성
        </button>
      </div>
    </div>
  );
};

export default NewDashboardModal;

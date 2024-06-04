const UpdateColumnModal = () => {
  return (
    <div className='w-[320px] sm:w-[540px] flex flex-col'>
      <div className='text-custom_black-_333236 text-[24px] font-bold'>
        컬럼 관리
      </div>
      <div className='mt-[32px]'>
        <div className='text-custom_black-_333236 text-[18px]'>이름</div>
        <input
          className='mt-[10px] px-4 py-4 w-full border border-custom_gray-_d9d9d9 rounded-md'
          placeholder='Done'
        />
      </div>
      <div className='flex flex-col sm:flex-row mt-5 sm:justify-between'>
        <div className='underline mb-3 sm:mb-0 self-start sm:self-end text-custom_gray-_9fa6b2 cursor-pointer'>
          삭제하기
        </div>
        <div className='flex w-full sm:w-auto gap-x-3'>
          <button className='px-[46px] py-[14px] w-1/2 sm:w-auto bg-custom_white border border-custom_gray-_d9d9d9 rounded-md'>
            취소
          </button>
          <button className='px-[46px] py-[14px] w-1/2 sm:w-auto text-white bg-custom_violet-_5534da border-custom_gray-_d9d9d9 rounded-md'>
            변경
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateColumnModal;

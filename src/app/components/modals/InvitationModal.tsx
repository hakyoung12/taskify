const InvitationModal = () => {
  return (
    <div className='w-[320px] sm:w-[540px] flex flex-col'>
      <div className='text-custom_black-_333236 text-[24px] font-bold'>
        초대하기
      </div>
      <div className='mt-[32px]'>
        <div className='text-custom_black-_333236 text-[18px]'>
          대시보드 이름
        </div>
        <input
          className='mt-[10px] px-4 py-4 w-full border border-custom_gray-_d9d9d9 rounded-md'
          placeholder='codeit@codeit.com'
        />
      </div>
      <div className='flex justify-center w-full sm:justify-end gap-x-3 mt-5'>
        <button className='px-[46px] py-[14px] w-1/2 sm:w-auto bg-custom_white border border-custom_gray-_d9d9d9 rounded-md'>
          취소
        </button>
        <button className='px-[46px] py-[14px] w-1/2 sm:w-auto text-white bg-custom_violet-_5534da border-custom_gray-_d9d9d9 rounded-md'>
          초대
        </button>
      </div>
    </div>
  );
};

export default InvitationModal;

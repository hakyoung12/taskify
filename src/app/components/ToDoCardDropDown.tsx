export default function ToDoCardDropDown({ isOpen }: { isOpen: boolean }) {
  return (
    isOpen && (
      <div className='flex flex-col gap-[6px] justify-center items-center absolute top-[40px] right-[40px] border border-[#D9D9D9] rounded-md shadow-lg w-[93px] text-[14px] p-[6px] bg-white'>
        <button className=''>
          <p className={buttonStyle}>수정하기</p>
        </button>
        <button className={buttonStyle}>
          <span>삭제하기</span>
        </button>
      </div>
    )
  );
}

const buttonStyle =
  'px-[14px] py-[4px] rounded-sm hover:text-[#5534DA] hover:bg-[#F1EFFD]';

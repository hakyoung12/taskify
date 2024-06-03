'use client';
import { useState } from 'react';
import { DeleteButton } from './DeleteButton';
import EditMenuTitle from './EditMenuTitle';
import { mockData } from './mockdata/InvitationMock';

export default function InvitationList() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage * 5 < mockData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * 5;
  const selectedTodos = mockData.slice(startIndex, startIndex + 5);
  const totalPage = Math.ceil(mockData.length / 5);

  return (
    <div className='w-auto rounded-lg bg-white-_ffffff m-5'>
      <div className='relative flex'>
        <EditMenuTitle
          title='초대 내역'
          subtitle='이메일'
          currentPage={currentPage}
          totalPage={totalPage}
          onPrev={handlePrevPage}
          onNext={handleNextPage}
        />
        <button className='flex items-center gap-2 mt-8 py-2 px-3 w-[105px] h-8 text-white rounded-md bg-custom_violet-_5534da font-Pretendard font-medium text-base max-sm:absolute max-sm:bottom-4 max-sm:right-7 max-sm:text-sx py-2 px-3'>
          <img
            src='/images/inviteMemberButton.svg'
            className='w-4 h-4 max-sm:w-3.5 max-sm:h-3.5'
            alt='초대하기 버튼'
          />
          초대하기
        </button>
      </div>
      <div className='flex flex-col px-[28px] pb-[28px]'>
        <div>
          {selectedTodos.map((email) => {
            return (
              <div className='flex justify-between items-center flex-shrink-0 py-4 text-black-_333236 border-b stroke-gray-_eeeeee stroke-1'>
                <div className='flex items-center gap-3 max-sm:text-sm'>
                  {email.email}
                </div>
                <DeleteButton title='삭제' />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

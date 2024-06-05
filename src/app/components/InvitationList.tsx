'use client';
import { useState } from 'react';
import { DeleteButton } from './DeleteButton';
import EditMenuTitle from './EditMenuTitle';
import { mockData } from './mockdata/InvitationMock';
import Image from 'next/image';

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
    <div className='bg-white-_ffffff m-5 w-auto rounded-lg'>
      <div className='relative flex'>
        <EditMenuTitle
          title='초대 내역'
          subtitle='이메일'
          currentPage={currentPage}
          totalPage={totalPage}
          onPrev={handlePrevPage}
          onNext={handleNextPage}
        />
        <button className='font-Pretendard max-sm:text-sx mt-8 flex h-8 w-[105px] items-center gap-2 rounded-md bg-custom_violet-_5534da px-3 py-2 text-base font-medium text-white max-sm:absolute max-sm:bottom-4 max-sm:right-7'>
          <div className='relative h-4 w-4 max-sm:h-3.5 max-sm:w-3.5'>
            <Image
              fill
              src='/images/inviteMemberButton.svg'
              alt='초대하기 버튼'
            />
          </div>
          초대하기
        </button>
      </div>
      <div className='flex flex-col px-[28px] pb-[28px]'>
        <div>
          {selectedTodos.map((email) => {
            return (
              <div
                key={email.id}
                className='text-black-_333236 stroke-gray-_eeeeee flex flex-shrink-0 items-center justify-between border-b stroke-1 py-4'
              >
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

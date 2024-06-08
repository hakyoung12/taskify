'use client';
import EditMenuTitle from './EditMenuTitle';
import { DeleteButton } from './DeleteButton';
import { mockData } from './mockdata/MemberMock';
import { useState } from 'react';
import Image from 'next/image';

export default function MemberList() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage * 4 < mockData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * 4;
  const selectedTodos = mockData.slice(startIndex, startIndex + 4);
  const totalPage = Math.ceil(mockData.length / 4);

  return (
    <div className='m-5 w-[620px] rounded-lg bg-custom_white max-xl:w-auto max-xl:max-w-[620px] max-sm:mx-3'>
      <EditMenuTitle
        title='구성원'
        subtitle='이름'
        currentPage={currentPage}
        totalPage={totalPage}
        onPrev={handlePrevPage}
        onNext={handleNextPage}
      />
      <div className='flex flex-col px-[28px] pb-[28px]'>
        <div>
          {selectedTodos.map((member) => {
            return (
              <div
                key={member.id}
                className='text-black-_333236 stroke-gray-_eeeeee flex flex-shrink-0 items-center justify-between border-b stroke-1 py-4'
              >
                <div className='flex items-center gap-3 max-sm:text-sm'>
                  <div className='relative h-[38px] w-[38px]'>
                    <Image
                      fill
                      src='/images/mockprofile4.svg'
                      alt='프로필 사진'
                    />
                  </div>
                  {member.name}
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

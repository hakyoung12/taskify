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
    <div className='w-auto rounded-lg bg-white-_ffffff m-5'>
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
              <div className='flex justify-between items-center flex-shrink-0 py-4 text-black-_333236 border-b stroke-gray-_eeeeee stroke-1'>
                <div className='flex items-center gap-3 max-sm:text-sm'>
                  <div className='relative w-[38px] h-[38px]'>
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

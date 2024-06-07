'use client';

import Link from 'next/link';
import Pagination from './Pagination';
import { useState } from 'react';
import { mockData } from './mockdata/DashboardMock';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';
import NewDashboardModal from './modals/NewDashboardModal';

type ColorPalette = {
  [key: string]: string;
};

const ColorPalette: ColorPalette = {
  green: 'bg-custom_green-_7ac555',
  purple: 'bg-custom_purple',
  orange: 'bg-custom_orange',
  blue: 'bg-custom_blue',
  pink: 'bg-custom_pink',
};

export default function DashboardCard() {
  const [currentPage, setCurrentPage] = useState(1);

  const { openModal } = useModal();

  const handleOpenModal = (content: React.ReactNode) => {
    openModal(content);
  };

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
    <section className='w-screen pl-6 pt-6'>
      <div className='grid gap-3 max-sm:h-96 max-sm:grid-cols-1 max-sm:grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2'>
        <button
          className='font-Pretendard flex h-16 w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-5 py-7 text-base font-semibold text-gray-800 max-sm:h-14'
          onClick={() => handleOpenModal(<NewDashboardModal />)}
        >
          새로운 대시보드
          <div className='relative h-5 w-5'>
            <Image
              fill
              src='/images/addTaskButton2.svg'
              alt='대시보드 바로가기'
            />
          </div>
        </button>
        {selectedTodos.map((todo) => (
          <Link
            key={todo.id}
            href={`/dashboard/${todo.id}`}
            className='font-Pretendard flex h-16 w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-5 py-7 text-base font-semibold text-gray-800 max-sm:h-14'
          >
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-4'>
                <div
                  className={`h-2 w-2 rounded-full ${ColorPalette[todo.color]}`}
                />
                <div>{todo.title}</div>
              </div>
              {todo.createdByMe && (
                <div className='relative h-3.5 w-5'>
                  <Image
                    fill
                    src='/images/createByMe.svg'
                    alt='내가 만든 대시보드'
                  />
                </div>
              )}
            </div>
            <button className='relative h-5 w-5'>
              <Image
                fill
                src='/images/rightArrowButton.svg'
                alt='대시보드 바로가기'
              />
            </button>
          </Link>
        ))}
      </div>
      <div className='flex items-center justify-end gap-3 pr-0 pt-2 max-sm:pt-3'>
        <div className='font-Pretendard text-base font-normal text-gray-800'>
          {currentPage} 페이지 중 {totalPage}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          onPrev={handlePrevPage}
          onNext={handleNextPage}
        />
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import Pagination from './Pagination';
import { useState } from 'react';
import { mockData } from './mockdata/DashboardMock';
import { Dialog, DialogTrigger } from './ui/dialog';
import { NewDashboardModal } from './modals/NewDashboardModal';

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
    <section className='mt-6 ml-6 w-sreen'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-2 gap-3 sm:grid-cols-2 sm:grid-rows-3 max-sm:grid-cols-1 max-sm:grid-rows-6 max-sm:h-96'>
        <Dialog>
          <DialogTrigger asChild>
            <button className='flex items-center text-gray-800 justify-center gap-3 w-full h-16 font-Pretendard font-semibold px-5 py-7 text-base rounded-lg border border-gray-300 bg-white max-sm:h-14'>
              새로운 대시보드
              <img
                className='w-5 h-5'
                src='/images/arrowButton.svg'
                alt='대시보드 바로가기'
              />
            </button>
          </DialogTrigger>
          <NewDashboardModal />
        </Dialog>
        {selectedTodos.map((todo) => (
          <Link
            key={todo.id}
            href={`/dashboard/${todo.id}`}
            className='flex items-center text-gray-800 justify-between w-full h-16 font-Pretendard font-semibold px-5 py-7 text-base rounded-lg border border-gray-300 bg-white max-sm:h-14'
          >
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-4'>
                <div
                  className={`w-2 h-2 rounded-full ${ColorPalette[todo.color]}`}
                />
                <div>{todo.title}</div>
              </div>
              {todo.createdByMe && (
                <img
                  className='w-5 h-3.5'
                  src='/images/createByMe.svg'
                  alt='내가 만든 대시보드'
                />
              )}
            </div>
            <button>
              <img
                className='w-5 h-5'
                src='/images/addTaskButton2.svg'
                alt='대시보드 바로가기'
              />
            </button>
          </Link>
        ))}
      </div>
      <div className='flex justify-end items-center gap-3 pt-2 pr-0 max-sm:pt-3'>
        <div className='text-gray-800 font-Pretendard text-base font-normal'>
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

'use client';
import Link from 'next/link';
import { useState } from 'react';
import Pagination from './Pagination';
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

export default function DashboardList() {
  const [currentPage, setCurrentPage] = useState(1);

  const { openModal } = useModal();

  const handleOpenModal = (content: React.ReactNode) => {
    openModal(content);
  };

  const handleNextPage = () => {
    if (currentPage * 10 < mockData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * 10;
  const selectedTodos = mockData.slice(startIndex, startIndex + 10);
  const totalPage = Math.ceil(mockData.length / 10);

  return (
    <div className='p-0 px-3'>
      <div className='flex justify-between items-center mt-16 mx-3 mb-8 text-gray-500 font-Pretendard font-bold max-sm:mx-2'>
        <div className='text-custom_black-_333236 font-pretendard text-xs font-bold max-sm:hidden'>
          Dash Boards
        </div>
        <button>
          <img
            className='w-5 h-5'
            src='/images/addTaskButton.svg'
            alt='할 일 추가하기'
            onClick={() => handleOpenModal(<NewDashboardModal />)}
          />
        </button>
      </div>
      <div>
        {selectedTodos.map((todo) => (
          <Link
            key={todo.id}
            href={`/dashboard/${todo.id}`}
            className='flex my-7 items-center gap-4 text-custom_black-_333236 font-Pretendard font-medium max-sm:justify-center'
          >
            <div
              className={`w-2 h-2 rounded-full ${ColorPalette[todo.color]}`}
            />
            <div className='max-sm:hidden'>{todo.title}</div>
            {todo.createdByMe && (
              <div className='relative w-5 h-3.5 max-sm:hidden'>
                <Image
                  fill
                  src='/images/createByMe.svg'
                  alt='내가 만든 대시보드'
                />
              </div>
            )}
          </Link>
        ))}
      </div>
      <div className='max-sm:hidden'>
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          onPrev={handlePrevPage}
          onNext={handleNextPage}
        />
      </div>
    </div>
  );
}

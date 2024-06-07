'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { mockData } from './mockdata/DashboardMock';
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

export default function DashboardListMobile() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const startPointRef = useRef(0);

  const { openModal } = useModal();

  const handleOpenModal = (content: React.ReactNode) => {
    openModal(content);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startPointRef.current = e.touches[0].pageX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endPoint = e.changedTouches[0].pageX;
    if (startPointRef.current < endPoint) {
      if (currentPage === 1) return;
      setCurrentPage(currentPage - 1);
    } else if (startPointRef.current > endPoint) {
      if (currentPage === totalPage) return;
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * 10;
  const selectedTodos = mockData.slice(startIndex, startIndex + 10);
  const totalPage = Math.ceil(mockData.length / 10);

  return (
    <div className='p-0 px-3 sm:hidden'>
      <div className='mx-2 mb-8 mt-16 flex items-center justify-between'>
        <button>
          <img
            className='h-5 w-5'
            src='/images/addTaskButton.svg'
            alt='할 일 추가하기'
            onClick={() => handleOpenModal(<NewDashboardModal />)}
          />
        </button>
      </div>
      <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {selectedTodos.map((todo) => (
          <Link
            key={todo.id}
            href={`/dashboard/${todo.id}`}
            className='my-7 flex items-center justify-center'
          >
            <div
              className={`h-2 w-2 rounded-full ${ColorPalette[todo.color]}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

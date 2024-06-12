'use client';

import ColumnCard from '@/app/components/ColumnCard';
import Image from 'next/image';
import ChipAddIcon from './ui/chipAddIcon';
import { useModal } from '@/context/ModalContext';
import UpdateColumnModal from './modals/UpdateColumnModal';
import { useEffect, useState } from 'react';
import { getCardsByColumnId } from './ToDoCardModal/api';
import CreateCardForm from './modals/CreateCardForm';

export default function Column({
  title,
  columnId,
  dashboardId,
}: {
  title: string;
  columnId: number;
  dashboardId: number;
}) {
  const [cards, setCards] = useState<string[]>([]);
  const [totalCount, setTotalCount] = useState<number>();
  const { openModal, closeModal } = useModal();

  const handleOpenModal = (content: React.ReactNode) => {
    openModal(content);
  };

  const fetchCards = async () => {
    try {
      const res = await getCardsByColumnId(columnId);
      console.log(res);
      setCards(res.cards);
      setTotalCount(res.totalCount);
    } catch (error: any) {
      console.log(error);
    }
  };

  console.log(cards);

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className='border-gray-_eeeeee flex min-w-[354px] flex-col gap-[25px] border-r p-[20px] max-xl:w-full'>
      {/* 카드 info */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-center text-[16px] font-bold'>
          <img
            className='mr-[8px]'
            src='/images/Ellipse-puple.svg'
            alt='꾸미는 점'
          />
          <span className='mr-[12px]'>{title}</span>
          <div className='flex h-[20px] w-[20px] items-center justify-center rounded bg-custom_gray-_eeeeee text-center text-[12px] font-normal text-custom_gray-_787486'>
            <p>{totalCount}</p>
          </div>
        </div>
        <Image
          className='cursor-pointer'
          width={24}
          height={24}
          src='/images/settings-icon.svg'
          alt='설정 아이콘'
          onClick={() =>
            handleOpenModal(
              <UpdateColumnModal title={title} columnId={columnId} />,
            )
          }
        />
      </div>
      <div className='flex flex-col gap-[16px]'>
        {/* 카드 추가 버튼 */}
        <div
          className='border-gray-_d9d9d9 flex h-[40px] items-center justify-center rounded-md border bg-white'
          onClick={() =>
            handleOpenModal(
              <CreateCardForm
                dashboardId={dashboardId}
                columnId={columnId}
                loginToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYzMSwidGVhbUlkIjoiNS05IiwiaWF0IjoxNzE4MTAyNjMzLCJpc3MiOiJzcC10YXNraWZ5In0.2TW3zMPzt0xkG5d94WA_ARH7FIEe6A9KFXlV_SO3bMg'
                closeModal={closeModal}
              />,
            )
          }
        >
          <ChipAddIcon size={'large'} />
        </div>
        {/* 카드 배열 뿌리기 */}
        {cards &&
          cards.map((card: any, index: number) => {
            return (
              <ColumnCard
                columnId={columnId}
                dashboardId={dashboardId}
                key={index}
                imageUrl={card.imageUrl}
                title={card.title}
                tags={card.tags}
                description={card.description}
                dueDate={card.dueDate}
                assigner={card.assignee}
                cardId={card.id}
              />
            );
          })}
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';
import CustomAvatar from './CustomAvatar';
import ToDoCardModal from './modals/ToDoCardModal';
import { CreateCardRes } from '../api/apiTypes/cardType';
import { useModal } from '@/context/ModalContext';

interface ColumnCardProps {
  imageUrl: string;
  title: string;
  tags: string[];
  dueDate: string;
  assignerNickname: string;
  assignerProfileUrl: string;
}

const mockCardData: CreateCardRes = {
  id: 0,
  title: '새로운 일정 관리 Taskify',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus nibh arcu, quis consequat ante cursus eget. Cras mattis, nulla non laoreet porttitor, diam justo laoreet eros, vel aliquet diam elit at leo!',
  tags: ['프로젝트', '백엔드'],
  dueDate: '2024-05-31',
  assignee: {
    profileImageUrl: '',
    nickname: 'string',
    id: 0,
  },
  imageUrl: '/images/test/card-image-test.jpg',
  teamId: 'string',
  columnId: 0,
  createdAt: '2024-05-31T16:45:45.608Z',
  updatedAt: '2024-05-31T16:45:45.608Z',
};

export default function ColumnCard({
  imageUrl,
  title,
  tags,
  dueDate,
  assignerNickname,
  assignerProfileUrl,
}: ColumnCardProps) {
  const { openModal } = useModal();

  const handleOpenModal = (content: React.ReactNode) => {
    openModal(content);
  };

  return (
    <>
      <div
        className='bg-white rounded-md border border-custom_gray-_d9d9d9 flex flex-col justify-center p-[20px] gap-[10px]'
        onClick={() =>
          handleOpenModal(
            <ToDoCardModal
              title={mockCardData.title}
              description={mockCardData.description}
              tags={mockCardData.tags}
              dueDate={mockCardData.dueDate}
              assignee={mockCardData.assignee}
              imageUrl={mockCardData.imageUrl}
            />
          )
        }
      >
        {/* 카드 이미지 설정 */}
        {imageUrl && (
          <Image
            width={274}
            height={160}
            className='h-[160px] object-cover rounded-md'
            src={imageUrl}
            alt=''
          />
        )}
        {/* 제목 */}
        <span>{title}</span>
        {/* 태그 */}
        <div className='flex'>
          {tags.map((tag: any, index: number) => {
            return (
              <div
                className='bg-[#F9EEE3] rounded text-[#D58D49] text-[12px] px-[6px] py-[4px] mr-[6px]'
                key={index}
              >
                {tag}
              </div>
            );
            1;
          })}
        </div>
        {/* 카드 마감날짜와 관리자 아이콘 */}
        <div className='text-custom_gray-_787486 text-[12px] relative flex justify-between items-center'>
          <div className='flex gap-[6px]'>
            <img src='/images/calender-icon.svg' alt='캘린더 아이콘' />
            {dueDate}
          </div>
          <CustomAvatar
            nickName={assignerNickname}
            profileUrl={assignerProfileUrl}
          />
        </div>
      </div>
    </>
  );
}

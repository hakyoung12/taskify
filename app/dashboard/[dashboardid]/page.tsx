import Image from 'next/image';
import CardsList from '@/components/cardsList';

const cardsMockDataByColumnId = [
  {
    cursorId: 0,
    totalCount: 2,
    cards: [
      {
        id: 0,
        title: '진짜 하기싫다!',
        description: '증말증말증말증말증말하기싫다!',
        tags: ['프로젝트', '백엔드'],
        dueDate: '2024-05-31T16:45:45.608Z',
        assignee: {
          profileImageUrl: 'string',
          nickname: 'string',
          id: 0,
        },
        imageUrl: 'string',
        teamId: 'string',
        columnId: 0,
        createdAt: '2024-05-31T16:45:45.608Z',
        updatedAt: '2024-05-31T16:45:45.608Z',
      },
      {
        id: 1,
        title: 'string',
        description: 'string',
        tags: ['백엔드', '상'],
        dueDate: '2024-05-31T16:45:45.608Z',
        assignee: {
          profileImageUrl: 'string',
          nickname: 'string',
          id: 0,
        },
        imageUrl: 'string',
        teamId: 'string',
        columnId: 0,
        createdAt: '2024-05-31T16:45:45.608Z',
        updatedAt: '2024-05-31T16:45:45.608Z',
      },
    ],
  },
];

const columnMockData = [
  {
    result: 'SUCCESS',
    data: [
      {
        id: 0,
        title: 'TO DO',
        teamId: 'string',
        createdAt: '2024-05-31T16:47:59.846Z',
        updatedAt: '2024-05-31T16:47:59.846Z',
      },
    ],
  },
  {
    result: 'SUCCESS',
    data: [
      {
        id: 1,
        title: 'On Progress',
        teamId: 'string',
        createdAt: '2024-05-31T16:47:59.846Z',
        updatedAt: '2024-05-31T16:47:59.846Z',
      },
    ],
  },
];

export default function dashboardPage() {
  return (
    <div className='flex flex-wrap bg-gray-_fafafa '>
      {/* 컬럼 1 */}
      <div className='w-[354px] h-[1000px] flex flex-col p-[20px] gap-[25px] border-r border-gray-_eeeeee'>
        {/* 카드 info */}
        <div className='flex justify-between justify-center items-center'>
          <div className='text-[16px] font-bold flex justify-center items-center'>
            <img
              className='mr-[8px]'
              src='/images/Ellipse-puple.svg'
              alt='꾸미는 점'
            />
            <span className='mr-[12px]'>TO DO</span>
            <div className='h-[20px] text-[12px] font-normal text-gray-_787486 bg-gray-_eeeeee rounded px-[6px]'>
              3
            </div>
          </div>
          <Image
            width={24}
            height={24}
            src='/images/settings-icon.svg'
            alt='설정 아이콘'
          />
        </div>
        <div className='flex flex-col gap-[16px]'>
          {/* 카드 추가 버튼 */}
          <div className='bg-white rounded-md border border-gray-_d9d9d9 h-[40px] flex justify-center items-center'>
            <div className='w-[22px] h-[22px] rounded p-[3px] bg-[#F1EFFD]'>
              <img src='/images/add-card-icon.svg' />
            </div>
          </div>
          {/* 카드 배열 뿌리기 */}
          <CardsList cardsMockDataByColumnId={cardsMockDataByColumnId} />
        </div>
      </div>
      {/* 컬럼 2 */}
      <div className='w-[354px] h-[1000px] flex flex-col p-[20px] gap-[25px] border-r border-gray-_eeeeee'>
        {/* 카드 info */}
        <div className='flex justify-between justify-center items-center'>
          <div className='text-[16px] font-bold flex justify-center items-center'>
            <img
              className='mr-[8px]'
              src='/images/Ellipse-puple.svg'
              alt='꾸미는 점'
            />
            <span className='mr-[12px]'>TO DO</span>
            <div className='h-[20px] text-[12px] font-normal text-gray-_787486 bg-gray-_eeeeee rounded px-[6px]'>
              3
            </div>
          </div>
          <Image
            width={24}
            height={24}
            src='/images/settings-icon.svg'
            alt='설정 아이콘'
          />
        </div>
        <div className='flex flex-col gap-[16px]'>
          {/* 카드 추가 버튼 */}
          <div className='bg-white rounded-md border border-gray-_d9d9d9 h-[40px] flex justify-center items-center'>
            <div className='w-[22px] h-[22px] rounded p-[3px] bg-[#F1EFFD]'>
              <img src='/images/add-card-icon.svg' />
            </div>
          </div>
          {/* 카드 배열 뿌리기 */}
          <CardsList cardsMockDataByColumnId={cardsMockDataByColumnId} />
        </div>
      </div>
      {/* 카드 추가하기 버튼 */}
      <div className='w-[354px] h-[70px] bg-white rounded-md border border-gray-_d9d9d9 h-[40px] flex justify-center items-center relative top-[68px] left-[20px]'>
        <div className='flex gap-[12px]'>
          <span className='text-[18px] font-bold'>새로운 컬럼 추가하기</span>
          <div className='w-[22px] h-[22px] rounded p-[3px] bg-[#F1EFFD]'>
            <img src='/images/add-card-icon.svg' />
          </div>
        </div>
      </div>
    </div>
  );
}

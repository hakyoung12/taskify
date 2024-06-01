import Link from 'next/link';
import Pagination from './Pagination';

interface Todo {
  id: number;
  title: string;
  color: string;
  createdByMe: boolean;
}

const mockData: Todo[] = [
  {
    id: 1,
    title: '비브리지',
    color: 'green',
    createdByMe: true,
  },
  {
    id: 2,
    title: '코드잇',
    color: 'red',
    createdByMe: true,
  },
  {
    id: 3,
    title: '3분기 계획',
    color: 'orange',
    createdByMe: false,
  },
  {
    id: 4,
    title: '회의록',
    color: 'blue',
    createdByMe: false,
  },
  {
    id: 5,
    title: '중요문서함',
    color: 'lime',
    createdByMe: false,
  },
];

export default function DashboardCard() {
  return (
    <section className='m-6 w-sreen'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-2 gap-3 h-[152px] sm:grid-cols-2 sm:grid-rows-3 sm:h-56 max-sm:grid-cols-1 max-sm:grid-rows-6 max-sm:h-96'>
        <button className='flex items-center text-gray-800 justify-center gap-3 w-full h-16 font-Pretendard font-semibold px-5 py-7 text-base rounded-lg border border-gray-300 bg-white max-lg:w-56 max-sm:h-14'>
          새로운 대시보드
          <img
            className='w-5 h-5'
            src='/images/arrowButton.svg'
            alt='대시보드 바로가기'
          />
        </button>
        {mockData.map((todo) => (
          <Link
            key={todo.id}
            href={`/dashboard/${todo.id}`}
            className='flex items-center text-gray-800 justify-between w-full h-16 font-Pretendard font-semibold px-5 py-7 text-base rounded-lg border border-gray-300 bg-white max-lg:w-56 max-sm:h-14'
          >
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-4'>
                <div className={`w-2 h-2 rounded-full bg-${todo.color}-500`} />
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
          1 페이지 중 1
        </div>
        <Pagination />
      </div>
    </section>
  );
}

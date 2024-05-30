import arrowButton from '../../public/arrowButton.svg';
import addTaskButton2 from '../../public/addTaskButton2.svg';
import createByMe from '../../public/createByMe.svg';
import Link from 'next/link';
import Image from 'next/image';
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
    <section className="m-6">
      <div className="grid grid-cols-3 grid-rows-2 gap-3 h-32 max-lg:grid-cols-2 max-lg:grid-rows-3 max-lg:h-56 max-sm:grid-cols-1 max-sm:grid-rows-6 max-sm:h-96">
        <button className="flex items-center text-gray-800 justify-center gap-3 w-80 h-16 font-Pretendard font-semibold px-5 py-7 text-base rounded-lg border border-gray-300 bg-white max-lg:w-56 max-sm:h-14">
          새로운 대시보드
          <div className="w-5 h-5">
            <Image src={addTaskButton2} alt="대시보드 바로가기" />
          </div>
        </button>
        {mockData.map((todo) => (
          <Link
            key={todo.id}
            href={`/dashboard/${todo.id}`}
            className="flex items-center text-gray-800 justify-between w-80 h-16 font-Pretendard font-semibold px-5 py-7 text-base rounded-lg border border-gray-300 bg-white max-lg:w-56 max-sm:h-14"
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full bg-${todo.color}-500`} />
                <div>{todo.title}</div>
              </div>
              {todo.createdByMe && (
                <div className="w-5 h-3.5">
                  <Image src={createByMe} alt="내가 만든 대시보드" />
                </div>
              )}
            </div>
            <button className="w-5 h-5">
              <Image src={arrowButton} alt="대시보드 바로가기" />
            </button>
          </Link>
        ))}
      </div>
      <div className="flex justify-end items-center gap-3 pt-2 pr-0 max-sm:pt-3">
        <div className="text-gray-800 font-Pretendard text-base font-normal">1 페이지 중 1</div>
        <Pagination />
      </div>
    </section>
  );
}

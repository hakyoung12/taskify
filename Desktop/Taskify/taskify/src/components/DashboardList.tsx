import addTaskButton from '../../public/addTaskButton.svg';
import createByMe from '../../public/createByMe.svg';
import Image from 'next/image';
import Link from 'next/link';

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

export default function DashboardList() {
  return (
    <div className="p-0 px-3">
      <div className="flex justify-between items-center mt-16 mx-3 mb-8 text-gray-500 font-Pretendard font-bold max-sm:mx-2">
        <div className="text-gray-500 font-pretendard text-xs font-bold max-sm:hidden">
          Dash Boards
        </div>
        <button className="w-5 h-5">
          <Image src={addTaskButton} alt="할 일 추가하기" />
        </button>
      </div>
      <div>
        {mockData.map((todo) => (
          <Link
            key={todo.id}
            href={`/dashboard/${todo.id}`}
            className="flex my-7 items-center gap-4 text-gray-700 font-Pretendard font-medium max-sm:justify-center"
          >
            <div className={`w-2 h-2 rounded-full bg-${todo.color}-500`} />
            <div className="max-sm:hidden">{todo.title}</div>
            {todo.createdByMe && (
              <div className="w-5 h-3.5 max-sm:hidden">
                <Image src={createByMe} alt="내가 만든 대시보드" />
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

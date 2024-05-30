import sideBarLogo from '../../public/sideBarLogo.svg';
import taskify from '../../public/taskify.svg';
import DashboardList from './DashboardList';
import Image from 'next/image';
import Link from 'next/link';
import Pagination from './Pagination';

export default function SideBar() {
  return (
    <aside className="lg:w-72 h-screen flex-shrink-0 border-r-2 border-solid border-gray-300 bg-white max-lg:w-40 max-sm:w-16">
      <Link href="/" className="flex p-5 px-6 pb-0 max-sm:px-5">
        <Image src={sideBarLogo} className="max-sm:w-6 max-sm:w-7" alt="Taskify 이미지 로고" />
        <Image src={taskify} className="max-sm:hidden" alt="Taskify 텍스트 로고" />
      </Link>
      <DashboardList />
      <div className="absolute bottom-4 left-3 max-sm:hidden">
        <Pagination />
      </div>
    </aside>
  );
}

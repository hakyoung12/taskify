import DashboardList from './DashboardList';
import Link from 'next/link';
import Pagination from './Pagination';

export default function SideBar() {
  return (
    <aside className='relative lg:w-72 min-h-screen flex-shrink-0 border-r-2 border-solid border-gray-300 bg-white max-lg:w-40 max-sm:w-16'>
      <Link href='/' className='flex p-5 px-6 pb-0 max-sm:px-5'>
        <img
          className='w-[28px] h-[33px] max-sm:w-6 max-sm:w-7'
          src='/images/sideBarLogo.svg'
          alt='Taskify 로고'
        />
        <img
          src='/images/taskify.svg'
          className='w-[80px] h-[22]px max-sm:hidden'
          alt=''
        />
      </Link>
      <DashboardList />
      <div className='absolute bottom-4 left-3 max-sm:hidden'>
        <Pagination />
      </div>
    </aside>
  );
}

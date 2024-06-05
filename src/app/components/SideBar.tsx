import Image from 'next/image';
import DashboardList from './DashboardList';
import Link from 'next/link';

export default function SideBar() {
  return (
    <aside className='relative min-h-screen flex-shrink-0 border-r-2 border-solid border-gray-300 bg-white max-lg:w-40 max-sm:w-16 lg:w-72'>
      <Link href='/' className='flex p-5 px-6 pb-0 max-sm:px-5'>
        <div className='relative h-[33px] w-[28px] max-sm:w-6 max-sm:w-7'>
          <Image fill src='/images/sideBarLogo.svg' alt='Taskify 로고' />
        </div>
        <div className='h-[22]px relative w-[80px] max-sm:hidden'>
          <Image fill src='/images/taskify.svg' alt='' />
        </div>
      </Link>
      <DashboardList />
    </aside>
  );
}

'use client';

import React from 'react';
import SideBar from '../components/SideBar';
import DashboardHeader from '../components/DashboardHeader';
import DashboardHeaderInSettings from '../components/DashboardHeaderInSettings';
import { usePathname, useRouter } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const renderHeader = () => {
    if (pathname === '/mydashboard') {
      return <DashboardHeader title={'내 대시보드'} />;
    } else if (
      pathname === '/mydashboard/edit' ||
      pathname.startsWith('/dashboard/')
    ) {
      return <DashboardHeaderInSettings />;
    } else if (pathname === '/mypage') {
      return <DashboardHeader title={'계정관리'} />;
    } else {
      return null;
    }
  };

  return (
    <div className='flex'>
      <SideBar />
      <div className='w-full'>
        {renderHeader()}
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;

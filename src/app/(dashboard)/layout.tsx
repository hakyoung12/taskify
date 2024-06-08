import React from 'react';
import SideBar from '../components/SideBar';
import DashboardHeader from '../components/DashboardHeader';
import DashboardHeaderInSettings from '../components/DashboardHeaderInSettings';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className='flex'>
      <SideBar />
      <div className='w-full'>
        <DashboardHeader />
        <DashboardHeaderInSettings />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;

'use client';
import BackButton from '@/app/components/BackButton';
import DashboardHeaderInSettings from '@/app/components/DashboardHeaderInSettings';
import InvitationList from '@/app/components/InvitationList';
import MemberList from '@/app/components/MemberList';
import SideBar from '@/app/components/SideBar';
import UpdateDashboardName from '@/app/components/UpdateDashboardName';

interface PageProps {
  params: {
    dashboardid: number;
  };
}

export default function dashboardPage({ params }: PageProps) {
  const { dashboardid } = params;
  const backLink = `/dashboard/${dashboardid}`; // 동적 파라미터를 포함한 링크 생성

  return (
    <div className='flex'>
      <SideBar />
      <div className='w-screen'>
        <DashboardHeaderInSettings />
        <div className='bg-custom_gray-_fafafa pb-5'>
          <BackButton link={backLink} />
          <UpdateDashboardName />
          <MemberList dashboardid={dashboardid} />
          <InvitationList dashboardid={dashboardid} />
        </div>
      </div>
    </div>
  );
}

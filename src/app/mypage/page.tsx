import BackButton from '../components/BackButton';
import DashboardHeaderInSettings from '../components/DashboardHeaderInSettings';
import SideBar from '../components/SideBar';

export default function MyPage() {
  return (
    <>
      <div className='flex'>
        <SideBar />
        <div className='w-3/4'>
          <DashboardHeaderInSettings />
          <BackButton link='/mydashboard' />
        </div>
      </div>
    </>
  );
}

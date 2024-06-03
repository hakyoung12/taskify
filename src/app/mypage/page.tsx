import SideBar from '@/app/components/SideBar';
import DashboardHeaderInSettings from '@/app/components/DashboardHeaderInSettings';
import BackButton from '../components/BackButton';
import ProfileSetting from '../components/ProfileSetting';

export default function MyPage() {
  return (
    <>
      <div className='flex'>
        <SideBar />
        <div className='w-3/4'>
          <DashboardHeaderInSettings />
          <div className='bg-custom_gray-_fafafa w-full h-full'>
            <BackButton link='/mydashboard' />
            <ProfileSetting />
          </div>
        </div>
      </div>
    </>
  );
}

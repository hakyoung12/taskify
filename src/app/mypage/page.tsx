import SideBar from '@/app/components/SideBar';
import DashboardHeaderInSettings from '@/app/components/DashboardHeaderInSettings';
import BackButton from '../components/BackButton';
import ProfileSetting from '../components/ProfileSetting';
import PasswordChangeForm from '../components/PasswordChangeForm';

export default function MyPage() {
  return (
    <>
      <div className='flex'>
        <SideBar />
        <div className='w-3/4'>
          <DashboardHeaderInSettings />
          <div className='h-full w-full bg-custom_gray-_fafafa'>
            <BackButton link='/mydashboard' />
            <ProfileSetting />
            <PasswordChangeForm />
          </div>
        </div>
      </div>
    </>
  );
}

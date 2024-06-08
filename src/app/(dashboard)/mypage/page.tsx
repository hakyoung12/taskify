import BackButton from '@/app/components/BackButton';
import ProfileSetting from '@/app/components/ProfileSetting';
import PasswordChangeForm from '@/app/components/PasswordChangeForm';

export default function MyPage() {
  return (
    <>
      <div className='flex'>
        <div className='w-screen'>
          <div className='bg-custom_gray-_fafafa pb-5'>
            <BackButton link='/mydashboard' />
            <ProfileSetting />
            <PasswordChangeForm />
          </div>
        </div>
      </div>
    </>
  );
}

import DashboardCard from '@/app/components/DashbaordCard';
import InvitedDashboardList from '@/app/components/InvitedDashboarList';
import InvitedDashboardListMobile from '@/app/components/InvitedDashboardListMobile';

const MyDashboard = () => {
  return (
    <div className='flex'>
      <div className='w-screen bg-custom_gray-_fafafa pb-5'>
        <div className='w-3/4'>
          <DashboardCard />
          <InvitedDashboardList />
          <InvitedDashboardListMobile />
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;

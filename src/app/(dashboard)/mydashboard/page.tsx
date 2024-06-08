import DashboardCard from '@/app/components/DashbaordCard';
import InvitedDashboardList from '@/app/components/InvitedDashboarList';
import InvitedDashboardListMobile from '@/app/components/InvitedDashboardListMobile';

const MyDashboard = () => {
  return (
    <div className='flex'>
      <div className='w-full bg-custom_gray-_fafafa pb-5 pr-6'>
        <DashboardCard />
        <InvitedDashboardList />
        <InvitedDashboardListMobile />
      </div>
    </div>
  );
};

export default MyDashboard;

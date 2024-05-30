import DashboardHeader from '@/components/DashboardHeader';
import InvitedDashboardList from '@/components/InvitedDashboarList';
import InvitedDashboardListMobile from '@/components/InvitedDashboardListMobile';

const MyDashboard = () => {
  return (
    <>
      <DashboardHeader />
      <InvitedDashboardList />
      <InvitedDashboardListMobile />
    </>
  );
};

export default MyDashboard;

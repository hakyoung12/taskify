import DashboardHeader from '../components/DashboardHeader';
import InvitedDashboardList from '../components/InvitedDashboarList';
import InvitedDashboardListMobile from '../components/InvitedDashboardListMobile';
import SideBar from '../components/SideBar';
import DashboardCard from '../components/DashbaordCard';

const MyDashboard = () => {
  return (
    <div className='flex'>
      <SideBar />
      <div className='w-screen bg-custom_gray-_fafafa pb-5'>
        <DashboardHeader />
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

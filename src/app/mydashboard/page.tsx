import DashboardHeader from '../components/DashboardHeader';
import InvitedDashboardList from '../components/InvitedDashboarList';
import InvitedDashboardListMobile from '../components/InvitedDashboardListMobile';
import SideBar from '../components/SideBar';
import DashboardCard from '../components/DashbaordCard';
import InvitationList from '../components/InvitationList';
import MemberList from '../components/MemberList';

const MyDashboard = () => {
  return (
    <>
      <div className='flex'>
        <SideBar />
        <div className='w-3/4'>
          <DashboardHeader />
          <DashboardCard />
          <InvitedDashboardList />
          <InvitedDashboardListMobile />
        </div>
      </div>
    </>
  );
};

export default MyDashboard;

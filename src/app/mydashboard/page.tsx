import DashboardHeader from '../components/DashboardHeader';
import InvitedDashboardList from '../components/InvitedDashboarList';
import InvitedDashboardListMobile from '../components/InvitedDashboardListMobile';
import SideBar from '../components/SideBar';
import DashboardCard from '../components/DashbaordCard';
import MemberList from '../components/MemberList';
import UpdateDashboardName from '../components/UpdateDashboardName';
import DashboardHeaderInSettings from '../components/DashboardHeaderInSettings';

const MyDashboard = () => {
  return (
    <>
      <div className='flex'>
        <SideBar />
        <div className='w-3/4'>
          <DashboardHeaderInSettings />
          <DashboardCard />
          <InvitedDashboardList />
          <InvitedDashboardListMobile />
          <UpdateDashboardName />
          <MemberList />
        </div>
      </div>
    </>
  );
};

export default MyDashboard;

import DashboardHeader from '../components/DashboardHeader';
import InvitedDashboardList from '../components/InvitedDashboarList';
import InvitedDashboardListMobile from '../components/InvitedDashboardListMobile';
import SideBar from '../components/SideBar';
import DashboardCard from '../components/DashbaordCard';
import UpdateDashboardName from '../components/UpdateDashboardName';
import DashboardHeaderInSettings from '../components/DashboardHeaderInSettings';

const MyDashboard = () => {
  return (
    <>
      <DashboardHeaderInSettings />
      <div className='flex'>
        <SideBar />
        <div>
          <DashboardHeader />
          <DashboardCard />
          <InvitedDashboardList />
          <InvitedDashboardListMobile />
          <UpdateDashboardName />
        </div>
      </div>
    </>
  );
};

export default MyDashboard;

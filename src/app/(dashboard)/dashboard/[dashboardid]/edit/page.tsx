'use client';
import instance from '@/app/api/axios';
import BackButton from '@/app/components/BackButton';
import InvitationList from '@/app/components/InvitationList';
import MemberList from '@/app/components/MemberList';
import UpdateDashboardName from '@/app/components/UpdateDashboardName';
import SettingChangedModal from '@/app/components/modals/SettingChangedModal';
import { useModal } from '@/context/ModalContext';
import { useRouter } from 'next/navigation';

interface PageProps {
  params: {
    dashboardid: number;
  };
}

export default function dashboardEditPage({ params }: PageProps) {
  const router = useRouter();
  const { dashboardid } = params;
  const backLink = `/dashboard/${dashboardid}`; // 동적 파라미터를 포함한 링크 생성

  const { openModal } = useModal();

  const handleOpenModal = (content: React.ReactNode) => {
    openModal(content);
  };

  /** 대시보드 삭제 */
  const onClick = async () => {
    try {
      const response = await instance.delete(backLink);
      handleOpenModal(
        <SettingChangedModal>대시보드가 삭제되었습니다.</SettingChangedModal>,
      );
      router.push('/');
    } catch (e: unknown) {
      <SettingChangedModal>
        대시보드가 삭제에 실패하였습니다.
      </SettingChangedModal>;
    }
  };
  return (
    <div className='w-full bg-custom_gray-_fafafa pb-5'>
      <BackButton link={backLink} />
      <UpdateDashboardName dashboardid={dashboardid} />
      <MemberList dashboardid={dashboardid} />
      <InvitationList dashboardid={dashboardid} />
      <button
        className='ml-[20px] mt-[40px] flex flex-shrink-0 items-center justify-center gap-10 rounded-md border border-custom_gray-_d9d9d9 px-[95px] py-[20px] max-sm:px-[84px] max-sm:py-[16px]'
        onClick={onClick}
      >
        대시보드 삭제하기
      </button>
    </div>
  );
}

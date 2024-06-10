'use client';
import { useEffect, useState } from 'react';
import { DeleteButton } from './DeleteButton';
import EditMenuTitle from './EditMenuTitle';
import { mockData } from './mockdata/InvitationMock';
import Image from 'next/image';
import instance from '../api/axios';
import { LoadInvitationsRes } from '../api/apiTypes/dashboardsType';

export default function InvitationList({
  dashboardid,
}: {
  dashboardid: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [invitationList, setInvitationList] = useState<LoadInvitationsRes[]>(
    [],
  );
  const [totalCount, setTotalCount] = useState<number>(10);
  const totalPage = Math.ceil(totalCount / 5) || 1;

  /** 대시보드 조회 파라미터 */
  const queryParams = { dashboardId: dashboardid, page: currentPage, size: 5 };

  const handleNextPage = () => {
    if (currentPage * 5 < mockData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  /** 멤버리스트 조회 */
  useEffect(() => {
    const fetchInvitationListData = async () => {
      const res = await instance.get(`dashboards/${dashboardid}/invitations`, {
        params: queryParams,
      });
      setInvitationList(res.data.invitations);
      setTotalCount(res.data.totalCount);
    };
    fetchInvitationListData();
  }, []);

  return (
    <div className='m-5 w-[620px] rounded-lg bg-custom_white max-xl:w-auto max-xl:max-w-[620px] max-sm:mx-3'>
      <div className='relative flex'>
        {}
        <EditMenuTitle
          title='초대 내역'
          subtitle='이메일'
          currentPage={currentPage}
          totalPage={totalPage}
          onPrev={handlePrevPage}
          onNext={handleNextPage}
        />
        <button className='font-Pretendard max-sm:text-sx mt-8 flex h-8 w-[105px] items-center gap-2 rounded-md bg-custom_violet-_5534da px-3 py-2 text-base font-medium text-white max-sm:absolute max-sm:bottom-4 max-sm:right-7 max-sm:text-xs'>
          <div className='relative h-4 w-4 max-sm:h-3.5 max-sm:w-3.5'>
            <Image
              fill
              src='/images/inviteMemberButton.svg'
              alt='초대하기 버튼'
            />
          </div>
          초대하기
        </button>
      </div>
      <div className='flex flex-col px-[28px] pb-[28px]'>
        {invitationList.length > 0 ? (
          <div>
            {invitationList.map((email) => {
              return (
                <div
                  key={email.invitations[0].inviter.id}
                  className='text-black-_333236 stroke-gray-_eeeeee flex flex-shrink-0 items-center justify-between border-b stroke-1 py-4'
                >
                  <div className='flex items-center gap-3 max-sm:text-sm'>
                    {email.invitations[0].inviter.email}
                  </div>
                  <DeleteButton title='삭제' />
                </div>
              );
            })}
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center text-xs text-custom_gray-_9fa6b2'>
            <div className='relative h-[100px] w-[100px]'>
              <Image
                fill
                src='/images/no_invitation.svg'
                alt='초대내역이 없습니다'
              />
            </div>
            <div>아직 초대내역이 없습니다</div>
          </div>
        )}
      </div>
    </div>
  );
}

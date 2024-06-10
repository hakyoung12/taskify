'use client';

import { useEffect, useState } from 'react';
import { CheckInvitationsRes } from '../api/apiTypes/invitationsType';
import instance from '../api/axios';
import Image from 'next/image';

const InvitedDashboardList = () => {
  const [invitations, setInvitations] = useState<
    CheckInvitationsRes['invitations'] | null
  >(null);

  useEffect(() => {
    const fetchInvitation = async () => {
      try {
        const res = await instance.get('invitations');
        console.log(res.data.invitations);
        setInvitations(res.data.invitations);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInvitation();
  }, []);

  const handleInvitationResponse = async (
    invitationId: number,
    inviteAccepted: boolean,
  ) => {
    try {
      await instance.put(`invitations/${invitationId}`, {
        inviteAccepted: inviteAccepted,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='ml-6 mt-6 hidden rounded-lg bg-custom_white px-7 py-8 sm:block xl:w-[1000px]'>
      <div className='text-2xl font-bold text-custom_black-_333236'>
        초대받은 대시보드
      </div>
      {invitations?.length === 0 ? (
        <div className='flex flex-col items-center justify-center'>
          <Image
            src='/images/no-invitation.svg'
            width={100}
            height={100}
            alt='no invitation'
          />
          <div>아직 초대받은 대시보드가 없어요.</div>
        </div>
      ) : (
        <>
          <div className='relative mt-5'>
            <input
              className='w-full rounded-md border border-custom_gray-_d9d9d9 p-3 indent-8 text-[16px]'
              placeholder='검색'
            />
            <img
              className='absolute top-[15px] ml-4'
              src='/images/search.svg'
              alt='search'
              width={24}
              height={24}
            />
          </div>
          <div>
            <div className='flex justify-between p-4 text-custom_gray-_9fa6b2'>
              <div className='min-w-0 flex-1'>이름</div>
              <div className='min-w-0 flex-1'>초대자</div>
              <div className='min-w-0 flex-1'>수락 여부</div>
            </div>
            {invitations?.map((invitation) => {
              return (
                <>
                  <div
                    key={invitation.id}
                    className='flex items-center justify-between border-b p-4'
                  >
                    <div className='min-w-0 flex-1'>
                      {invitation.dashboard.title}
                    </div>
                    <div className='min-w-0 flex-1'>
                      {invitation.inviter.nickname}
                    </div>
                    <div className='min-w-0 flex-1'>
                      <div className='flex space-x-2'>
                        <button
                          className='rounded bg-custom_violet-_5534da px-7 py-2 text-white'
                          onClick={() =>
                            handleInvitationResponse(invitation.id, true)
                          }
                        >
                          수락
                        </button>
                        <button
                          className='rounded border border-custom_gray-_d9d9d9 bg-custom_white px-7 py-2 text-custom_violet-_5534da'
                          onClick={() =>
                            handleInvitationResponse(invitation.id, false)
                          }
                        >
                          거절
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default InvitedDashboardList;

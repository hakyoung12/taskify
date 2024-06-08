'use client';
import EditMenuTitle from './EditMenuTitle';
import { DeleteButton } from './DeleteButton';
import { mockData } from './mockdata/MemberMock';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import instance from '../api/axios';
import { CheckMembersRes } from '../api/apiTypes/membersType';

export default function MemberList({ dashboardid }: { dashboardid: number }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [memberList, setMemberList] = useState<CheckMembersRes[]>([]);
  const [totalCount, setTotalCount] = useState<number>(10);
  const startIndex = (currentPage - 1) * 4;
  const totalPage = Math.ceil(totalCount / 4);
  /** 대시보드 조회 파라미터 */
  const queryParams = { dashboardId: dashboardid };

  const handleNextPage = () => {
    if (currentPage * 4 < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  /** 대시보드 조회 */
  useEffect(() => {
    const fetchdashboardData = async () => {
      const res = await instance.get('members', {
        params: queryParams,
      });
      console.log(res);
      setMemberList(res.data.members);
      setTotalCount(res.data.totalCount);
    };
    fetchdashboardData();
  }, []);

  return (
    <div className='m-5 w-[620px] rounded-lg bg-custom_white max-xl:w-auto max-xl:max-w-[620px] max-sm:mx-3'>
      <EditMenuTitle
        title='구성원'
        subtitle='이름'
        currentPage={currentPage}
        totalPage={totalPage}
        onPrev={handlePrevPage}
        onNext={handleNextPage}
      />
      <div className='flex flex-col px-[28px] pb-[28px]'>
        <div>
          {memberList.map((member) => {
            return (
              <div
                key={member.id}
                className='text-black-_333236 stroke-gray-_eeeeee flex flex-shrink-0 items-center justify-between border-b stroke-1 py-4'
              >
                <div className='flex items-center gap-3 max-sm:text-sm'>
                  <div className='relative h-[38px] w-[38px]'>
                    <Image
                      fill
                      src='/images/mockprofile4.svg'
                      alt='프로필 사진'
                    />
                  </div>
                  {member.nickname}
                </div>
                <DeleteButton title='삭제' />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

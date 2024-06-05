'use client';

import { useEffect, useState } from 'react';
import { LOGIN_TOKEN } from '../api/apiStrings';
import { CheckUserRes } from '../api/apiTypes/userType';
import instance from '../api/axios';

const DashboardHeader = () => {
  const [user, setUser] = useState<CheckUserRes | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem(LOGIN_TOKEN);
    const fetchUserData = async () => {
      try {
        const res = await instance.get('users/me');
        setUser(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    accessToken ? fetchUserData() : setUser(null);
  }, []);

  return (
    <div className='flex h-[60px] items-center justify-between border-b border-r border-t border-custom_gray-_d9d9d9 py-4'>
      <div className='ml-10 text-lg font-bold text-custom_black-_333236'>
        내 대시보드
      </div>
      <div className='flex items-center'>
        <div className='relative mx-3 h-[34px] w-[34px] rounded-full border-2 border-white bg-blue-500 text-white'>
          <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
            {user && user.nickname[0]}
          </p>
        </div>
        <div className='mr-[80px] hidden w-[45px] sm:block'>
          {user && user.nickname}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;

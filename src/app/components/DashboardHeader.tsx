'use client';

import { useEffect, useState } from 'react';
import { LOGIN_TOKEN } from '@/app/api/apiStrings';
import { CheckUserRes } from '@/app/api/apiTypes/userType';
import instance from '@/app/api/axios';
import { useRouter } from 'next/navigation';

const DashboardHeader = () => {
  const [user, setUser] = useState<CheckUserRes | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();

  const handleNicknameClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem(LOGIN_TOKEN);
    setUser(null);
    setShowDropdown(false);
    router.push('/');
  };

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

    accessToken ? fetchUserData() : router.push('/');
  }, []);

  return (
    <div className='flex h-[60px] items-center justify-between border-b border-r border-t border-custom_gray-_d9d9d9 py-4'>
      <div className='ml-10 text-lg font-bold text-custom_black-_333236'>
        내 대시보드
      </div>
      <div className='relative'>
        <div className='flex items-center' onClick={handleNicknameClick}>
          <div className='relative mx-3 h-[34px] w-[34px] cursor-pointer rounded-full border-2 border-white bg-blue-500 text-white'>
            <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
              {user && user.nickname[0]}
            </p>
          </div>
          <div className='mr-[80px] hidden w-[45px] cursor-pointer sm:block'>
            {user && user.nickname}
          </div>
        </div>
        {showDropdown && (
          <div className='absolute right-0 top-full z-10 mt-1 rounded border border-gray-300 bg-white shadow-md'>
            <ul>
              <li
                onClick={handleLogout}
                className='cursor-pointer px-4 py-2 hover:bg-gray-100'
              >
                로그아웃
              </li>
              <li
                className='cursor-pointer px-4 py-2 hover:bg-gray-100'
                onClick={() => router.push('/mypage')}
              >
                마이페이지
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;

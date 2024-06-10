'use client';

import Image from 'next/image';
import { useModal } from '@/context/ModalContext';
import InvitationModal from './modals/InvitationModal';
import { useEffect, useState } from 'react';
import { CheckUserRes } from '@/app/api/apiTypes/userType';
import { LOGIN_TOKEN } from '@/app/api/apiStrings';
import instance from '../api/axios';
import { useParams, useRouter } from 'next/navigation';

const DashboardHeaderInSettings = () => {
  const [user, setUser] = useState<CheckUserRes | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [title, setTitle] = useState<string | null>(null);

  const router = useRouter();
  const params = useParams();

  // console.log('params');
  // console.log(params.dashboardid);

  const { openModal } = useModal();

  const handleOpenModal = (content: React.ReactNode) => {
    openModal(content);
  };

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

    const fetchDashboardData = async () => {
      try {
        const res = await instance.get(`dashboards/${params.dashboardid}`);
        setTitle(res.data.title);
      } catch (error) {
        console.error(error);
      }
    };

    if (!accessToken) {
      router.push('/');
    }

    fetchUserData();
    fetchDashboardData();
  }, []);

  return (
    <nav className='flex h-[60px] items-center justify-between border-b'>
      <div className='hidden items-center sm:flex'>
        <span className='ml-10 text-lg font-bold'>{title}</span>
        <span className='ml-2 text-yellow-500'>
          <Image
            src='/images/createByMe.svg'
            alt='crown'
            width={20}
            height={16}
          />
        </span>
      </div>
      <div className='flex items-center space-x-2'>
        <div className='ml-7 flex space-x-4 text-[14px] text-custom_gray-_787486 sm:mr-10 sm:text-[16px]'>
          <button className='flex w-[50px] items-center justify-center rounded-md border bg-white px-2 py-1 sm:w-[88px]'>
            <Image
              className='mr-2 hidden sm:block'
              src='/images/settings.svg'
              alt='settings'
              width={20}
              height={20}
            />
            <p>관리</p>
          </button>
          <button
            className='flex w-[70px] items-center justify-center rounded-md border bg-white px-2 py-1 sm:w-[116px]'
            onClick={() => handleOpenModal(<InvitationModal />)}
          >
            <Image
              className='mr-2 hidden sm:block'
              src='/images/addTaskButton.svg'
              alt='add'
              width={20}
              height={20}
            />
            <p>초대하기</p>
          </button>
        </div>
        <div className='ml-6 flex items-center sm:-space-x-2'>
          <div className='ml-[100px] flex items-center -space-x-2 sm:ml-0'>
            <div className='relative z-10'>
              <div className='h-[34px] w-[34px] rounded-full border-2 border-white bg-red-500 text-white'>
                <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                  Y
                </p>
              </div>
            </div>
            <div className='relative z-10'>
              <div className='h-[34px] w-[34px] rounded-full border-2 border-white bg-green-500 text-white'>
                <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                  Y
                </p>
              </div>
            </div>
            <div className='relative z-10 hidden sm:block'>
              <div className='h-[34px] w-[34px] rounded-full border-2 border-white bg-orange-500 text-white'>
                <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                  Y
                </p>
              </div>
            </div>
            <div className='relative z-10 hidden sm:block'>
              <div className='h-[34px] w-[34px] rounded-full border-2 border-white bg-yellow-500 text-white'>
                <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                  Y
                </p>
              </div>
            </div>
            <div className='relative z-10'>
              <div className='h-[34px] w-[34px] rounded-full border-2 border-white bg-blue-500 text-white'>
                <p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                  +2
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='h-10 border-r sm:pl-3'></div>
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
            <div className='absolute right-0 top-full mt-1 rounded border border-gray-300 bg-white shadow-md'>
              <ul>
                <li
                  onClick={handleLogout}
                  className='cursor-pointer px-4 py-2 hover:bg-gray-100'
                >
                  로그아웃
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeaderInSettings;

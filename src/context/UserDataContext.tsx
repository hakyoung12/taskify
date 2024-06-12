'use client';

import instance from '@/app/api/axios';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface UserDataContextProps {
  nickname: string;
  profileImageUrl?: string | undefined;
}

interface UserDataProviderProps {
  children: ReactNode;
}

interface UserDataContextType {
  userData: UserDataContextProps | undefined;
  setUserData: React.Dispatch<
    React.SetStateAction<UserDataContextProps | undefined>
  >;
}

// 대시보드 데이터 컨텍스트 생성
const UserDataContext = createContext<UserDataContextType | undefined>(
  undefined,
);

// 대시보드 데이터 제공자 컴포넌트
export const UserDataProvider = ({ children }: UserDataProviderProps) => {
  const [userData, setUserData] = useState<UserDataContextProps>();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await instance.get('users/me');
        setUserData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

// 대시보드 데이터를 사용하기 위한 Hook
export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('유저데이터 사용불가능!');
  }
  return context;
};

'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DashboardDataContextProps {
  id: string;
  title: string;
  color: string;
  createdByMe: boolean;
}

interface DashboardDataProviderProps {
  children: ReactNode;
}

interface DashboardDataContextType {
  dashboardsData: DashboardDataContextProps[];
  setDashboardsData: React.Dispatch<
    React.SetStateAction<DashboardDataContextProps[]>
  >;
  dashboardCard: DashboardDataContextProps[];
  setDashboardCard: React.Dispatch<
    React.SetStateAction<DashboardDataContextProps[]>
  >;
}

// 대시보드 데이터 컨텍스트 생성
const DashboardDataContext = createContext<
  DashboardDataContextType | undefined
>(undefined);

// 대시보드 데이터 제공자 컴포넌트
export const DashboardDataProvider = ({
  children,
}: DashboardDataProviderProps) => {
  const [dashboardsData, setDashboardsData] = useState<
    DashboardDataContextProps[]
  >([]);
  const [dashboardCard, setDashboardCard] = useState<
    DashboardDataContextProps[]
  >([]);

  return (
    <DashboardDataContext.Provider
      value={{
        dashboardsData,
        setDashboardsData,
        dashboardCard,
        setDashboardCard,
      }}
    >
      {children}
    </DashboardDataContext.Provider>
  );
};

// 대시보드 데이터를 사용하기 위한 Hook
export const useDashboardData = () => {
  const context = useContext(DashboardDataContext);
  if (context === undefined) {
    throw new Error(
      'useDashboardData must be used within a DashboardDataProvider',
    );
  }
  return context;
};

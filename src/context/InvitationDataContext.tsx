'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface InvitationDataContextProps {
  id: number;
  inviter: {
    nickname: string;
    email: string;
    id: number;
  };
  teamId: string;
  dashboard: {
    title: string;
    id: number;
  };
  invitee: {
    nickname: string;
    email: string;
    id: number;
  };
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

interface InvitationDataProviderProps {
  children: ReactNode;
}

interface InvitationiDataContextType {
  invitationData: InvitationDataContextProps[];
  setInvitationData: React.Dispatch<
    React.SetStateAction<InvitationDataContextProps[]>
  >;
}

// 초대내역 데이터 컨텍스트 생성
const InvitationDataContext = createContext<
  InvitationiDataContextType | undefined
>(undefined);

// 초대내역 데이터 제공자 컴포넌트
export const InvitationDataProvider = ({
  children,
}: InvitationDataProviderProps) => {
  const [invitationData, setInvitationData] = useState<
    InvitationDataContextProps[]
  >([]);

  return (
    <InvitationDataContext.Provider
      value={{
        invitationData,
        setInvitationData,
      }}
    >
      {children}
    </InvitationDataContext.Provider>
  );
};

// 초대내역 데이터를 사용하기 위한 Hook
export const useInvitationData = () => {
  const context = useContext(InvitationDataContext);
  if (context === undefined) {
    throw new Error('초대내역 데이터 사용불가능!');
  }
  return context;
};

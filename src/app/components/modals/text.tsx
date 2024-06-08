'use client';
import { MouseEvent, useState } from 'react';
import AssigneeInput from '../Inputs/AssigneeInput';

type Assignee = {
  id?: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  isOwner?: boolean;
};

const Test = () => {
  const members = [
    { userId: 1, email: 'aa@aa.com', nickname: '가 고래' },
    { userId: 2, email: 'ba@aa.com', nickname: '나 고래' },
    { userId: 3, email: 'ca@aa.com', nickname: '다 고래' },
    { userId: 4, email: 'da@aa.com', nickname: '라 고래' },
    { userId: 5, email: 'ea@aa.com', nickname: '마 고래' },
  ];
  const [assignee, setAssignee] = useState<Assignee>({
    userId: 0,
    email: '',
    nickname: '',
  });

  return (
    <AssigneeInput
      assignee={assignee}
      members={members}
      setAssignee={setAssignee}
    />
  );
};

export default Test;

'use client';
import { useCallback, useState } from 'react';
import AssigneeInput from '../Inputs/AssigneeInput';
import TitleInput from '../Inputs/TitleInput';
import DescriptionInput from '../Inputs/DescriptionInput';
import { Input } from '../ui/input';
import DueDateInput from '../Inputs/DueDateInput';
import TagInput from '../Inputs/TagsInput';

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

interface Datas {
  assignee: Assignee;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl: string;
}

const Test = () => {
  const [datas, setDatas] = useState<Datas>({
    assignee: {
      userId: 0,
      email: '',
      nickname: '',
    },
    title: '',
    description: '',
    dueDate: '',
    tags: [],
    imageUrl: '',
  });

  const members = [
    { userId: 1, email: 'aa@aa.com', nickname: '가 고래' },
    { userId: 2, email: 'ba@aa.com', nickname: '나 고래' },
    { userId: 3, email: 'ca@aa.com', nickname: '다 고래' },
    { userId: 4, email: 'da@aa.com', nickname: '라 고래' },
    { userId: 5, email: 'ea@aa.com', nickname: '마 고래' },
  ];

  const setData = useCallback(
    (data: { [key: string]: string | Assignee | string[] }) => {
      setDatas((prev) => {
        return { ...prev, ...data };
      });
    },
    [],
  );

  return (
    <>
      <AssigneeInput
        assignee={datas.assignee}
        members={members}
        setData={setData}
      />
      <TitleInput setData={setData} />
      <DescriptionInput setData={setData} />
      <DueDateInput setData={setData} />
      <TagInput setData={setData} />
    </>
  );
};

export default Test;

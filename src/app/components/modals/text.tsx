'use client';
import { useCallback, useEffect, useState } from 'react';
import AssigneeInput from '../Inputs/AssigneeInput';
import TitleInput from '../Inputs/TitleInput';
import DescriptionInput from '../Inputs/DescriptionInput';
import DueDateInput from '../Inputs/DueDateInput';
import TagInput from '../Inputs/TagsInput';
import ImageInput from '../Inputs/ImageInput';
import { Assignee, Datas, Members } from '../Inputs/InputTypes';
import axios from '@/app/api/axios';
import { Button } from '../ui/button';

interface ModalProps {
  columnId: string;
  dashboardId: string;
  loginToken: string;
}

const Test = ({ columnId, dashboardId, loginToken }: ModalProps) => {
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
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [members, setMembers] = useState<Members>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const getMembers = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `/members?size=409&dashboardId=${dashboardId}`,
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        },
      );
      const { members } = data;
      setMembers(members);
    } catch (err) {
      console.log(err);
    }
  }, [dashboardId, loginToken]);

  const createCard = async () => {
    try {
      const res = await axios.post('/cards', datas, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
      });
    } catch (err) {
      console.log(err);
      alert('미안하지만 카드 생성은 실패다');
    }
  };

  const setData = useCallback(
    (data: { [key: string]: string | Assignee | string[] }) => {
      setDatas((prev) => {
        return { ...prev, ...data };
      });
    },
    [],
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      getMembers();
    }
  }, [isMounted, getMembers]);

  if (!isMounted) return;
  return (
    <div
      className='w-full max-w-[506px] bg-white'
      onClick={() => setIsFocused(false)}
    >
      <AssigneeInput
        assignee={datas.assignee}
        members={members}
        setData={setData}
        controlFocus={{ isFocused, setIsFocused }}
      />
      <TitleInput setData={setData} initTitle={datas.title} />
      <DescriptionInput setData={setData} initDescription={datas.description} />
      <DueDateInput setData={setData} initDueDate={datas.dueDate} />
      <TagInput setData={setData} initTags={datas.tags} />
      <ImageInput
        setData={setData}
        columnId={columnId}
        initImageUrl={datas.imageUrl}
        loginToken={loginToken}
      />
      <Button
        onClick={createCard}
        disabled={
          datas.assignee.nickname === '' ||
          datas.title === '' ||
          datas.description === '' ||
          datas.dueDate === '' ||
          datas.tags.length === 0 ||
          datas.imageUrl === ''
        }
        className='bg-custom_violet-_5534da disabled:bg-custom_gray-_9fa6b2'
      >
        생성
      </Button>
    </div>
  );
};

export default Test;

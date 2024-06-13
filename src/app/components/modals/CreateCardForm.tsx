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
  columnId: number;
  dashboardId: string | number;
  loginToken: string;
  closeModal: () => void;
  setIsCardChange: any;
}

const BUTTON_STYLE =
  'flex h-[48px] w-[120px] items-center justify-center font-medium max-sm:h-[42px] max-sm:flex-grow max-sm:text-[14px]';
const MODAL_TITLE_STYLE =
  'w-full text-[24px] font-bold text-custom_black-_333236';

const CreateCardForm = ({
  columnId,
  dashboardId,
  loginToken,
  closeModal,
  setIsCardChange,
}: ModalProps) => {
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
    const postBody = {
      assigneeUserId: datas.assignee.userId,
      dashboardId: dashboardId,
      columnId: columnId,
      title: datas.title,
      description: datas.description,
      dueDate: datas.dueDate,
      tags: datas.tags,
      imageUrl: datas.imageUrl,
    };
    try {
      const res = await axios.post('/cards', postBody, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
      });
      setIsCardChange(true);
      closeModal();
    } catch (err) {
      console.log(err);
      alert('미안하지만 카드 생성은 실패다');
    } finally {
    }
  };

  const setData = useCallback(
    (data: { [key: string]: string | Assignee | string[] | number }) => {
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
      className='max-sm:mb=[-8px] custom-scrollbar mb-[-4px] mr-[-4px] flex max-h-[calc(100vh-100px)] w-[calc(100vw-96px)] max-w-[458px] flex-col gap-y-[16px] overflow-y-scroll bg-white pr-[4px] max-sm:mr-[-8px] max-sm:mt-[8px]'
      onClick={() => {
        setIsFocused(false);
      }}
    >
      <h2 className={MODAL_TITLE_STYLE}>할 일 생성</h2>
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
      <div className='flex flex-row-reverse gap-x-[12px]'>
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
          className={`${BUTTON_STYLE} bg-custom_violet-_5534da text-custom_white hover:bg-[#4423c8] disabled:bg-custom_gray-_9fa6b2`}
        >
          생성
        </Button>
        <Button
          onClick={closeModal}
          type='button'
          className={`${BUTTON_STYLE} border border-solid border-custom_gray-_d9d9d9 bg-custom_white text-custom_gray-_787486 hover:text-custom_white`}
        >
          취소
        </Button>
      </div>
    </div>
  );
};

export default CreateCardForm;

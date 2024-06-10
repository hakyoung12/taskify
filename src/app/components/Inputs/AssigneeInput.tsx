'use client';

import React, {
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { INPUT_STYLE, LABLE_INPUT_STYLE, LABLE_STYLE } from './BaseInput';
import { Assignee, SetData } from './InputTypes';

interface AssigneeProps {
  assignee: Assignee;
  members: {
    id?: number;
    userId: number;
    email: string;
    nickname: string;
    profileImageUrl?: string;
    createdAt?: string;
    updatedAt?: string;
    isOwner?: boolean;
  }[];
  setData: SetData;
}

type Members = {
  id?: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  isOwner?: boolean;
}[];

const CIRCLE =
  'flex h-[22px] w-[22px] mr-[6px] items-center justify-center rounded-full bg-[#A3C4A2] text-[12px] font-bold text-custom_white';

export default function AssigneeInput({
  assignee,
  members,
  setData,
}: AssigneeProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const input = useRef<HTMLInputElement>(null);
  const [searchedMembers, setSearchedMembers] = useState<Members>(members);
  const [isDropShow, setIsDropShow] = useState<boolean>(false);
  const [isCircleShow, setIsCircleShow] = useState<boolean>(false);

  const clickAssignee = (e: MouseEvent<HTMLButtonElement>) => {
    const selected = members.filter(
      (member) => String(member.userId) === e.currentTarget.value,
    );
    setData({ assignee: selected[0] });
    setIsCircleShow(true);
    setIsDropShow(false);
  };

  const chooseAssignee = () => {
    if (searchedMembers.length === 1) {
      setData({ assignee: searchedMembers[0] });
      setIsCircleShow(true);
      setIsDropShow(false);
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      chooseAssignee();
      e.currentTarget.blur();
    } else if (isCircleShow && !isDropShow) {
      setIsCircleShow(false);
      setIsDropShow(true);
    }
  };

  useEffect(() => {
    const searched = members.filter((member) => {
      if (!inputValue?.trim()) {
        return true;
      } else {
        return member.nickname.indexOf(inputValue.trim()) !== -1;
      }
    });
    setSearchedMembers(searched);
  }, [inputValue, members]);

  useEffect(() => {
    setInputValue(assignee.nickname);
  }, [assignee]);

  return (
    <div className={`${LABLE_INPUT_STYLE} text-black`}>
      <label htmlFor='assignee' className={LABLE_STYLE}>
        담당자
      </label>
      <div
        className={`${INPUT_STYLE} ${isDropShow ? 'border-custom_violet-_5534da' : ''} flex items-center bg-white`}
        onClick={() => {
          input.current?.focus();
        }}
      >
        {isCircleShow && (
          <div className={CIRCLE}>{assignee.email?.charAt(0)}</div>
        )}
        <input
          id='assignee'
          placeholder='이름을 입력해주세요'
          className='no-autofill flex-grow outline-none'
          autoComplete='off'
          onChange={(e) => {
            setInputValue(e.target.value || '');
          }}
          onFocus={() => {
            setIsDropShow(true);
            setIsCircleShow(false);
          }}
          onBlur={chooseAssignee}
          onKeyDown={onKeyDown}
          value={inputValue}
          ref={input}
        />
      </div>
      {isDropShow && (
        <div className='max-h-[96px] overflow-y-scroll bg-white text-[16px] max-sm:max-h-[84px] max-sm:text-[14px]'>
          {searchedMembers.map((member) => {
            return (
              <button
                key={member.userId * -5}
                value={member.userId}
                type='button'
                className='flex items-center'
                onClick={clickAssignee}
              >
                <div className={CIRCLE}>{member.email.charAt(0)}</div>
                {member.nickname}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

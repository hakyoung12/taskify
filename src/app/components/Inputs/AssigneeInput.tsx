'use client';

import React, {
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { INPUT_STYLE, LABLE_INPUT_STYLE, LABLE_STYLE } from './InputStyles';
import { Assignee, SetData, Members } from './InputTypes';

interface AssigneeProps {
  assignee: Assignee;
  members: Members;
  setData: SetData;
  controlFocus: {
    isFocused: boolean;
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const CIRCLE =
  'flex-shrink-0 flex h-[22px] w-[22px] mr-[6px] items-center justify-center rounded-full bg-[#A3C4A2] text-[12px] font-bold text-custom_white';

export default function AssigneeInput({
  assignee,
  members,
  setData,
  controlFocus,
}: AssigneeProps) {
  const [inputValue, setInputValue] = useState<string>(assignee.nickname);
  const input = useRef<HTMLInputElement>(null);
  const [searchedMembers, setSearchedMembers] = useState<Members>(members);
  const { isFocused, setIsFocused } = controlFocus;

  const clickAssignee = (e: MouseEvent<HTMLButtonElement>) => {
    const selected = members.filter(
      (member) => String(member.userId) === e.currentTarget.value,
    );
    setData({ assignee: selected[0] });
    setIsFocused(false);
  };

  const chooseAssignee = () => {
    if (searchedMembers.length === 1) {
      setData({ assignee: searchedMembers[0] });
    } else {
      setInputValue('');
    }
    setIsFocused(false);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      chooseAssignee();
      e.currentTarget.blur();
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
    <div
      className={`${LABLE_INPUT_STYLE} relative max-w-[217px] text-black max-sm:max-w-none`}
      onClick={(e) => e.stopPropagation()}
    >
      <label htmlFor='assignee' className={LABLE_STYLE}>
        담당자
      </label>
      <div
        className={`${INPUT_STYLE} ${isFocused ? 'border-custom_violet-_5534da' : ''} flex items-center bg-white bg-[url('/images/dropDownArrow.svg')] bg-right bg-no-repeat`}
        onClick={() => {
          input.current?.focus();
        }}
      >
        {!isFocused && inputValue && (
          <div className={CIRCLE}>{assignee.nickname?.charAt(0)}</div>
        )}
        <input
          id='assignee'
          placeholder='이름을 입력해주세요'
          type='text'
          className='no-autofill flex-grow bg-transparent outline-none'
          autoComplete='off'
          onChange={(e) => {
            setInputValue(e.target.value || '');
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={chooseAssignee}
          onKeyDown={onKeyDown}
          value={inputValue}
          ref={input}
        />
      </div>
      {isFocused && (
        <div className='absolute top-[83px] max-h-[96px] w-full overflow-y-scroll rounded-sm bg-white text-[16px] max-sm:top-[73px] max-sm:max-h-[84px] max-sm:text-[14px]'>
          {searchedMembers.map((member) => {
            return (
              <button
                key={member.userId * -5}
                value={member.userId}
                type='button'
                className='flex items-center'
                onClick={clickAssignee}
              >
                <div className={CIRCLE}>{member.nickname.charAt(0)}</div>
                {member.nickname}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

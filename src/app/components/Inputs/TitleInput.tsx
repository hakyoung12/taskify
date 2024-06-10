'use client';

import React, { useEffect, useRef, useState } from 'react';
import { INPUT_STYLE, LABLE_INPUT_STYLE, LABLE_STYLE } from './BaseInput';
import { SetData } from './InputTypes';

interface TitleProps {
  setData: SetData;
}

export default function TitleInput({ setData }: TitleProps) {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    setData({ title: inputValue });
  }, [inputValue, setData]);
  return (
    <div className={LABLE_INPUT_STYLE}>
      <label htmlFor='title' className={LABLE_STYLE}>
        제목
      </label>
      <input
        id='title'
        placeholder='제목을 입력해주세요'
        type='text'
        onChange={(e) => {
          setInputValue(e.target.value || '');
        }}
        value={inputValue}
        className={`${INPUT_STYLE} text-black`}
      />
    </div>
  );
}

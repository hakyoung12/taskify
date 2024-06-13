'use client';

import React, { useEffect, useState } from 'react';
import { INPUT_STYLE, LABLE_INPUT_STYLE, LABLE_STYLE } from './InputStyles';
import { SetData } from './InputTypes';

interface Props {
  setData: SetData;
  initTitle: string;
}

export default function TitleInput({ setData, initTitle }: Props) {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    setData({ title: inputValue.trim() });
  }, [inputValue, setData]);

  useEffect(() => {
    setInputValue(initTitle);
  }, [initTitle]);

  return (
    <div className={LABLE_INPUT_STYLE}>
      <label htmlFor='title' className={LABLE_STYLE}>
        제목
      </label>
      <input
        id='title'
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

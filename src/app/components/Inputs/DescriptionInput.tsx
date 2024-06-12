'use client';

import React, { useEffect, useState } from 'react';
import { INPUT_STYLE, LABLE_INPUT_STYLE, LABLE_STYLE } from './InputStyles';
import { SetData } from './InputTypes';

interface Props {
  setData: SetData;
  initDescription: string;
}

export default function DescriptionInput({ setData, initDescription }: Props) {
  const [inputValue, setInputValue] = useState<string>(initDescription);

  useEffect(() => {
    setData({ description: inputValue });
  }, [inputValue, setData]);

  useEffect(() => {
    setInputValue(initDescription);
  }, [initDescription]);

  return (
    <div className={LABLE_INPUT_STYLE}>
      <label htmlFor='description' className={LABLE_STYLE}>
        설명
      </label>
      <textarea
        id='description'
        placeholder='설명을 입력해주세요'
        onChange={(e) => {
          setInputValue(e.target.value.trim() || '');
        }}
        value={inputValue}
        className={`${INPUT_STYLE} no-scrollbar h-[96px] resize-none text-black max-sm:h-[84px]`}
      />
    </div>
  );
}

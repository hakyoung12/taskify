'use client';

import React, { useEffect, useRef, useState } from 'react';
import { LABLE_INPUT_STYLE, LABLE_STYLE } from './BaseInput';
import { SetData } from './InputTypes';
import Image from 'next/image';

interface Props {
  setData: SetData;
}

export default function ImageInput({ setData }: Props) {
  const [imageUrl, setImageUrl] = useState<string>('');
  const image = useRef<HTMLInputElement>(null);

  const setImage = async () => {
    const imgFile = image.current?.files;
    if (imageUrl !== undefined) {
      URL.revokeObjectURL(imageUrl);
    }
    if (imgFile?.length) {
      console.log(imgFile);
      const newImg = URL.createObjectURL(imgFile[0]);
      setImageUrl(newImg);
    } else {
      setImageUrl('');
    }
  };

  useEffect(() => {
    setData({ imageUrl: imageUrl });
    console.log(imageUrl);
  }, [imageUrl, setData]);

  return (
    <div className={`${LABLE_INPUT_STYLE} relative`}>
      <label htmlFor='image' className={LABLE_STYLE}>
        이미지
      </label>
      <input
        id='image'
        type='file'
        accept='image/*'
        className={`z-10 w-[76px] text-transparent file:h-[76px] file:w-[76px] file:cursor-pointer file:rounded-md file:border-none ${imageUrl ? 'file:bg-transparent file:bg-none' : 'file:bg-[#f5f5f5] file:bg-[url("/images/add-card-icon.svg")]'} file:bg-[length:28px_28px] file:bg-center file:bg-no-repeat file:text-transparent`}
        onChange={() => {
          setImage();
        }}
        ref={image}
      />
      {imageUrl && (
        <div className='absolute top-[35px] h-[76px] w-[76px] cursor-pointer overflow-hidden rounded-md'>
          <Image src={imageUrl} fill alt='' />
        </div>
      )}
    </div>
  );
}

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { LABLE_INPUT_STYLE, LABLE_STYLE } from './BaseInput';
import { SetData } from './InputTypes';
import Image from 'next/image';
import axios from '@/app/api/axios';

interface Props {
  setData: SetData;
  columnId: string;
  imgUrl: string;
  loginToken: string;
}

export default function ImageInput({
  setData,
  columnId,
  imgUrl,
  loginToken,
}: Props) {
  const [imageUrl, setImageUrl] = useState<string>(imgUrl);
  const image = useRef<HTMLInputElement>(null);

  const setImage = async () => {
    const formData = new FormData();
    const imgFile = image.current?.files;
    if (imgFile) {
      formData.append('image', imgFile[0]);
    }
    try {
      const { data } = await axios.post(
        `/columns/${30202}/card-image`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzU4NCwidGVhbUlkIjoiNS05IiwiaWF0IjoxNzE4MDg2OTUxLCJpc3MiOiJzcC10YXNraWZ5In0.wooLN4zkICnds7Q9cFBlVJVH7CQpRAi7_bsMu0f8iHY',
          },
        },
      );
      setImageUrl(data.imageUrl);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setData({ imageUrl: imageUrl });
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

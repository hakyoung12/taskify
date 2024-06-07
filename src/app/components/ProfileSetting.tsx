'use client';
import { useForm } from 'react-hook-form';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Button } from '@radix-ui/themes';
import { useState } from 'react';
import Image from 'next/image';

export default function ProfileSetting() {
  const [uploadedImage, setUploadedImage] = useState(null);

  return (
    <form className='relative w-[620px] h-[355px] my-[25px] mx-5 py-4 px-[28px] flex-shrink-0 rounded-lg bg-custom_white'>
      <div className='text-4xl pb-8 font-bold font-Pretendard text-custom_black-_333236'>
        프로필
      </div>
      <div className='flex gap-4'>
        <label htmlFor='imageUpload'>
          {uploadedImage ? (
            <div className='relative w-[182px] h-[182px]'>
              <Image fill src={uploadedImage} alt='프로필 없을때' />
            </div>
          ) : (
            <div className='relative flex w-[182px] h-[182px] rounded-md bg-custom_gray-_fafafa'>
              <Image
                fill
                src='/images/no_Profile.svg'
                alt='프로필 이미지 수정하기'
              />
            </div>
          )}
        </label>
        <div className='flex flex-col w-full gap-5'>
          <div className='grid w-full max-w-sm items-center gap-[10px] text-lg'>
            <Label htmlFor='email'>이메일</Label>
            <Input
              type='email'
              id='email'
              className='h-12'
              placeholder='이메일을 입력해주세요'
            />
          </div>
          <div className='grid w-full max-w-sm items-center gap-[10px] text-lg font-medium font-Pretendard'>
            <Label htmlFor='email'>닉네임</Label>
            <Input
              type='text'
              id='email'
              className='h-12'
              placeholder='배유철'
            />
          </div>
        </div>
      </div>
      <Button
        className='absolute right-7 bottom-7 px-[30px] py-2 bg-custom_violet-_5534da text-white rounded'
        type='button'
      >
        저장
      </Button>
    </form>
  );
}

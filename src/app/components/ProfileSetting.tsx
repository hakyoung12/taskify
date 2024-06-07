'use client';
import { useForm } from 'react-hook-form';
import { Input } from '@/src/app/components/ui/input';
import { Label } from '@/src/app/components/ui/label';
import { Button } from '@radix-ui/themes';
import { useState } from 'react';
import Image from 'next/image';

export default function ProfileSetting() {
  const [uploadedImage, setUploadedImage] = useState(null);

  return (
    <form className='relative mx-5 my-[25px] h-[355px] w-[620px] flex-shrink-0 rounded-lg bg-custom_white px-[28px] py-4'>
      <div className='font-Pretendard pb-8 text-4xl font-bold text-custom_black-_333236'>
        프로필
      </div>
      <div className='flex gap-4'>
        <label htmlFor='imageUpload'>
          {uploadedImage ? (
            <div className='relative h-[182px] w-[182px]'>
              <Image fill src={uploadedImage} alt='프로필 없을때' />
            </div>
          ) : (
            <div className='relative flex h-[182px] w-[182px] rounded-md bg-custom_gray-_fafafa'>
              <Image
                fill
                src='/images/no_Profile.svg'
                alt='프로필 이미지 수정하기'
              />
            </div>
          )}
        </label>
        <div className='flex w-full flex-col gap-5'>
          <div className='grid w-full max-w-sm items-center gap-[10px] text-lg'>
            <Label htmlFor='email'>이메일</Label>
            <Input
              type='email'
              id='email'
              className='h-12'
              placeholder='이메일을 입력해주세요'
            />
          </div>
          <div className='font-Pretendard grid w-full max-w-sm items-center gap-[10px] text-lg font-medium'>
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
        className='absolute bottom-7 right-7 rounded bg-custom_violet-_5534da px-[30px] py-2 text-white'
        type='button'
      >
        저장
      </Button>
    </form>
  );
}

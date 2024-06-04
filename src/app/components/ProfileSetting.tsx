'use client';
import { useForm } from 'react-hook-form';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Button } from '@radix-ui/themes';
import { useState } from 'react';
import Image from 'next/image';

export default function ProfileSetting() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  /** input에서 이미지url을 받아서 미리보기 이미지 생성 */
  const onchangeImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files || files.length === 0) {
      setUploadedImage(null);
      return;
    }

    const uploadFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      setUploadedImage(reader.result as string);
    };
  };
  return (
    <form className='relative w-[620px] h-[355px] my-[25px] mx-5 py-4 px-[28px] flex-shrink-0 rounded-lg bg-custom_white'>
      <div className='text-4xl pb-8 font-bold font-Pretendard text-custom_black-_333236'>
        프로필
      </div>
      <div className='flex gap-4'>
        <label htmlFor='imageUpload'>
          <input
            type='file'
            accept='image/png, image/jpeg'
            className='hidden'
            onChange={onchangeImageUpload}
          />
          <label className='preview'>
            <input
              type='file'
              accept='image/png, image/jpeg'
              className='hidden'
              onChange={onchangeImageUpload}
            />
            <div className='relative flex w-[182px] h-[182px] rounded-md bg-custom_gray-_fafafa cursor-pointer'>
              <Image
                fill
                src={uploadedImage || '/images/no_Profile.svg'}
                alt='프로필 이미지 수정하기'
              />
            </div>
          </label>
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
            <Label htmlFor='nickname'>닉네임</Label>
            <Input
              type='text'
              id='nickname'
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

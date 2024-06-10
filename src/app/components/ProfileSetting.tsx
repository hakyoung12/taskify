'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Button } from '@radix-ui/themes';
import { useState } from 'react';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';
import SettingChangedModal from './modals/SettingChangedModal';
import instance from '../api/axios';

interface ProfileSettingValues {
  email: string;
  nickname: string;
}

export default function ProfileSetting() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileSettingValues>();

  /** submit 이벤트 추가 예정 */
  const onSubmit: SubmitHandler<ProfileSettingValues> = (data) => {
    handleOpenModal(
      <SettingChangedModal> 프로필이 변경되었습니다. </SettingChangedModal>,
    );
  };

  /** input에서 이미지url을 받아서 미리보기 이미지 생성 */
  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await instance.post('users/me/image', formData);
      setUploadedImage(response.data.profileImageUrl);
    } catch (error) {
      handleOpenModal(
        <SettingChangedModal>
          프로필 이미지 변경에 실패했습니다. 다시 시도해주세요.
        </SettingChangedModal>,
      );
    }
  };

  const onchangeImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { files } = e.target;

    if (!files || files.length === 0) {
      setUploadedImage(null);
      return;
    }

    const uploadFile = files[0];

    try {
      await uploadImage(uploadFile);
    } catch (error) {
      console.error('Failed to upload image:', error);
    }
  };

  const { openModal } = useModal();

  const handleOpenModal = (content: React.ReactNode) => {
    openModal(content);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='mx-5 my-[25px] flex w-[620px] flex-shrink-0 flex-col gap-8 rounded-lg bg-custom_white px-7 py-7 max-xl:w-auto max-xl:max-w-[620px] max-sm:mx-3 max-sm:flex max-sm:flex-col'
    >
      <div className='font-Pretendard text-4xl font-bold text-custom_black-_333236'>
        프로필
      </div>
      <div className='flex gap-4 max-sm:flex-col'>
        <label htmlFor='imageUpload'>
          <input
            type='file'
            accept='image/png, image/jpeg'
            className='hidden'
            id='imageUpload'
            onChange={onchangeImageUpload}
          />
          <div className='relative flex h-[182px] w-[182px] cursor-pointer rounded-md bg-custom_gray-_fafafa max-sm:h-[100px] max-sm:w-[100px]'>
            <Image
              fill
              src={uploadedImage || '/images/no_Profile.svg'}
              alt='프로필 이미지 수정하기'
            />
          </div>
        </label>
        <div className='flex w-full flex-col gap-5'>
          <div className='grid w-full max-w-sm items-center gap-[10px] text-lg'>
            <Label htmlFor='email'>이메일</Label>
            <Input
              type='email'
              id='email'
              className='h-12'
              placeholder='이메일을 입력해주세요'
              {...register('email', {
                required: { value: true, message: '이메일을 입력해주세요' },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: '이메일 형식이 올바르지 않습니다',
                },
              })}
            />
            {
              <p className='font-pretendard text-sm font-normal text-custom_red'>
                {errors.email?.message}
              </p>
            }
          </div>
          <div className='font-Pretendard grid w-full max-w-sm items-center gap-[10px] text-lg font-medium'>
            <Label htmlFor='nickname'>닉네임</Label>
            <Input
              type='text'
              id='nickname'
              className='h-12'
              placeholder='배유철'
              {...register('nickname')}
            />
          </div>
        </div>
      </div>
      <Button
        className='ml-auto rounded bg-custom_violet-_5534da px-[30px] py-2 text-white'
        type='submit'
      >
        저장
      </Button>
    </form>
  );
}

'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Button } from '@radix-ui/themes';
import { useRef } from 'react';
import { useModal } from '@/context/ModalContext';
import SettingChangedModal from './modals/SettingChangedModal';

interface PasswordChangeValues {
  password: string;
  newPassword: string;
  newPassworConfirm: string;
}

export default function PasswordChangeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PasswordChangeValues>();

  const { openModal } = useModal();

  const handleOpenModal = (content: React.ReactNode) => {
    openModal(content);
  };

  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch('newPassword');

  const onSubmit: SubmitHandler<PasswordChangeValues> = (data) => {
    console.log(data.password, data.newPassword);
    handleOpenModal(<SettingChangedModal text='현재 비밀번호가 틀렸습니다.' />);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='relative w-[620px] h-[454px] my-[25px] mx-5 py-4 px-[28px] flex-shrink-0 rounded-lg bg-custom_white'
    >
      <div className='text-4xl pb-8 font-bold font-Pretendard text-custom_black-_333236'>
        비밀번호 변경
      </div>
      <div className='flex flex-col gap-5'>
        <div className='grid w-full items-center gap-[10px] text-lg'>
          <Label htmlFor='email'>현재 비밀번호</Label>
          <Input
            type='password'
            id='password'
            className='h-12'
            placeholder='현재 비밀번호 입력'
            {...register('password', {
              required: { value: true, message: '비밀번호를 입력해주세요.' },
            })}
          />
        </div>
        <div className='grid w-full items-center gap-[10px] text-lg font-medium font-Pretendard'>
          <Label htmlFor='newPassword'>새 비밀번호</Label>
          <Input
            type='password'
            id='newPassword'
            className='h-12'
            placeholder='새 비밀번호 입력'
            {...register('newPassword', {
              required: { value: true, message: '새 비밀번호를 입력해주세요.' },
            })}
          />
          {
            <p className='text-custom_red font-pretendard text-sm font-normal'>
              {errors.newPassword?.message}
            </p>
          }
        </div>
        <div className='grid w-full items-center gap-[10px] text-lg font-medium font-Pretendard'>
          <Label htmlFor='newPassworConfirm'>새 비밀번호 확인</Label>
          <Input
            type='password'
            id='newPassworConfirm'
            className='h-12'
            placeholder='새 비밀번호 입력'
            {...register('newPassworConfirm', {
              required: {
                value: true,
                message: '새 비밀번호를 다시 입력해주세요.',
              },
              validate: (value) =>
                value === passwordRef.current || '비밀번호가 일치하지 않아요.',
            })}
          />
          {
            <p className='text-custom_red font-pretendard text-sm font-normal'>
              {errors.newPassworConfirm?.message}
            </p>
          }
        </div>
        <Button
          className='absolute right-7 bottom-7 px-[30px] py-2 bg-custom_violet-_5534da text-white rounded'
          type='submit'
        >
          변경
        </Button>
      </div>
    </form>
  );
}

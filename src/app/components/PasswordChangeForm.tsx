'use client';
import { useForm } from 'react-hook-form';
import { Input } from '@/src/app/components/ui/input';
import { Label } from '@/src/app/components/ui/label';
import { Button } from '@radix-ui/themes';

export default function PasswordChangeForm() {
  return (
    <form className='relative mx-5 my-[25px] h-[454px] w-[620px] flex-shrink-0 rounded-lg bg-custom_white px-[28px] py-4'>
      <div className='font-Pretendard pb-8 text-4xl font-bold text-custom_black-_333236'>
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
          />
        </div>
        <div className='font-Pretendard grid w-full items-center gap-[10px] text-lg font-medium'>
          <Label htmlFor='newPasswor'>새 비밀번호</Label>
          <Input
            type='password'
            id='newPassword'
            className='h-12'
            placeholder='새 비밀번호 입력'
          />
        </div>
        <div className='font-Pretendard grid w-full items-center gap-[10px] text-lg font-medium'>
          <Label htmlFor='newPassworConfirm'>새 비밀번호 확인</Label>
          <Input
            type='password'
            id='newPassworConfirm'
            className='h-12'
            placeholder='새 비밀번호 입력'
          />
        </div>
        <Button
          className='absolute bottom-7 right-7 rounded bg-custom_violet-_5534da px-[30px] py-2 text-white'
          type='button'
        >
          변경
        </Button>
      </div>
    </form>
  );
}

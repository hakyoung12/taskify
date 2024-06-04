'use client';
import { useForm } from 'react-hook-form';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Button } from '@radix-ui/themes';

export default function PasswordChangeForm() {
  return (
    <form className='relative w-[620px] h-[454px] my-[25px] mx-5 py-4 px-[28px] flex-shrink-0 rounded-lg bg-custom_white'>
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
          />
        </div>
        <div className='grid w-full items-center gap-[10px] text-lg font-medium font-Pretendard'>
          <Label htmlFor='newPasswor'>새 비밀번호</Label>
          <Input
            type='password'
            id='newPassword'
            className='h-12'
            placeholder='새 비밀번호 입력'
          />
        </div>
        <div className='grid w-full items-center gap-[10px] text-lg font-medium font-Pretendard'>
          <Label htmlFor='newPassworConfirm'>새 비밀번호 확인</Label>
          <Input
            type='password'
            id='newPassworConfirm'
            className='h-12'
            placeholder='새 비밀번호 입력'
          />
        </div>
        <Button
          className='absolute right-7 bottom-7 px-[30px] py-2 bg-custom_violet-_5534da text-white rounded'
          type='button'
        >
          변경
        </Button>
      </div>
    </form>
  );
}

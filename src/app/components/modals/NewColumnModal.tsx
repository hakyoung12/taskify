'use client';

import { Button } from '@/src/app/components/ui/button';
import ChipAddIcon from '@/src/app/components/ui/chipAddIcon';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/src/app/components/ui/dialog';
import { Input } from '@/src/app/components/ui/input';
import { Label } from '@/src/app/components/ui/label';
import { ChangeEvent, useState } from 'react';

const modalButtonStyle =
  'text-center w-[120px] h-[48px] text-[16px] rounded-lg';

export default function NewColumnModal() {
  const [value, setValue] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newvalue = e.target.value;
    setValue(newvalue);
    console.log(value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='border-gray-_d9d9d9 relative left-[20px] top-[68px] flex h-[70px] w-[354px] items-center justify-center rounded-lg border bg-white'
        >
          <span className='mr-[12px] text-[16px] font-bold'>
            새로운 컬럼 추가하기
          </span>
          <ChipAddIcon size={'large'} />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>새 컬럼 생성</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='flex flex-col gap-4'>
            <Label htmlFor='name'>이름</Label>
            <Input
              id='name'
              placeholder='새로운 프로젝트'
              className='col-span-3'
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type='button'
              variant='secondary'
              className={`${modalButtonStyle} border border-[#d9d9d9] bg-white text-[#787486]`}
            >
              취소
            </Button>
          </DialogClose>
          {/* value가 있을떄 버튼 활성화*/}
          <Button
            type='submit'
            className={`${modalButtonStyle} bg-[#5534DA]`}
            disabled={!value}
          >
            생성
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

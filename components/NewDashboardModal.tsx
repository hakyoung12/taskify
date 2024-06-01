import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function NewDashboardModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>New Dashboard Modal</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새로운 대시보드</DialogTitle>
        </DialogHeader>
        <div className='mt-8'>대시보드 이름</div>
        <input
          className='px-4 py-4 border border-custom_gray-_d9d9d9 rounded-md'
          placeholder='뉴프로젝트'
        ></input>
        <div className='flex gap-x-3'>
          <div className='relative bg-custom_green-_7ac555 w-[30px] h-[30px] rounded-full'>
            <img
              className='absolute top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2'
              src='/images/check.svg'
              alt='check'
            />
          </div>
          <div className='bg-custom_purple w-[30px] h-[30px] rounded-full'></div>
          <div className='bg-custom_orange w-[30px] h-[30px] rounded-full'></div>
          <div className='bg-custom_blue w-[30px] h-[30px] rounded-full'></div>
          <div className='bg-custom_pink w-[30px] h-[30px] rounded-full'></div>
        </div>
        <DialogFooter className='sm:justify-end'>
          <DialogClose asChild>
            <Button
              className='px-[46px] py-[14px]'
              type='button'
              variant='secondary'
            >
              취소
            </Button>
          </DialogClose>
          <Button
            className='px-[46px] py-[14px] bg-custom_violet-_5534da text-white rounded'
            type='button'
            variant='secondary'
          >
            생성
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

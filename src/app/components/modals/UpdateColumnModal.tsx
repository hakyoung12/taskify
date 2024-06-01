import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

export function UpdateColumnModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Update Column Modal</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>컬럼 관리</DialogTitle>
        </DialogHeader>
        <div className='mt-8'>이름</div>
        <input
          className='px-4 py-4 border border-custom_gray-_d9d9d9 rounded-md'
          placeholder='Done'
        ></input>
        <DialogFooter className='flex items-center'>
          <div className='mr-auto text-[14px] text-custom_gray-_9fa6b2 underline cursor-pointer'>
            삭제하기
          </div>
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
            변경
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

import { Button } from '../ui/button';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '../ui/dialog';

const Title = <div>새로운 대시보드</div>;

const Content = (
  <>
    <input
      className='px-4 py-4 border border-custom_gray-_d9d9d9 rounded-md'
      placeholder='뉴프로젝트'
    />
    <div className='flex gap-x-3'>
      <div className='relative bg-custom_green-_7ac555 w-[30px] h-[30px] rounded-full'>
        <img
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          src='/images/check.svg'
          alt='check'
        />
      </div>
      <div className='bg-custom_purple w-[30px] h-[30px] rounded-full'></div>
      <div className='bg-custom_orange w-[30px] h-[30px] rounded-full'></div>
      <div className='bg-custom_blue w-[30px] h-[30px] rounded-full'></div>
      <div className='bg-custom_pink w-[30px] h-[30px] rounded-full'></div>
    </div>
  </>
);

const Footer = (
  <>
    <DialogClose asChild>
      <Button className='px-[46px] py-[14px]' type='button' variant='secondary'>
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
  </>
);

export function NewDashboardModal() {
  return (
    <DialogContent className='sm:max-w-[425px]'>
      <DialogHeader>
        <DialogTitle>{Title}</DialogTitle>
        <DialogDescription>
          {/* Description here if needed */}
        </DialogDescription>
      </DialogHeader>
      {Content}
      <DialogFooter>{Footer}</DialogFooter>
    </DialogContent>
  );
}

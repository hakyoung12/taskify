import Image from 'next/image';
import { Button } from '../ui/button';
import { DialogClose } from '../ui/dialog';
import Modal from './Modal';

const Trigger = (
  <div className='flex items-center justify-center rounded-sm text-custom_black-_333236 text-sm leading-normal max-sm:text-xs hover:bg-custom_violet-_8 hover:text-custom_violet-_5534da'>
    수정하기
  </div>
);

const Title = <div>할 일 수정</div>;

const Content = (
  <>
    <DialogClose asChild>
      <Button className='px-[46px] py-[14px]' type='button' variant='secondary'>
        취소
      </Button>
    </DialogClose>
  </>
);

export function ModToDoModal() {
  return <Modal trigger={Trigger} title={Title} content={Content} />;
}

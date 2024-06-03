import { Button } from '../ui/button';
import { DialogClose } from '../ui/dialog';
import Modal from './Modal';

const Trigger = <Button variant='outline'>Update Column Modal</Button>;

const Title = <div>컬럼 관리</div>;

const Content = (
  <>
    <div>이름</div>
    <input
      className='px-4 py-4 border border-custom_gray-_d9d9d9 rounded-md'
      placeholder='Done'
    ></input>
  </>
);

const Footer = (
  <>
    <div className='mr-auto mt-5 text-[14px] text-custom_gray-_9fa6b2 underline cursor-pointer'>
      삭제하기
    </div>
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
      변경
    </Button>
  </>
);

export function UpdateColumnModal() {
  return (
    <Modal trigger={Trigger} title={Title} content={Content} footer={Footer} />
  );
}

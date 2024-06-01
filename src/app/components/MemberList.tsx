import EditMenuTitle from './EditMenuTitle';
import { DeleteButton } from './DeleteButton';

export default function MemberList() {
  return (
    <div className='w-auto rounded-lg bg-white-_ffffff m-5'>
      <EditMenuTitle title='구성원' subtitle='이름' />
      {/* 초대하기 버튼 추가예정 */}
      <div className='flex flex-col px-[28px] pb-[28px]'>
        {/* 멤버 리스트 <- 리팩토링예정 */}

        <div className='flex justify-between items-center flex-shrink-0 py-4 text-black-_333236 border-b stroke-gray-_eeeeee stroke-1'>
          <div className='flex items-center gap-3 max-sm:text-sm'>
            <img src='/images/mockprofile1.svg' alt='프로필 사진' />
            정만철
          </div>
          <DeleteButton title='삭제' />
        </div>
        <div className='flex justify-between items-center flex-shrink-0 py-4 text-black-_333236 border-b stroke-gray-_eeeeee stroke-1'>
          <div className='flex items-center gap-3 max-sm:text-sm'>
            <img src='/images/mockprofile2.svg' alt='프로필 사진' />
            김태순
          </div>
          <DeleteButton title='삭제' />
        </div>
        <div className='flex justify-between items-center flex-shrink-0 py-4 text-black-_333236 border-b stroke-gray-_eeeeee stroke-1'>
          <div className='flex items-center gap-3 max-sm:text-sm'>
            <img src='/images/mockprofile3.svg' alt='프로필 사진' />
            최주협
          </div>
          <DeleteButton title='삭제' />
        </div>
        <div className='flex justify-between items-center flex-shrink-0 py-4 text-black-_333236 border-b stroke-gray-_eeeeee stroke-1'>
          <div className='flex items-center gap-3 max-sm:text-sm'>
            <img src='/images/mockprofile4.svg' alt='프로필 사진' />
            윤지현
          </div>
          <DeleteButton title='삭제' />
        </div>
      </div>
    </div>
  );
}

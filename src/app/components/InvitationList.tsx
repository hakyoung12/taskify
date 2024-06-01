import { DeleteButton } from './DeleteButton';
import EditMenuTitle from './EditMenuTitle';

export default function InvitationList() {
  return (
    <div className='w-auto rounded-lg bg-white-_ffffff m-5'>
      <div className='relative flex'>
        <EditMenuTitle title='초대 내역' subtitle='이메일' />
        <button className='flex items-center gap-2 mt-8 py-2 px-3 w-[105px] h-8 text-white rounded-md bg-custom_violet-_5534da font-Pretendard font-medium text-base max-sm:absolute max-sm:bottom-4 max-sm:right-7 max-sm:text-sx py-2 px-3'>
          <img
            src='/images/inviteMemberButton.svg'
            className='w-4 h-4 max-sm:w-3.5 max-sm:h-3.5'
            alt='초대하기 버튼'
          />
          초대하기
        </button>
      </div>
      <div className='flex flex-col px-[28px] pb-[28px]'>
        <div className='flex justify-between items-center flex-shrink-0 py-4 text-black-_333236 border-b stroke-gray-_eeeeee stroke-1'>
          <div className='flex items-center gap-3 max-sm:text-sm'>
            codeitA@codeit.com
          </div>
          <DeleteButton title='삭제' />
        </div>
        <div className='flex justify-between items-center flex-shrink-0 py-4 text-black-_333236 border-b stroke-gray-_eeeeee stroke-1'>
          <div className='flex items-center gap-3 max-sm:text-sm'>
            codeitB@codeit.com
          </div>
          <DeleteButton title='삭제' />
        </div>
        <div className='flex justify-between items-center flex-shrink-0 py-4 text-black-_333236 border-b stroke-gray-_eeeeee stroke-1'>
          <div className='flex items-center gap-3 max-sm:text-sm'>
            codeitC@codeit.com
          </div>
          <DeleteButton title='삭제' />
        </div>
        <div className='flex justify-between items-center flex-shrink-0 py-4 text-black-_333236 border-b stroke-gray-_eeeeee stroke-1'>
          <div className='flex items-center gap-3 max-sm:text-sm'>
            codeitD@codeit.com
          </div>
          <DeleteButton title='삭제' />
        </div>
        <div className='flex justify-between items-center flex-shrink-0 py-4 text-black-_333236 border-b stroke-gray-_eeeeee stroke-1'>
          <div className='flex items-center gap-3 max-sm:text-sm'>
            codeitE@codeit.com
          </div>
          <DeleteButton title='삭제' />
        </div>
      </div>
    </div>
  );
}

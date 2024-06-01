import { DeleteButton } from './DeleteButton';
import EditMenuTitle from './EditMenuTitle';

export default function InvitationList() {
  return (
    <div className='w-auto rounded-lg bg-white-_ffffff m-5'>
      <div>
        <EditMenuTitle title='초대 내역' subtitle='이메일' />
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

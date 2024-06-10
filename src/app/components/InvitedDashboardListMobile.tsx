import Image from 'next/image';

const InvitedDashboardListMobile = () => {
  const data = [
    { id: 1, name: '프로덕트 디자인', inviter: '손동희' },
    { id: 2, name: '새로운 기획 문서', inviter: '안귀영' },
    { id: 3, name: '유닛 A', inviter: '장혁' },
  ];

  return (
    <div className='ml-6 mt-6 rounded-lg bg-custom_white px-7 py-8 sm:hidden'>
      <div className='text-2xl font-bold text-custom_black-_333236'>
        초대받은 대시보드
      </div>
      <div className='relative mt-5'>
        <input
          className='w-full rounded-md border border-custom_gray-_d9d9d9 p-3 indent-8 text-[16px]'
          placeholder='검색'
        />
        <Image
          className='absolute top-[15px] ml-4'
          src='/images/search.svg'
          alt='search'
          width={15}
          height={15}
        />
      </div>
      <div>
        {data.map((item) => (
          <div key={item.id} className='mt-5'>
            <div className='flex gap-x-7 text-[14px]'>
              <div className='text-custom_gray-_9fa6b2'>이름</div>
              <div>{item.name}</div>
            </div>
            <div className='flex gap-x-4 text-[14px]'>
              <div className='text-custom_gray-_9fa6b2'>초대자</div>
              <div className=''>{item.inviter}</div>
            </div>
            <div className='mt-5 flex gap-x-[10px]'>
              <button className='flex-1 rounded bg-custom_violet-_5534da px-7 py-2 text-white'>
                수락
              </button>
              <button className='flex-1 rounded border border-custom_gray-_d9d9d9 bg-white px-7 py-2 text-custom_violet-_5534da'>
                거절
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvitedDashboardListMobile;

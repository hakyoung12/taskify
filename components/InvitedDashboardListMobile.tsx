const InvitedDashboardListMobile = () => {
  const data = [
    { id: 1, name: '프로덕트 디자인', inviter: '손동희' },
    { id: 2, name: '새로운 기획 문서', inviter: '안귀영' },
    { id: 3, name: '유닛 A', inviter: '장혁' },
  ];

  return (
    <div className='md:hidden ml-[60px] md:ml-[160px] px-7 py-8 border border-black'>
      <div className='text-black-_333236 text-2xl font-bold'>
        초대받은 대시보드
      </div>
      <div className='relative mt-5'>
        <input
          className='w-full p-3 border border-gray-_d9d9d9 rounded-md indent-8 text-[16px]'
          placeholder='검색'
        />
        <img
          className='absolute top-[15px] ml-4'
          src='/images/search.svg'
          alt='search'
        />
      </div>
      <div>
        {data.map((item) => (
          <div key={item.id} className='mt-5'>
            <div className='flex gap-x-7 text-[14px]'>
              <div className='text-gray-_9fa6b2'>이름</div>
              <div>{item.name}</div>
            </div>
            <div className='flex gap-x-4 text-[14px]'>
              <div className='text-gray-_9fa6b2'>초대자</div>
              <div className=''>{item.inviter}</div>
            </div>
            <div className='flex gap-x-[10px] mt-5'>
              <button className='flex-1 px-7 py-2 bg-violet-_5534da text-white rounded'>
                수락
              </button>
              <button className='flex-1 px-7 py-2 bg-white text-violet-_5534da rounded border border-gray-_d9d9d9'>
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

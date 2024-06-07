const InvitedDashboardList = () => {
  const data = [
    { id: 1, name: '프로덕트 디자인', inviter: '손동희' },
    { id: 2, name: '새로운 기획 문서', inviter: '안귀영' },
    { id: 3, name: '유닛 A', inviter: '장혁' },
  ];

  return (
    <div className='botder-custom_gray-_d9d9d9 hidden border-b border-r border-t px-7 py-8 sm:block'>
      <div className='text-2xl font-bold text-custom_black-_333236'>
        초대받은 대시보드
      </div>
      <div className='relative mt-5'>
        <input
          className='w-full rounded-md border border-custom_gray-_d9d9d9 p-3 indent-8 text-[16px]'
          placeholder='검색'
        />
        <img
          className='absolute top-[15px] ml-4'
          src='/images/search.svg'
          alt='search'
          width={24}
          height={24}
        />
      </div>
      <div>
        <div className='flex justify-between p-4 text-custom_gray-_9fa6b2'>
          <div className='min-w-0 flex-1'>이름</div>
          <div className='min-w-0 flex-1'>초대자</div>
          <div className='min-w-0 flex-1'>수락 여부</div>
        </div>
        {data.map((item) => (
          <div
            key={item.id}
            className='flex items-center justify-between border-b p-4'
          >
            <div className='min-w-0 flex-1'>{item.name}</div>
            <div className='min-w-0 flex-1'>{item.inviter}</div>
            <div className='min-w-0 flex-1'>
              <div className='flex space-x-2'>
                <button className='rounded bg-custom_violet-_5534da px-7 py-2 text-white'>
                  수락
                </button>
                <button className='rounded border border-custom_gray-_d9d9d9 bg-custom_white px-7 py-2 text-custom_violet-_5534da'>
                  거절
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvitedDashboardList;

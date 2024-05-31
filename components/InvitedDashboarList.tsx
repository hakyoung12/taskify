const InvitedDashboardList = () => {
  const data = [
    { id: 1, name: '프로덕트 디자인', inviter: '손동희' },
    { id: 2, name: '새로운 기획 문서', inviter: '안귀영' },
    { id: 3, name: '유닛 A', inviter: '장혁' },
  ];

  return (
    <div className='hidden md:block ml-[60px] md:ml-[160px] px-7 py-8 border border-black'>
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
        <div className='flex justify-between p-4 text-gray-_9fa6b2'>
          <div className='flex-1 min-w-0'>이름</div>
          <div className='flex-1 min-w-0'>초대자</div>
          <div className='flex-1 min-w-0'>수락 여부</div>
        </div>
        {data.map((item) => (
          <div
            key={item.id}
            className='flex justify-between items-center p-4 border-b'
          >
            <div className='flex-1 min-w-0'>{item.name}</div>
            <div className='flex-1 min-w-0'>{item.inviter}</div>
            <div className='flex-1 min-w-0'>
              <div className='flex space-x-2'>
                <button className='px-7 py-2 bg-violet-_5534da text-white rounded'>
                  수락
                </button>
                <button className='px-7 py-2 bg-white text-violet-_5534da rounded border border-gray-_d9d9d9'>
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

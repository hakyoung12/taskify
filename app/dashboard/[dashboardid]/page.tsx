import Column from '@/components/Column';

const columnMockData = {
  result: 'SUCCESS',
  data: [
    {
      id: 0,
      title: 'TO DO',
      teamId: 'string',
      createdAt: '2024-05-31T16:47:59.846Z',
      updatedAt: '2024-05-31T16:47:59.846Z',
    },
    {
      id: 1,
      title: 'On Progress',
      teamId: 'string',
      createdAt: '2024-05-31T16:47:59.846Z',
      updatedAt: '2024-05-31T16:47:59.846Z',
    },
  ],
};

export default function dashboardPage() {
  return (
    <div className='flex flex-wrap bg-gray-_fafafa '>
      {columnMockData.data.map((column: any, index: number) => {
        return <Column key={index} title={column.title} />;
      })}
      {/* 카드 추가하기 버튼 */}
      <div className='w-[354px] h-[70px] bg-white rounded-md border border-gray-_d9d9d9 h-[40px] flex justify-center items-center relative top-[68px] left-[20px]'>
        <span className='text-[18px] font-bold mr-3'>새로운 컬럼 추가하기</span>
        <div className='w-[22px] h-[22px] rounded p-[3px] bg-[#F1EFFD]'>
          <img src='/images/add-card-icon.svg' />
        </div>
      </div>
    </div>
  );
}

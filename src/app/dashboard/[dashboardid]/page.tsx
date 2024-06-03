import Column from '@/app/components/Column';
import NewColumnModal from '@/app/components/modals/NewColumnModal';

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
    <div className='flex flex-wrap bg-custom_gray-_fafafa'>
      {/* 컬럼 컴포넌트 뿌리기 */}
      {columnMockData.data.map((column: any, index: number) => {
        return <Column key={column.id} title={column.title} />;
      })}
      {/* 카드 추가하기 모달 */}
      <NewColumnModal />
    </div>
  );
}

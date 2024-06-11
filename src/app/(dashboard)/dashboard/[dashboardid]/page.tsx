'use client';

import Column from '@/app/components/Column';
import NewColumnModal from '@/app/components/modals/NewColumnModal';
import ChipAddIcon from '@/app/components/ui/chipAddIcon';
import { useModal } from '@/context/ModalContext';
import { useEffect, useMemo, useState } from 'react';
import { getColumnsByDashBoardId } from '@/app/components/ToDoCardModal/api';

export default function dashboardPage(dashboardid: any) {
  const [columnData, setColumnData] = useState([]);
  const [columnTitles, setColumnTitles] = useState([]);
  const { openModal } = useModal();

  const id = Number(dashboardid.params.dashboardid);

  const handleOpenModal = (content: React.ReactNode) => {
    openModal(content);
  };

  async function fetchColumns() {
    try {
      const columnData = await getColumnsByDashBoardId(id);
      setColumnData(columnData.data);

      const titles = columnData.data.map((column: any) => column.title);
      setColumnTitles(titles);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchColumns();
  }, []);

  return (
    <>
      <div className='flex bg-custom_gray-_fafafa'>
        <div className='flex min-w-0 max-w-full flex-1 overflow-x-auto'>
          <div className='flex flex-nowrap'>
            {/* 컬럼 컴포넌트 뿌리기 */}
            {columnData &&
              columnData.length > 0 &&
              columnData.map((column: any, index: number) => {
                return (
                  <Column
                    key={column.id}
                    columnId={column.id}
                    title={column.title}
                  />
                );
              })}
            <div
              className='border-gray-_d9d9d9 ml-[20px] mt-[68px] flex h-[70px] min-w-[354px] items-center justify-center rounded-lg border bg-white max-xl:ml-[0px] max-xl:mt-[0px]'
              onClick={() =>
                handleOpenModal(
                  <NewColumnModal
                    dashboardId={id}
                    columnTitles={columnTitles}
                  />,
                )
              }
            >
              <p className='mr-[12px] text-[16px] font-bold'>
                새로운 컬럼 추가하기
              </p>
              <ChipAddIcon size={'large'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

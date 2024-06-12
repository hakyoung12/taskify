'use client';

import { useModal } from '@/context/ModalContext';
import { putColumnByID } from '../ToDoCardModal/api';
import { useState } from 'react';
import DeleteColumnAlertModal from './DeleteColumnAlertModal';
import ModalFooterButtons from '../ModalFooterButtons';
import ModalInput from '../ModalInput';

const UpdateColumnModal = ({
  columnId,
  title,
  setIsColumnChange,
}: {
  columnId: number;
  title: string;
  setIsColumnChange: any;
}) => {
  const { openModal, closeModal } = useModal();
  const [value, setValue] = useState<string>(title);

  const handleOpenModal = (content: React.ReactNode) => {
    openModal(content);
  };

  const isValueChange = (originData: string, changeData: string) => {
    return originData !== changeData;
  };

  const handleUpdateColumn = (inputTitleData: string) => {
    if (isValueChange(title, inputTitleData)) {
      putColumnByID(columnId, inputTitleData, setIsColumnChange);
      closeModal();
    }
  };

  return (
    <div className='flex w-[320px] flex-col sm:w-[540px]'>
      <div className='text-[24px] font-bold text-custom_black-_333236'>
        컬럼 관리
      </div>
      <div>
        <ModalInput
          labelName='이름'
          inputId='title'
          placeFolder={title}
          value={value}
          setValue={setValue}
        />
        {/* 하단 버튼 (삭제하기, 취소, 변경) */}
        <div className='mt-5 flex flex-col sm:flex-row sm:justify-between'>
          <div
            className='mb-3 cursor-pointer self-start text-custom_gray-_9fa6b2 underline sm:mb-0 sm:self-end'
            onClick={() =>
              handleOpenModal(
                <DeleteColumnAlertModal
                  columnId={columnId}
                  setIsColumnChange={setIsColumnChange}
                />,
              )
            }
          >
            삭제하기
          </div>
          <ModalFooterButtons
            actionName={'변경'}
            onAction={() => handleUpdateColumn(value)}
            value={value}
            isDisabled={isValueChange(title, value)}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateColumnModal;

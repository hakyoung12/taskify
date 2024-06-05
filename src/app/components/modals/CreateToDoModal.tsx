'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import { DialogClose } from '../ui/dialog';
import Modal from './Modal';
import { SubmitHandler, useForm } from 'react-hook-form';

const Trigger = (
  <div className='flex items-center justify-center rounded-md w-[100%] h-[40px]'>
    <button
      type='button'
      className='flex items-center justify-center rounded-sm bg-custom_violet-_8 w-[22px] h-[22px] max-sm:w-[20px] max-sm:h-[20px]'
    >
      <div className='w-4 h-4 max-sm:w-[14.5px] max-sm:h-[14.5px]'>
        <Image src='/images/add-card-icon.svg' alt='할 일 추가' fill />
      </div>
    </button>
  </div>
);

const Title = <div>할 일 생성</div>;

type Inputs = {
  assignee: string;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  image: string;
};

type ModalProps = {
  dashboardId: number;
};

function CreateToDoForm({ dashboardId }: ModalProps) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<Inputs>({ mode: 'onSubmit' });

  const INPUT_STYLE =
    'px-4 py-[15px] outline-none rounded-md border border-solid border-custom_gray-_d9d9d9 focus:border-custom_violet-_5534da';
  const ERROR_STYLE = 'text-[14px] text-custom_red';

  //대시보드 Id로 조회한 뒤에 사용할 정보
  const members = [
    { nickname: 'a', id: 1, userId: 1 },
    { nickname: 'b', id: 2, userId: 2 },
    { nickname: 'c', id: 3, userId: 3 },
    { nickname: 'd', id: 4, userId: 4 },
  ];

  const createToDo: SubmitHandler<Inputs> = async () => {};

  return (
    <form
      onSubmit={handleSubmit(createToDo)}
      className='flex flex-col max-w-[544px] w-[100%] mt-[38px] px-3 text-[16px] text-custom_black-_333236 max-xl:mt-[60px] max-sm:mt-10'
    >
      <div className='flex gap-x-2'>
        <label htmlFor='assignee' className='mb-2'>
          담당자
        </label>
        {errors.assignee && (
          <strong className={ERROR_STYLE}>{errors.assignee?.message}</strong>
        )}
      </div>
      <select
        id='assignee'
        className={`${INPUT_STYLE} ${
          errors.assignee ? 'border-custom_red' : ''
        }`}
        aria-invalid={errors.assignee ? 'true' : 'false'}
        {...register('assignee', {
          required: '담당자를 설정해주세요',
        })}
      >
        {members.map((value) => (
          <option key={value.id} value={value.userId}>
            {value.nickname}
          </option>
        ))}
      </select>
      <label htmlFor='password' className='mb-2'>
        비밀번호
      </label>
      <div className='relative mb-5 flex flex-col gap-y-2'>
        <input
          id='password'
          placeholder='비밀번호를 입력해주세요'
          type={passShow ? 'string' : 'password'}
          className={`${INPUT_STYLE} ${
            errors.password ? 'border-custom_red' : ''
          }`}
          aria-invalid={errors.password ? 'true' : 'false'}
          {...register('password', {
            required: '비밀번호를 입력해주세요',
            pattern: {
              value: /^[?a-zA-Z0-9#?!@$ %^&*-/].{7,}$/,
              message: '8자 이상 작성해 주세요',
            },
          })}
        />
      </div>
      <input
        value={'생성'}
        type='submit'
        className='w-[100%] text-[18px] text-custom_white bg-custom_violet-_5534da rounded-lg font-medium h-[50px] flex justify-center items-center cursor-pointer disabled:bg-custom_gray-_9fa6b2 disabled:cursor-default'
        disabled={!isDirty || !isValid}
      />
    </form>
  );
}

const Content = <></>;

export function CreateToDoModal() {
  return <Modal trigger={Trigger} title={Title} content={Content} />;
}

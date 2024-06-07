'use client';

import Image from 'next/image';
import {
  HTMLAttributes,
  KeyboardEvent,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputTags from '../InputTags';
import axios from '@/src/app/api/axios';
import { useModal } from '@/src/context/ModalContext';
import { ModalProps } from './CreateToDoModal';
import { LOGIN_TOKEN } from '../../api/apiStrings';

type Inputs = {
  assignee: string;
  title: string;
  description: string;
  dueDate: string;
  tags: string;
  image: FileList;
};

export default function CreateToDoForm({
  dashboardId = 1,
  columnId = 1,
}: ModalProps) {
  const {
    register,
    handleSubmit,
    setFocus,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<Inputs>({ mode: 'onSubmit' });
  const [focused, setFocused] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState<string>();
  const { closeModal } = useModal();

  const INPUT_STYLE =
    'no-autofill text-[16px] max-sm:text-[14px] px-4 py-[15px] outline-none rounded-md border border-solid border-custom_gray-_d9d9d9 focus:border-custom_violet-_5534da';
  const LABLE_INPUT_STYLE =
    'flex flex-col gpa-y-[10px] text-[18px] max-sm:text-[16px]';

  //대시보드 Id로 조회한 뒤에 사용할 정보
  const members = [
    { nickname: 'a', id: 1, userId: 11 },
    { nickname: 'b', id: 2, userId: 22 },
    { nickname: 'c', id: 3, userId: 33 },
    { nickname: 'd', id: 4, userId: 44 },
  ];

  const createToDo: SubmitHandler<Inputs> = async (cardData) => {
    const { assignee, title, description, dueDate } = cardData;
    try {
      await axios.post('/cards', {
        assigneeUserId: assignee,
        dashboardId: dashboardId,
        columnId: columnId,
        title: title,
        description: description,
        dueDate: dueDate,
        tags: tags,
        imageUrl: imageUrl,
      });
      closeModal();
    } catch (err: any) {
      console.log(err);
    }
  };

  const addTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      let input = e.currentTarget?.value.trim();
      if (input.length === 0 || input[0] === '') return;
      if (tags.indexOf(input) >= 0) {
        e.currentTarget.value = '';
        return;
      }
      setTags((prev) => [...prev, input]);
      e.currentTarget.value = '';
    }
  };

  const onDelTag = (tag: string) => {
    const remainedTags = tags.filter((t) => {
      return t !== tag;
    });
    setTags([...remainedTags]);
  };

  const preventEnterSubmit = (e: KeyboardEvent) => {
    if (
      e.key === 'Enter' &&
      (e.target as HTMLTextAreaElement).id !== 'description'
    ) {
      e.preventDefault();
    }
  };

  const setImage = () => {
    const imgFile = getValues('image')[0];
    const reader = new FileReader();
    if (imageUrl !== undefined) {
      URL.revokeObjectURL(imageUrl);
    }
    if (imgFile) {
      const newImg = URL.createObjectURL(imgFile);
      setImageUrl(newImg);
    } else {
      setImageUrl(undefined);
    }
  };

  function getToday() {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (1 + date.getMonth())).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return year + '-' + month + '-' + day;
  }

  return (
    <article>
      <h2 className='max-sm:max-[20px] mb-[24px] text-[24px] font-bold text-custom_black-_333236 max-sm:mb-[20px]'>
        할 일 생성
      </h2>
      <form
        onSubmit={handleSubmit(createToDo)}
        onKeyDown={preventEnterSubmit}
        className='flex w-[100vw] max-w-[450px] flex-col gap-y-[24px] px-[28px] text-[18px] font-medium text-custom_black-_333236 max-sm:gap-y-[20px]'
      >
        {/* ---------------담당자------------------ */}
        <div className={LABLE_INPUT_STYLE}>
          <label htmlFor='assignee' className='mb-2 self-start'>
            담당자
          </label>
          <select
            id='assignee'
            className={`${INPUT_STYLE} no-datalist-arrow no-select-arrow bg-[url('/images/dropDownArrow.svg')] bg-[length:26px_26px] bg-[center_right_16px] bg-no-repeat`}
            aria-invalid={errors.assignee ? 'true' : 'false'}
            {...register('assignee', {
              required: '담당자를 설정해주세요',
            })}
          >
            {members.map((value) => (
              <option key={value.userId} value={value.userId}>
                {value.nickname}
              </option>
            ))}
          </select>
        </div>
        {/* -------------제목-------------------- */}
        <div className={LABLE_INPUT_STYLE}>
          <label htmlFor='title' className='mb-2 self-start'>
            제목
          </label>
          <input
            id='title'
            placeholder='제목을 입력해주세요'
            type='text'
            className={`${INPUT_STYLE}`}
            aria-invalid={errors.title ? 'true' : 'false'}
            {...register('title', {
              required: '제목을 입력해주세요',
            })}
          />
        </div>
        {/* ---------------설명------------------ */}
        <div className={LABLE_INPUT_STYLE}>
          <label htmlFor='description' className='mb-2 self-start'>
            설명
          </label>
          <textarea
            id='description'
            placeholder='설명을 입력해주세요'
            className={`${INPUT_STYLE} no-scrollbar h-[96px] resize-none`}
            aria-invalid={errors.description ? 'true' : 'false'}
            {...register('description', {
              required: '설명을 입력해주세요',
            })}
          />
        </div>
        {/* ---------------마감일------------------ */}
        <div className={LABLE_INPUT_STYLE}>
          <label htmlFor='dueDate' className='mb-2 self-start'>
            마감일
          </label>
          <div className='relative'>
            <input
              id='dueDate'
              data-placeholder='날짜를 입력해주세요'
              type='date'
              min={getToday()}
              className={`${INPUT_STYLE} customDate delDate relative flex h-[56px] w-[100%] whitespace-nowrap bg-[url('/images/calender-icon.svg')] bg-[center_left_16px] bg-no-repeat pl-[44px] before:text-custom_gray-_9fa6b2 before:content-[attr(data-placeholder)] valid:before:hidden max-sm:h-[53px] max-sm:pl-[42px]`}
              aria-invalid={errors.dueDate ? 'true' : 'false'}
              required
              {...register('dueDate', {
                required: '마감일을 설정해주세요',
              })}
            />
          </div>
        </div>
        {/* ---------------태그------------------ */}
        <div className={LABLE_INPUT_STYLE}>
          <label htmlFor='tags' className='mb-2 self-start'>
            태그
          </label>
          <div
            onClick={() => setFocus('tags')}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`${INPUT_STYLE} ${
              focused ? 'border-custom_violet-_5534da' : ''
            } flex flex-col items-center bg-custom_white`}
          >
            <InputTags tags={tags} onClick={onDelTag} />
            <input
              id='tags'
              placeholder='입력 후 Enter로 추가/태그 클릭시 삭제'
              type='text'
              className={`no-autofill w-[100%] outline-none`}
              onKeyUp={addTag}
            />
          </div>
        </div>
        {/* ---------------이미지------------------ */}
        <div className={`${LABLE_INPUT_STYLE} relative`}>
          <label htmlFor='image' className='mb-2 self-start'>
            이미지
          </label>
          <input
            id='image'
            type='file'
            accept='image/*'
            className={`z-10 w-[76px] text-transparent file:h-[76px] file:w-[76px] file:cursor-pointer file:rounded-md file:border-none ${imageUrl ? 'file:bg-transparent file:bg-none' : 'file:bg-[#f5f5f5] file:bg-[url("/images/add-card-icon.svg")]'} file:bg-[length:28px_28px] file:bg-center file:bg-no-repeat file:text-transparent`}
            aria-invalid={errors.image ? 'true' : 'false'}
            {...register('image', {
              required: true,
              onChange: setImage,
            })}
          />
          {imageUrl && (
            <div className='absolute top-[35px] h-[76px] w-[76px] cursor-pointer overflow-hidden rounded-md'>
              <Image src={imageUrl} fill alt='' />
            </div>
          )}
        </div>
        <input
          value={'생성'}
          type='submit'
          className='flex h-[50px] w-[100%] cursor-pointer items-center justify-center rounded-lg bg-custom_violet-_5534da text-[18px] font-medium text-custom_white disabled:cursor-default disabled:bg-custom_gray-_9fa6b2'
          disabled={!isDirty || !isValid || !tags.length}
        />
      </form>
    </article>
  );
}

'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import axios from '@/api/axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

type Inputs = {
  Id: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<Inputs>({ mode: 'onBlur' });
  const router = useRouter();
  const [passShow, setPassShow] = useState<boolean>(false);

  const INPUT_STYLE =
    'px-4 py-[15px] outline-none rounded-lg border border-solid border-custom_gray-_d9d9d9 focus:border-custom_violet-_5534da';
  const ERROR_STYLE = 'text-[14px] leading-[17px] text-custom_red';

  const tryLogin: SubmitHandler<Inputs> = async () => {
    let res;
    try {
      res = await axios.post('/auth/login', {
        email: getValues('Id'),
        password: getValues('password'),
      });
      router.push('/myDashBoard');
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(tryLogin)}
      className='flex flex-col max-w-[544px] w-[100%] mt-[38px] px-3 text-[16px] leading-[19px] text-custom_black-_333236 max-xl:mt-[60px] max-sm:mt-10'
    >
      <label htmlFor='Id' className='mb-2'>
        아이디
      </label>
      <div className='mb-4 flex flex-col gap-y-2 '>
        <input
          id='Id'
          placeholder='이메일을 입력해주세요'
          type='text'
          className={`${INPUT_STYLE} ${errors.Id ? 'border-custom_red' : ''}`}
          aria-invalid={errors.Id ? 'true' : 'false'}
          {...register('Id', {
            required: '이메일을 입력해주세요',
            pattern: {
              value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
              message: '이메일 형식으로 작성해 주세요.',
            },
          })}
        />
        {errors.Id && (
          <strong className={ERROR_STYLE}>{errors?.Id?.message}</strong>
        )}
      </div>
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
        <button
          className='absolute top-3 right-4'
          type='button'
          onClick={() => setPassShow(!passShow)}
        >
          {passShow ? (
            <Image
              src='/AuthPage/eyeOn.svg'
              width={24}
              height={24}
              alt='비밀번호 보여짐'
            />
          ) : (
            <Image
              src='/AuthPage/eyeOff.svg'
              width={24}
              height={24}
              alt='비밀번호 숨겨짐'
            />
          )}
        </button>
        {errors.password && (
          <strong className={ERROR_STYLE}>{errors?.password?.message}</strong>
        )}
      </div>
      <input
        value={'로그인'}
        type='submit'
        className='w-[100%] text-[18px] text-custom_white bg-custom_violet-_5534da rounded-lg font-medium h-[50px] flex justify-center items-center cursor-pointer disabled:bg-custom_gray-_9fa6b2 disabled:cursor-default'
        disabled={!isDirty || !isValid}
      />
    </form>
  );
}

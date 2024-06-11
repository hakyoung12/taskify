import { HTMLAttributes, PropsWithChildren } from 'react';

export const INPUT_STYLE =
  'no-autofill rounded-md border border-solid border-custom_gray-_d9d9d9 px-4 py-[15px] text-[16px] outline-none focus:border-custom_violet-_5534da h-[48px] max-sm:text-[14px] max-sm:h-[42px]';
export const LABLE_STYLE = 'mb-2 self-start';
export const LABLE_INPUT_STYLE =
  'flex flex-col gpa-y-[10px] text-[18px] max-sm:text-[16px]';
const BaseInput = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLInputElement>>) => {
  const { className, ...restProps } = props;
  return (
    <input
      className={
        'no-autofill ${props.className} rounded-md border border-solid border-custom_gray-_d9d9d9 px-4 py-[15px] text-[16px] outline-none focus:border-custom_violet-_5534da max-sm:text-[14px]'
      }
      {...restProps}
    >
      {children}
    </input>
  );
};

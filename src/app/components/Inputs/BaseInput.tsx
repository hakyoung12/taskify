import { HTMLAttributes, PropsWithChildren } from 'react';

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

export default BaseInput;

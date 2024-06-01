import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function AuthLogo({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col items-center'>
      <Link
        href='/'
        className='flex flex-col items-end gap-y-[30px] w-[200px] max-sm:w-[120px] max-sm:gap-y-[18px]'
      >
        <div className='w-[165px] max-sm:w-[99px]'>
          <Image
            src='/images/logoImg.svg'
            width={165}
            height={190}
            alt='Taskify'
            layout='responsive'
          />
        </div>
        <Image
          src='/images/logoText.svg'
          width={198}
          height={55}
          alt=''
          layout='responsive'
        />
      </Link>
      <span className='text-[20px] text-center leading-6 font-medium mt-[14px] max-xl:mt-3 max-sm:mt-[11px]'>
        {children}
      </span>
    </div>
  );
}

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
        <div className='relative w-[165px] h-[190px] max-sm:w-[99px] max-sm:h-[114px]'>
          <Image src='/images/logoImg.svg' alt='Taskify' fill priority />
        </div>
        <div className='relative w-[198px] h-[55px] max-sm:w-[119px] max-sm:h-[33px]'>
          <Image src='/images/logoText.svg' alt='' fill />
        </div>
      </Link>
      <span className='text-[20px] text-center leading-6 font-medium mt-[14px] max-xl:mt-3 max-sm:mt-[11px]'>
        {children}
      </span>
    </div>
  );
}

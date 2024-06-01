import { ReactNode } from 'react';

export default function LandingCard({
  children,
  name,
  info,
}: {
  children: ReactNode;
  name: string;
  info: string;
}) {
  return (
    <div className='w-[378px] rounded-lg overflow-hidden max-sm:w-[343px]'>
      <div className='flex justify-center items-center bg-black-_4b4b4b w-[100%] h-[260px] max-sm:h-[236px]'>
        <div className='relative w-[300px] max-sm:w-[260px]'>{children}</div>
      </div>
      <div className='bg-black-_171717 px-8 py-[33px] w-[100%] h-[124px] max-sm:h-[113px] max-sm:py-[27px]'>
        <h4 className='font-bold text-[18px] leading-[21px] mb-[18px]'>
          {name}
        </h4>
        <span className='font-[16px] leading-[19px] text-base'>{info}</span>
      </div>
    </div>
  );
}

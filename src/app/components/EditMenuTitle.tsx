import Pagination from './Pagination';

interface EditMenuTitleProps {
  title: string;
  subtitle: string;
}

export default function EditMenuTitle({ title, subtitle }: EditMenuTitleProps) {
  return (
    <div className='grid grid-cols-2 grid-rows-2 place-items-start gap-3 py-8 pb-0 px-[28px]'>
      <div className='text-black_333236 font-Pretendard font-bold text-2xl  max-sm:text-xl'>
        {title}
      </div>
      <div className='flex justify-self-end items-center gap-4'>
        <div className='text-gray-800 font-Pretendard text-xm font-normal max-sm:text-xs'>
          1 페이지 중 1
        </div>
        <Pagination />
      </div>
      <div className='text-gray-_9fa6b2 font-Pretendard font-normal max-sm:text-sm'>
        {subtitle}
      </div>
    </div>
  );
}

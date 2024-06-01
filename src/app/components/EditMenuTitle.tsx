import Pagination from './Pagination';

interface EditMenuTitleProps {
  title: string;
  subtitle: string;
  totalPage: number;
  currentPage: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function EditMenuTitle({
  title,
  subtitle,
  totalPage,
  currentPage,
  onPrev,
  onNext,
}: EditMenuTitleProps) {
  return (
    <div className='grid grid-cols-2 grid-rows-2 place-items-start gap-3 py-8 pb-0 px-[28px]'>
      <div className='text-black_333236 font-Pretendard font-bold text-2xl  max-sm:text-xl'>
        {title}
      </div>
      <div className='flex justify-self-end items-center gap-4'>
        <div className='text-gray-800 font-Pretendard text-xm font-normal max-sm:text-xs'>
          {currentPage} 페이지 중 {totalPage}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          onPrev={onPrev}
          onNext={onNext}
        />
      </div>
      <div className='text-gray-_9fa6b2 font-Pretendard font-normal max-sm:text-sm'>
        {subtitle}
      </div>
    </div>
  );
}

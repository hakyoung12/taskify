import Image from 'next/image';

interface PaginationProps {
  totalPage: number;
  currentPage: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function Pagination({
  totalPage,
  currentPage,
  onPrev,
  onNext,
}: PaginationProps) {
  return (
    <div>
      <button
        onClick={onPrev}
        className='relative w-10 h-10 max-sm:w-9 max-sm:h-9'
        disabled={currentPage === 1}
      >
        <Image
          fill
          src={
            currentPage === 1
              ? '/images/paginationLeft__invaild.svg'
              : '/images/paginationLeft.svg'
          }
          alt='이전 페이지'
        />
      </button>
      <button
        onClick={onNext}
        className='relative w-10 h-10 max-sm:w-9  max-sm:h-9'
        disabled={currentPage === totalPage}
      >
        <Image
          fill
          src={
            currentPage === totalPage
              ? '/images/paginationRight__invaild.svg'
              : '/images/paginationRight.svg'
          }
          alt='다음 페이지'
        />
      </button>
    </div>
  );
}

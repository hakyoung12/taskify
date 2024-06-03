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
      <button onClick={onPrev}>
        <img
          className='w-10 h-10 max-sm:w-9  max-sm:h-9'
          src={
            currentPage === 1
              ? '/images/paginationLeft__invaild.svg'
              : '/images/paginationLeft.svg'
          }
          alt='이전 페이지'
        />
      </button>
      <button onClick={onNext}>
        <img
          className='w-10 h-10 max-sm:w-9  max-sm:h-9'
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

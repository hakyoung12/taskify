export default function Pagination() {
  return (
    <div>
      <button>
        <img
          className='w-10 h-10 max-sm:w-9  max-sm:h-9'
          src='/images/paginationLeft.svg'
          alt='이전 페이지'
        />
      </button>
      <button>
        <img
          className='w-10 h-10 max-sm:w-9  max-sm:h-9'
          src='/images/paginationRight.svg'
          alt='다음 페이지'
        />
      </button>
    </div>
  );
}
